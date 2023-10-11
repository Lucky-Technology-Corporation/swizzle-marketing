let textToDisplay = "Building an app is complex";
let currentIndex = 19;
let displayElement = document.getElementById("headline_text");
let lastScrollY = 0; // To determine scroll direction

let secondTextToDisplay = "It requires a lot of tools";
let secondBTextToDisplay = "It requires <b>a lot</b> of tools";


let thirdTextToDisplay = "all unaware of each other";

let fourthTextToDisplay = "What if we could";
let fourthBTextToDisplay = "What if we could <b>simplify?</b>";

let fifthTextToDisplay = "Combining";
let fifthTextWords = ["Authentication", "Database", "IDE", "Automatic fixes", "Testing", "Deployments"]
let fifthBTextToDisplay = "into a setup-less browser environment";
let sixthTextToDisplay = "with a copilot that can see <b>everything</b>";

window.addEventListener('beforeunload', function() {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
});


// headline changer
window.addEventListener("scroll", function() {
    if (window.scrollY > lastScrollY && window.scrollY > currentIndex * 75) {
        if (currentIndex < textToDisplay.length) {
            displayElement.textContent += textToDisplay[currentIndex];
            currentIndex++;
        }
    }
    else if (window.scrollY < lastScrollY && window.scrollY < currentIndex * 75) {
        if (currentIndex > 19) {
            currentIndex--;
            displayElement.textContent = textToDisplay.substring(0, currentIndex);
        }
    }
    lastScrollY = window.scrollY;

    if(window.scrollY > 4000){
        displayElement.innerHTML = secondTextToDisplay;
    }
    if(window.scrollY > 5000){
        displayElement.innerHTML = secondBTextToDisplay
    }
    if(window.scrollY > 6000){
        displayElement.innerHTML = secondTextToDisplay
    }
    if(window.scrollY > 7000){
        displayElement.innerHTML = secondBTextToDisplay
    }

    if(window.scrollY > 9000){
        displayElement.textContent = thirdTextToDisplay;
    }

    if(window.scrollY > 14000){
        // displayElement.classList.add("monospace")
        // displayElement.classList.remove("sansserif")
        displayElement.innerHTML = fourthTextToDisplay;
    }
    if(window.scrollY > 15000){
        // displayElement.classList.remove("monospace")
        // displayElement.classList.add("sansserif")
        displayElement.innerHTML = fourthBTextToDisplay;
    }

    if(window.scrollY > 17000){
        displayElement.innerHTML = fifthTextToDisplay;
        if(window.scrollY < 19000){
            this.document.getElementById("imageSS").classList.add("fadeOut")
        }
    }

    if(window.scrollY > 19000){
        // console.log(Math.floor((window.scrollY - 18000) / 1000))
        const scrollPerWord = 4000 / fifthTextWords.length;
        const index = Math.min(Math.floor((window.scrollY - 19000) / scrollPerWord), fifthTextWords.length - 1);
        displayElement.innerHTML = fifthTextWords[index];
        console.log(document.getElementById("imageSS").src)
        if(!document.getElementById("imageSS").src.includes(`screenshots/${index}.gif`)){
            document.getElementById("imageSS").src = `screenshots/${index}.gif`
        }
        if(this.document.getElementById("imageSS").classList.contains("fadeOut")){
            this.document.getElementById("imageSS").classList.remove("fadeOut")
        }
    }

    if(window.scrollY > 23000){
        if(!this.document.getElementById("imageSS").classList.contains("fadeOut")){
            this.document.getElementById("imageSS").classList.add("fadeOut")
        }
        displayElement.innerHTML = fifthBTextToDisplay;
    }

    if(window.scrollY > 25000){
        displayElement.innerHTML = sixthTextToDisplay;
    }
});
  
//icon shower

let divClasses = ["auth", "gcloud", "gpt", "github", "mongo", "postman", "vercel", "push", "vscode", "analytics", "logs", "ec2"]; // This will store our div elements
let divsArray = []; // This will store our div elements
let currentIndexDiv = 0;
let lastScrollYDiv = 0; // To determine scroll direction

// Create and append divs to the container
for (let i = 0; i < divClasses.length; i++) {
    divsArray.push(document.getElementsByClassName(divClasses[i])[0]);
}

window.addEventListener('scroll', function() {
    if (window.scrollY <= 2500) return; // Exit if not scrolled past 2500px

  // Scrolling down
  if (window.scrollY > lastScrollYDiv && window.scrollY > currentIndexDiv * 600 + 2500) {
    if (currentIndexDiv < divsArray.length) {
      divsArray[currentIndexDiv].style.transform = 'scale(1)'; // Scale up
      currentIndexDiv++;
    }
  }
  // Scrolling up
  else if (window.scrollY < lastScrollYDiv && window.scrollY < currentIndexDiv * 600 + 2500) {
    if (currentIndexDiv > 0) {
        currentIndexDiv--;
      divsArray[currentIndexDiv].style.transform = 'scale(0)'; // Scale down
    }
  }
  lastScrollYDiv = window.scrollY; // Update the last scroll position
});


//border maker
let products = document.querySelectorAll('.product');
let borderAdded = false; // To ensure we only add the border once
window.addEventListener('scroll', function() {
    if (window.scrollY >= 10000 && !borderAdded) {
      products.forEach(product => {
        product.classList.add('show-border');
      });
      borderAdded = true;
    }
    if(window.scrollY < 10000){
        products.forEach(product => {
            product.classList.remove('show-border');
          });
          borderAdded = false;
    }
  });
  

  window.addEventListener('scroll', function() {
      if (window.scrollY <= 12000 || this.window.scrollY >= 15000) return; // Exit if not scrolled past 12000px

      let centerX = window.innerWidth / 2;  // Find the horizontal center point of the viewport
      let centerY = window.innerHeight / 2; // Find the vertical center point of the viewport
  
      products.forEach(product => {
            product.classList.remove('transition-scale');
          let rect = product.getBoundingClientRect();
          let productCenterX = rect.left + rect.width / 2;
          let productCenterY = rect.top + rect.height / 2;
  
          // Calculate the distance from the center
          let horizontalDistanceFromCenter = (productCenterX - centerX) / 200; // Division for less intense effect. Adjust as needed.
          let verticalDistanceFromCenter = (productCenterY - centerY) / 200;   // Division for less intense effect. Adjust as needed.
          let scrollEffect = (window.scrollY - 12000) / 40; // Subtracting 12000 to start effect from 0. Adjust the division to control the rate of drift.
  
          product.style.transform = `translate(${horizontalDistanceFromCenter * scrollEffect}px, ${verticalDistanceFromCenter * scrollEffect}px)`;
      });
  });
  

let lastScrollYColor = 0; // Track the last scroll position

window.addEventListener('scroll', function() {
    if (window.scrollY >= 15000 && window.scrollY <= 16000) {
        let progress = (window.scrollY - 15000) / 1000;

        // Clamp progress between 0 and 1
        progress = Math.min(1, Math.max(0, progress));

        // Change the background color gradually
        let color = `rgb(${progress * 255}, ${progress * 255}, ${progress * 255})`;
        let reversedColor = `rgb(${255 - progress * 255}, ${255 - progress * 255}, ${255 - progress * 255})`;

        document.body.style.backgroundColor = reversedColor;


        // Change the color of the headline gradually
        document.getElementsByClassName("headline")[0].style.color = color;

    } else if (window.scrollY > 16000) {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = 'rgb(0,0,0)';
        document.getElementsByClassName("headline")[0].style.color = 'rgb(255,255,255)';
    } else if(window.scrollY < 15000){
        document.body.style.backgroundImage = 'linear-gradient(to right, lightgrey 1px, transparent 1px), linear-gradient(to bottom, lightgrey 1px, transparent 1px);';
        document.body.style.backgroundColor = 'rgb(255,255,255)';
        document.getElementsByClassName("headline")[0].style.color = 'rgb(0,0,0)';
    }

    lastScrollYColor = window.scrollY; // Update the last scroll position for next iteration
});


window.addEventListener('scroll', function() {
    if (window.scrollY >= 15000 && window.scrollY <= 17000) {
        let centerX = window.innerWidth / 2;
        let centerY = window.innerHeight / 2;

        products.forEach(product => {
            product.classList.remove('show-border');

            let rect = product.getBoundingClientRect();

            // Calculate the translation needed to move the product to the center
            let targetX = centerX - (rect.left + 40); // 40 is half the width of a product
            let targetY = centerY - (rect.top + 40);  // 40 is half the height of a product

            let progress = (window.scrollY - 15000) / 2000; // Calculate the progress between 0 and 1

            // Existing translations, assuming they are applied
            let computedStyle = window.getComputedStyle(product);
            let matrix = new DOMMatrix(computedStyle.transform);
            let existingTranslateX = matrix.m41;
            let existingTranslateY = matrix.m42;

            // Calculate the new translations
            let translateX = existingTranslateX + targetX * progress;
            let translateY = existingTranslateY + targetY * progress;

            product.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    }
});

let didRemoveProducts = false
window.addEventListener('scroll', function() {
    if (window.scrollY >= 16000) {
        if(didRemoveProducts) return;
        didRemoveProducts = true
        products.forEach(product => {
            product.style.opacity = '0';
        });
    }
    if(window.scrollY < 17000){
        if(!didRemoveProducts) return;
        didRemoveProducts = false
        products.forEach(product => {
            product.style.opacity = '1';
        });
    }
});

window.addEventListener('scroll', function() {
    if (window.scrollY >= 16000) {
        document.getElementsByClassName("logo")[0].style.opacity = 1;
    }
    else if(window.scrollY < 16500){
        document.getElementsByClassName("logo")[0].style.opacity = 0;
    }
});

window.addEventListener('scroll', function() {
    const offset = -window.scrollY * 0.1; // Adjust the multiplier to control the speed
    document.body.style.backgroundPosition = `0 ${offset}px`;
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    if(scrollPosition < 25000) {
        document.getElementsByClassName("top-left")[0].style.transform = `scale(0)`;
        document.getElementsByClassName("bottom-right")[0].style.transform = `scale(0)`;
        document.getElementsByClassName("top-right")[0].style.transform = `scale(0)`;
        document.getElementsByClassName("bottom-left")[0].style.transform = `scale(0)`;
    }

    if (scrollPosition > 25000 && scrollPosition < 27500) {
        document.getElementsByClassName("top-left")[0].style.transform = `scale(1)`;
    } else if (scrollPosition >= 27500 && scrollPosition < 28750) {
        document.getElementsByClassName("bottom-right")[0].style.transform = `scale(1)`;
    } else if (scrollPosition >= 28750 && scrollPosition < 30000) {
        document.getElementsByClassName("top-right")[0].style.transform = `scale(1)`;
    } else if (scrollPosition >= 30000) {
        document.getElementsByClassName("bottom-left")[0].style.transform = `scale(1)`;
    }
});
