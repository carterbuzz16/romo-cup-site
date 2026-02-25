const logoCandidates = [
  "assets/IMG_5206.jpg",
  "assets/IMG_4663.png",
  "assets/romo-cup-logo.png",
  "assets/romo-cup-logo.jpg",
  "assets/romo-cup-logo.jpeg",
  "assets/romo-cup-logo.webp",
  "assets/romo-cup-logo.svg",
  "assets/logo.png",
  "assets/logo.jpg",
  "assets/logo.jpeg",
  "assets/logo.webp",
  "assets/logo.svg",
];

function resolveLogo(candidates, onSuccess) {
  let i = 0;

  function tryNext() {
    if (i >= candidates.length) {
      return;
    }

    const test = new Image();
    const src = candidates[i];
    i += 1;

    test.onload = () => onSuccess(src);
    test.onerror = tryNext;
    test.src = src;
  }

  tryNext();
}

resolveLogo(logoCandidates, (src) => {
  document.querySelectorAll(".logo-image").forEach((img) => {
    img.src = src;
  });
});
