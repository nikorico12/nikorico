const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
  yValue = 0;

let rotateDegree = 0;

function update(cursorPosition){
  parallax_el.forEach(el => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    
    let zValue = cursorPosition - parseFloat(getComputedStyle(el).left) * 0.1;

    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy}px)) rotateY(${rotateDegree}deg) perspective(3050px) translateZ(${-zValue}px)`;

  });
}

update(0);

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
  update(e.clientX);

});
