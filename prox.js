window.onload = () => {
  let elements = document.querySelectorAll("a, link, img, script");

  elements.forEach(el => {
    if (el.href) {
      if (el.nodeName == "A") {
        el.href = "javascript:alert('Sorry, links don't work yet')";
      } else {
        el.href = `https://cdn.jsdelivr.net/gh/${base}/${base}.github.io/${path}`;
      }
    } else if (el.src) {
      el.src = `https://cdn.jsdelivr.net/gh/${base}/${base}.github.io/${path}`;
    }
  });
};
