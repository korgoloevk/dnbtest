const images = {
  vldl: {
    src: "images/vldl.png",
    min: 0,
    max: 9,
  },
  oxi: {
    src: "images/oxi.png",
    min: 10,
    max: 21,
  },
  fixik: {
    src: "images/fixik.png",
    min: 22,
    max: 57,
  },
  romeo: {
    src: "images/romeo.png",
    min: 58,
    max: 73,
  },
  ded: {
    src: "images/ded.png",
    min: 74,
    max: 91,
  },
  brsrk: {
    src: "images/brsrk.png",
    min: 92,
    max: 108,
  },
};

function createImages(obj) {
  for (const key in obj) {
    const newImage = new Image();
    newImage.src = obj[key].src;
    obj[key].img = newImage;
  }
}

createImages(images);
