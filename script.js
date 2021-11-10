window.addEventListener("load", () => {
    setTimeout( () => {
        document.getElementById("loading").classList.remove("active");
    }, 600)
});

$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

$(function() {
    $('.hambmenu_anchor , .logo').click(function() {
        $('.globalMenuSp').removeClass('active');
        $('.hamburger').removeClass('active');
    });
  });

const targetElements = document.querySelectorAll(".animation-target");
window.addEventListener("scroll", () => {
    for(let i = 0; i < targetElements.length; i++) {
        const getTargetDistance = targetElements[i].getBoundingClientRect().top + targetElements[i].clientHeight * .5;
        if(window.innerHeight > getTargetDistance) {
            targetElements[i].classList.add("active");
        }
    }
});

const targetElement = document.querySelectorAll(".animation");
window.addEventListener("scroll", () => {
    for(let i = 0; i < targetElement.length; i++) {
        const TargetDistance = targetElement[i].getBoundingClientRect().top - targetElement[i].clientHeight * 1.5;
        if(window.innerHeight > TargetDistance) {
            targetElement[i].classList.add("active");
        }
    }
});

const animationTextElements = document.querySelectorAll(".text-animation");
for(let i = 0; i < animationTextElements.length; i++) {
    const targetText = animationTextElements[i], 
    texts = targetText.textContent,
    textArray = [];

    targetText.textContent = "";

    for(let j = 0; j < texts.split("").length; j++) {
        const text = texts.split("")[j];
        if(text === "") {
            textsArray.push("");
        } else {
            textArray.push('<span style="animation-delay: ' + (j * .05) + 's;">' + text + '</span>');
        }
    }

    for (let k = 0; k < textArray.length; k++) {
        targetText.innerHTML += textArray[k];
    }
}
