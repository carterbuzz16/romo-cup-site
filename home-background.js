const homeBackgroundCandidates = [
  "assets/blue romo cup.png",
  "assets/IMG_5206.jpg",
  "assets/home-background.jpg",
  "assets/home-background.jpeg",
  "assets/home-background.png",
  "assets/home-background.webp",
  "assets/romo-home.jpg",
  "assets/romo-home.jpeg",
  "assets/romo-home.png",
  "assets/group-photo.jpg",
  "assets/group-photo.jpeg",
  "assets/group-photo.png",
];

function resolveHomeBackground(candidates, onSuccess) {
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

resolveHomeBackground(homeBackgroundCandidates, (src) => {
  document.body.style.setProperty("--home-bg-image", `url("${src}")`);
});
