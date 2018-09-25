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

class SearchEngine {
  constructor() {
    this.idxPath = "/assets/fts.idx";
  }

  static isLocalStorageAvailable() {
    var s = "e";
    try {
      localStorage.setItem(s,s);
      localStorage.removeItem(s);
      return true;
    } catch(e) {
      return false;
    }
  }

  loadSearchIndex() {
    if (self.fetch) {
      fetch("/assets/fts.idx")
        .then(function(res) {
          if (res.ok) {
            return res.json()
          }
          throw new Error('failed to download');
        })
        .then(function(parsed) {
          // TODO: cache in localStorage
          console.log(JSON.stringify(parsed));
        })
        .catch(function(err) {
          console.log(err);
        });
    } else {
      // TODO: fallback to XMLHttpRequest
      return false;
    }
  }
}
