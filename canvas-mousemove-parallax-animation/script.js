const gallery = document.getElementById("gallery");

window.onmousemove = (e) => {
  const mouseX = e.clientX,
    mouseY = e.clientY;

  const xDecimal = mouseX / window.innerWidth,
    yDecimal = mouseY / window.innerHeight;

  const maxX = gallery.offsetWidth - window.innerWidth,
    maxY = gallery.offsetHeight - window.innerHeight;

  const panX = maxX * xDecimal - 1,
    panY = maxY * yDecimal - 1;

  gsap.to(gallery, {
    x: -panX,
    y: -panY,
    duration: 0.1,
    ease: "power1.inOut",
  });

  // gallery.animate(
  //   {
  //     transform: `translate(${panX}px, ${panY}px)`,
  //   },
  //   {
  //     duration: 4000,
  //     fill: "forwards",
  //     easing: "ease",
  //   },
  // );
};

const radius = 300,
  blocks = document.querySelectorAll(".block"),
  radius2 = radius * radius;

blocks.forEach((block) => {
  let b = block.getBoundingClientRect();
  block.cx = b.left + b.width / 2 + window.pageXOffset;
  block.cy = b.top + b.height / 2 + window.pageYOffset;

  block.tween = gsap.to(block, {
    scale: 1.5,
    ease: "power1.in",
    paused: true,
  });

  document.addEventListener("mousemove", (e) => {
    let i = blocks.length,
      dx,
      dy,
      block;

    while (i--) {
      block = blocks[i];
      dx = (block.cx - e.pageX) ** 2;
      dy = (block.cy - e.pageY) ** 2;
      block.tween.progress(1 - (dx + dy) / radius2);
    }
  });
});

// const gallery = documet.getElementById("gallery");

// window.onmousemove = (e) => {
//   const mouseX = e.clientX,
//     mouseY = e.clientY;

//   const xDecimal = mouseX / window.innerWidth,
//     yDecimal = mouseY / window.innerHeight;

//   const maxX = gallery.offsetWidth - window.innerWidth,
//     maxY = gallery.offsetHeight - window.innerHeight;

//   const panX = maxX - xDecimal * -1,
//     panY = maxY - yDecimal * -1;

//   gallery.animate(
//     {
//       transform: `translate(${panX}px, ${panY}px)`,
//     },
//     {
//       duration: 4000,
//       fill: "forwards",
//       easing: "ease",
//     },
//   );
// };

// const radius = 300,
//   blocks = document.querySelectorAll(".block"),
//   radius2 = radius * radius,
//   container = document.querySelector("#gallery");

// blocks.forEach((block) => {
//   let b = block.getBoundingClientRect();
//   (block.cx = b.left + b.width / 2 + window.pageXOffset),
//     (block.cy = b.top + b.height / 2 + window.pageYOffset);

//   block.tween = gsap
//     .to(block, {
//       scale: maxScale,
//       ease: "power1.in",
//       paused: true,
//     })
//     .progress(1)
//     .progress(0);

//   document.addEventListener("mousemove", (e) => {
//     let i = blocks.length,
//       dx,
//       dy,
//       block;

//     while (i--) {
//       block = blocks[i];
//       dx = (block.cx - e.pageX) ** 2;
//       dy = (block.cy - e.pageY) ** 2;
//       block.tween.progress(1 - (dx + dy) / radius2);
//     }
//   });
// });
//

function applyBlurrEffect() {
  const elememtToBlur = document.querySelector(
    '.nav, .footer, .header, .text, .img:not([data-enlarged="true"])',
  );
  gsap.to(elememtToBlur, {
    filter: "blur(20px)",
    duration: 0.75,
    ease: "power2.out",
  });
}

function removeBlurrEffect(params) {
  const elememtToBlur = document.querySelector(
    '.nav, .footer, .header, .text, .img:not([data-enlarged="true"])',
  );
  gsap.to(elememtToBlur, {
    filter: "blur(0px)",
    duration: 1,
    ease: "power2.out",
  });
}

function toggleImageSize(event) {
  const img = event.currentTarget;
  const isEnlarged = img.getAttribute("data-enlarged") === "true";
  const originalPosition = JSON.parse(
    img.getAttribute("data-original-position"),
  );
  const viewPortWidth = window.innerWidth;
  const viewPortHeight = window.innerHeight;

  if (!isEnlarged) {
    const enlargedWidth = 500;
    const enlargedHeight = 600;
    const centeredLeft = (viewPortWidth - enlargedWidth) / 2;
    const centeredTop = (viewPortHeight - enlargedHeight) / 2;
    const topCorrection = 75;
    const correctedTop = centeredTop - topCorrection;

    gsap.to(img, {
      zIndex: 1000,
      top: centeredTop + "px",
      left: centeredLeft + "px",
      width: enlargedWidth + "px",
      height: enlargedHeight + "px",
      ease: "power4.out",
      duration: 1,
    });
    img.setAttribute("data-enlarged", "true");
    applyBlurrEffect();
  } else {
    setTimeout(() => removeBlurrEffect(), 100);

    gsap.to(img, {
      zIndex: 1,
      top: originalPosition.top,
      left: originalPosition.left,
      width: "75px",
      height: "100px",
      ease: "power4.out",
      duration: 1,
    });
    img.setAttribute("data-enlarged", "false");
  }
}

imgs.forEach((img, i) => {
  img.setAttribute("data-original-position", JSON.stringify(positions[i]));
  img.setAttribute("data-enlarged", "false");
  img.addEventListener("click", toggleImageSize);
});
