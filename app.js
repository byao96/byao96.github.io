//selectors 
const navlinks = document.querySelectorAll('.navlinks');
const tooltip = document.querySelector('.tooltip');
const blogger = document.querySelector('.bloggers');
const blurbContainer = document.querySelector('#blurb-container');
const carouselContainer = document.querySelector('.carousel-container');

//event listeners
tooltip.addEventListener("click", function() {
    window.scrollToTop(1000);
});

blogger.addEventListener("click", changeBlogger);


//functions 
function scrollToTop (duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const cosParameter = document.scrollingElement.scrollTop / 2;
    let scrollCount = 0, oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollCount will be Infinity
            scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
            if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

function useDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  function changeBlogger(e) {
    const name = e.target; 
    if (name.innerHTML=='Mike') {
        clearBlurb();
        let blurb = blurbContainer.firstElementChild;
        blurb.classList.remove('hidden');
        blurb.classList.add('active');
        return;
    }
    else if (name.innerHTML=='Chandler') {
        clearBlurb();
        let blurb = blurbContainer.children[1];
        blurb.classList.add('active');
        return;
    }
    else if (name.innerHTML=='Peter') {
        clearBlurb();
        let blurb = blurbContainer.lastElementChild;
        blurb.classList.add('active');
        return;
    }
    else {
        return;
    }
  }

function clearBlurb (){
    const blurbs = blurbContainer.children;
    for (let i=0;i<3;i++) {
        if (blurbs[i].classList.contains('active')) {
            blurbs[i].classList.remove('active');
            blurbs[i].classList.add('hidden');
        }
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    // switch (n) {
    //     case 1: 
    //         carouselContainer.style.background = "url('./img/ny.jpg')"
    //         break;
    //     case 2: 
    //         carouselContainer.style.background = "url('./img/chicago.jpg')"
    //         break;
    //     case 3: 
    //         carouselContainer.style.background = "url('./img/la.jpg')"
    //         break;
    // }
    // console.log(n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("img-slide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
    switch (slideIndex) {
        case 1: 
            carouselContainer.style.background = "url('./img/ny.jpg')";
            carouselContainer.style.backgroundRepeat = "repeat-y"; 
            carouselContainer.style.backgroundSize = "cover";
            carouselContainer.style.backgroundPosition = "center";
            break;
        case 2: 
            carouselContainer.style.background = "url('./img/chicago.jpg')";
            carouselContainer.style.backgroundRepeat = "repeat-y"; 
            carouselContainer.style.backgroundSize = "cover";
            carouselContainer.style.backgroundPosition = "center";
            break;
        case 3: 
            carouselContainer.style.background = "url('./img/la.jpg')";
            carouselContainer.style.backgroundRepeat = "repeat-y"; 
            carouselContainer.style.backgroundSize = "cover";
            carouselContainer.style.backgroundPosition = "center";
            break;
    }
} 