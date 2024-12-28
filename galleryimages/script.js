// navbar
let navbar = document.getElementById('navbar');
let navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', () => {
    navbar.classList.toggle('expanded');
  });

  window.addEventListener('scroll', function () {
    
    if (window.scrollY > 50) { 
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

// form
function validateForm(event) {
    event.preventDefault(); 
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let comments = document.getElementById("comments").value.trim();
    let notRobot = document.getElementById("notRobot").checked;

    let namePattern = /^[A-Za-z]+$/;
    if (!firstName || !namePattern.test(firstName)) {
        alert("Please enter a valid first name (letters only).");
        return false;
    }
    if (!lastName || !namePattern.test(lastName)) {
        alert("Please enter a valid last name (letters only).");
        return false;
    }

    let emailPattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid Gmail address ending with '@gmail.com'.");
        return false;
    }

    if (!comments) {
        alert("Please enter your comments.");
        return false;
    }
    if (!notRobot) {
        alert("Please confirm you are not a robot.");
        return false;
    }

    
    document.fm.reset();

    
    window.location.href = "ThankyouPage.html"; 

    return true;
}



