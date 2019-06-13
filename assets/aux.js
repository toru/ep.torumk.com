function loadLatestCheckin() {
  fetch("https://torumk.com/checkins/latest")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
      throw new Error("fetch failure");
    })
    .then(function(parsed) {
      console.log(parsed);
    })
    .catch(function(err) {
      console.log(err);
    });
}

class TLNavigator {
  _activate() {
    if (this.entries && this.entries.length) {
      return false;
    }
    this.entries = document.querySelectorAll('.tl-node');
    if (this.entries.length == 0) {
      throw new Error("timeline missing");
    }
    this.currIdx = 0;
    this.entries[this.currIdx].classList.add("active");
    this.entries[this.currIdx].focus();
    return true;
  }

  prev() {
    if (this._activate() || this.currIdx == 0) {
      return;
    }
    this.entries[this.currIdx].classList.remove("active");
    this.currIdx--;
    this.entries[this.currIdx].classList.add("active");
    this.entries[this.currIdx].focus();
  }

  next() {
    if (this._activate() && this.currIdx == 0) {
      return;
    }
    if (this.currIdx+1 == this.entries.length) {
      return;
    }
    this.entries[this.currIdx].classList.remove("active");
    this.currIdx++;
    this.entries[this.currIdx].classList.add("active");
    this.entries[this.currIdx].focus();
  }

  open() {
    let node = this.entries[this.currIdx];
    if (node) {
      window.location.href = node.parentNode.href;
    }
  }
}

class SearchEngine {
  constructor() {
    this.idxPath = "/assets/fts.idx";
  }

  static isLocalStorageAvailable() {
    let s = "e";
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
      fetch(this.idxPath)
        .then(function(res) {
          if (res.ok) {
            return res.json()
          }
          throw new Error("failed to download fts.idx");
        })
        .then(function(parsed) {
          var idxStr = JSON.stringify(parsed);
          if (SearchEngine.isLocalStorageAvailable()) {
            try {
              localStorage.setItem("fts.idx", idxStr);
            } catch(e) {
              console.error(e);
            }
          }
          return idxStr;
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

let nav = new TLNavigator();

document.addEventListener('keyup', function(ev) {
  switch (ev.key) {
    case "h":
      let prev = document.querySelector('.adjacent-posts > .prev');
      if (prev) {
        window.location.href = prev.href;
      }
      break;
    case "j":
      nav.next();
      break;
    case "k":
      nav.prev();
      break;
    case "l":
      let next = document.querySelector('.adjacent-posts > .next');
      if (next) {
        window.location.href = next.href;
      }
      break;
    case "o":
      nav.open();
      break;
    case "Enter":
      if (document.activeElement.classList.contains("tl-node")) {
        nav.open();
      }
      break;
  }
});
