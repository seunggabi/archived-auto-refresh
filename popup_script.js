function save() {
	DATAS.forEach(function(item) {
		var value = document.querySelector("#"+item).value;

		chrome.cookies.set({
			url: MASTER_URL,
			path: "/",
			name: item,
			value: value,
			expirationDate: makeDateTime(365)
		});

		if(item === "url") {
			let protocol = value;
			DATAS.forEach(function(key) {
				chrome.cookies.set({
					url: protocol,
					path: "/",
					name: key,
					value: document.querySelector("#"+key).value,
					expirationDate: makeDateTime(365)
				});
			});
		}
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
	DATAS.forEach(function(item) {
		chrome.cookies.get({url:MASTER_URL, name:item}, function(c) {
			var DOM = document.querySelector("#"+item);
			DOM.value = c.value;
		});
	});
}

function bindEvent() {
	var siteListButton = document.querySelector("#siteListButton");
	siteListButton && siteListButton.addEventListener("click", toggleSiteList);

	var saveButton = document.querySelector("button#save");
	saveButton && saveButton.addEventListener("click", save);
}

function init() {
	renderView();
	bindEvent();
}

function makeDateTime(exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	return d.getTime();
}

window.addEventListener("load", init);