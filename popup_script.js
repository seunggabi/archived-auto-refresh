function save() {
    let url = document.querySelector("#url").value;

    KEYS.forEach(function(name) {
        let { value } = document.querySelector("#"+name);
        chrome.cookies.set({
            url,
            path: "/",
            name,
            value,
            expirationDate: makeDateTime(365)
        });
    });
}

function toggleSiteList() {
    if(document.querySelector("#siteList").className.indexOf("hidden") >= 0) {
        document.querySelector("#siteList").className = "";
    } else {
        document.querySelector("#siteList").className = "hidden";
    }
}

function renderView() {

    KEYS.forEach(function(name) {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.cookies.get({url: tab.url, name}, function(c) {
                if(!c) return;

                document.querySelector("#"+name).value = c.value;
            });
        });
    });
}

function bindEvent() {
    const siteListButton = document.querySelector("#siteListButton");
    siteListButton && siteListButton.addEventListener("click", toggleSiteList);

    const saveButton = document.querySelector("button#save");
    saveButton && saveButton.addEventListener("click", save);
}

function init() {
    renderView();
    bindEvent();
}

function makeDateTime(exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    return d.getTime();
}

window.addEventListener("load", init);
