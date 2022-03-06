
// Query Selectors
var toggleBtn = document.querySelector(".toggleBtn");
var menu = document.querySelector(".menu");

// Landing Animation
gsap.from(".text-inner > *", 2, {
    opacity: 0,
    delay: 2,
    stagger: 0.2
})

gsap.from(".toggleBtn", 1, {
    x: -150,
    y: -150,
    delay: 3.4
})

gsap.from(".stripe1 img", 2, {
    y: 400,
    opacity: 0,
    stagger:0.4,
    delay: 5
})

gsap.from(".stripe2 img", 2, {
    opacity: 0,
    stagger:0.4,
    delay: 5
})

// RESPONSIVE



var t1 = new TimelineMax({paused: true});

t1.to(".menu-icon", 1.6,  {
    opacity: 0,
    rotation: 180
})

t1.to(".close-icon", 1.6,  {
    opacity: 1,
    rotation: 180
}, "-=0.9")

t1.to(".menu", 1.6,  {
   scale: 1
}, "-=1")

t1.from(".menu li", 1.6,  {
    opacity: 0,
    x: -100,
    stagger: .4
 })
  
 
t1.reverse();

toggleBtn.onclick = function(){
    t1.reversed(!t1.reversed());
}