// const card = document.querySelector(".card");
// const box = document.querySelector(".box1 img");


// card.addEventListener("mousemove", (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   box.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });

// card.addEventListener("mouseenter", (e) => {
//   box.style.transition = "none";
// });

// card.addEventListener("mouseleave", (e) => {
//   box.style.transition = "all 0.5s ease";
//   box.style.transform = `rotateY(0deg) rotateX(0deg)`;
// });

// const gallery = document.querySelector(".gallery");
// const card = document.querySelector(".card");
// const box1 = document.querySelector(".box1");
// const box2 = document.querySelector(".box2");
// const box3 = document.querySelector(".box3");
// const box4 = document.querySelector(".box4");
// const box5 = document.querySelector(".box5");
// const box6 = document.querySelector(".box6");
// const box7 = document.querySelector(".box7");
// const box8 = document.querySelector(".box8");
// const title = document.querySelector(".title");

// const t1 = new TimelineMax();

// t1.fromTo(box1, 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
//   .fromTo(box2, 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
//   .fromTo(box3, 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
//   .fromTo(box4, 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
//   .fromTo(box5, 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
//   .fromTo(box6, 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
//   .fromTo(box7, 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
//   .fromTo(box8, 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut });