function aside () {
const bars = document.querySelector(".bars");
const closes =document.querySelector(".closes");
const asidecontainer = document.querySelector(".aside-container");


const openaside = () => {
    asidecontainer.classList.add("show-aside");
};

const closeaside = () => {
    asidecontainer.classList.remove("show-aside");
};

bars.addEventListener("click",openaside);
closes.addEventListener("click",closeaside);

};
aside ();

// aside is over
// nav start
function nav () {
var lastscrolltop = 0;
navbar =document.querySelector(".nav");
window.addEventListener("scroll", function () {
    var scrolltop = this.window.scrollY || this.document
    .documentElement.scrolltop;
    if (scrolltop > lastscrolltop){
        navbar.style.top = "-60px";
    }
    else{
        navbar.style.top = "0";
    }
    lastscrolltop = scrolltop;
})
};
nav () ;