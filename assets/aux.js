document.addEventListener('keyup', function(ev) {
  switch (ev.key) {
    case "h":
      var prev = document.querySelector('.adjacent-posts > .prev');
      if (prev) {
        window.location.href = prev.href;
      }
      break;
    case "l":
      var next = document.querySelector('.adjacent-posts > .next');
      if (next) {
        window.location.href = next.href;
      }
      break;
  }
});

function isLocalStorageAvailable() {
  var s = "e";
  try {
    localStorage.setItem(s,s);
    localStorage.removeItem(s);
    return true;
  } catch(e) {
    return false;
  }
}
