(function () {
  const LOW_RES = "https://picsum.photos/800/450";
  const HIGH_RES = "https://picsum.photos/1920/1080";

  document.body.style.backgroundImage = `url(${LOW_RES})`;

  const img = new Image();
  img.src = HIGH_RES;

  img.onload = () => {
    document.body.style.backgroundImage = `url(${HIGH_RES})`;
  };
})();
