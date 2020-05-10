function a(link, $parents) {
  link.urls && link.urls.forEach(url => {
    let $a = $(doms.a);
    $a.prop('href', url.url);
    $a.text(`(${url.name})`);
    $a.addClass(link.className);

    $parents.append($a);
  });

  if(link instanceof Array) {
    link.forEach(l => {
      let $a = $(doms.a);
      $a.prop('href', l.url);
      $a.text(`${l.name}`);
      $a.addClass(l.className);

      let $li = $(doms.li);
      $li.append($a);
      $parents.append($li);
    })
  }
}

function renderLink() {
  a(data.review, $('#review'));

  data.project.forEach(link => {
    let $wrapper = $(doms.li);
    $wrapper.text(link.name);

    a(link, $wrapper);

    $('#project').append($wrapper);
  });
}

function save() {
  let url = $('#url').val();

  KEYS.forEach(function(name) {
    let value = $('#' + name).val();
    chrome.cookies.set({
      url,
      path: '/',
      name,
      value,
      expirationDate: makeDateTime(365)
    });
  });

  start();
}

function renderView() {
  KEYS.forEach(function(name) {
    try {
      chrome.tabs.getSelected(null, function(tab) {
        chrome.cookies.get({url: tab.url, name}, function(c) {
          if (!c) return;

          $('#' + name).val(c.value);
        });
      });
    } catch (e) {
      console.log(e);
    }
  });
}

function keydownSaveAndStart(e) {
  if(e.keyCode !== 13) {
    return;
  }

  save();
}

function start() {
  setTimeout(() => {
    chrome.tabs.getSelected(null, function(tab) {
      const code = 'window.location.reload();';

      chrome.tabs.executeScript(tab.id, { code });
    });
  }, 10);
}

function bindEvent() {
  const $btn = $('button#save');
  $btn && $btn.click(save);

  const $text = $('input[type="text"]');
  $text && $text.keydown(keydownSaveAndStart);
}

function init() {
  renderLink();
  renderView();
  bindEvent();
}

function makeDateTime(exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  return d.getTime();
}

window.addEventListener('load', init);
