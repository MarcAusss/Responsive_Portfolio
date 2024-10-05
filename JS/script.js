let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logospan = document.querySelectorAll('.logo');
let logospan2 = document.querySelectorAll('.logo2');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(() => {
        
        logospan.forEach((span, idx)=>{
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logospan.forEach((span, idx)=>{
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx +1) * 50);
            })
        }, 4000);

        setTimeout(() => {
            intro.style.top = '-100vh'
        }, 5000);

    });
})

// on scroll

const containers = document.querySelectorAll('.container');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4; 

    containers.forEach(container =>{
        const containerTop = container.getBoundingClientRect().top;

        if (containerTop < triggerBottom){
            container.classList.add('show');
        } else {
            container.classList.remove('show');
        }
    });
}


function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    // Disable scroll animation for screens smaller than 768px
    if (window.innerWidth < 768) {
        containers.forEach(container => {
            container.classList.add('show'); // Ensure all containers are visible
        });
        return; // Exit the function to skip the scroll animation
    }

    containers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top;

        if (containerTop < triggerBottom) {
            container.classList.add('show');
        } else {
            container.classList.remove('show');
        }
    });
}

// Call checkBoxes function on scroll
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function toggleScrollAnimation() {
    if (window.innerWidth >= 768) {
        window.addEventListener('scroll', checkBoxes);
        checkBoxes(); // Run the checkBoxes function initially
    } else {
        window.removeEventListener('scroll', checkBoxes);
        containers.forEach(container => {
            container.classList.add('show'); // Show all containers without animation
        });
    }
}

// Call the function on page load and when the window is resized
window.addEventListener('resize', toggleScrollAnimation);
toggleScrollAnimation();