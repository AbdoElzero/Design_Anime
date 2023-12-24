let one = document.querySelector(".li-1");
let two = document.querySelector(".li-2");
let three = document.querySelector(".li-3");
let four = document.querySelector(".li-4");
let bOne = document.querySelector(".b-1");
let bTwo = document.querySelector(".b-2");
let bThree = document.querySelector(".b-3");
let bFour = document.querySelector(".b-4");
let bSix = document.querySelector(".b-5");
const randomBack = document.querySelectorAll(".box-two ul li");

randomBack.forEach(a => {

    a.addEventListener("click", (e) => {

        handleActive(e)

    })

});

one.onclick = function () {
    bOne.style.display = "block"
    bSix.style.display = "block"
    bThree.style.display = "block"
    bFour.style.display = "block"
    bTwo.style.display = "block"
}

two.onclick = function () {
    bOne.style.display = "none"
    bSix.style.display = "none"
    bTwo.style.display = "block"
    bThree.style.display = "block"
    bFour.style.display = "block"
}

three.onclick = function () {
    bOne.style.display = "block"
    bSix.style.display = "block"
    bTwo.style.display = "block"
    bThree.style.display = "none"
    bFour.style.display = "none"
}

four.onclick = function () {
    bOne.style.display = "none"
    bSix.style.display = "none"
    bTwo.style.display = "none"
    bThree.style.display = "none"
    bFour.style.display = "block"
}

function handleActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".tiv").forEach(element => {
  
      element.classList.remove("tiv");
  
    });
     // Add Active Class On Self
  ev.target.classList.add("tiv");

};

let allDiv = document.querySelectorAll(".trending .all-box .show img");
let allP = document.querySelectorAll(".trending .all-box .show .one h5")[0];

allDiv.forEach(img => {

    img.addEventListener("click", (e) => {
        
        console.log("div")
        let overlay = document.createElement("div");
        // Creata Overlay Element
        overlay.className = "popup-overlay";
        
        document.body.appendChild(overlay);
        
        // Craeta The Popup Box 
        let popupBox = document.createElement("div");
        
        popupBox.className = "popup-box";

        if (img.alt === "") {
            let imgHeading = document.createElement("h3");
            imgHeading.className = "headone"
            let textimg = document.createTextNode(allP.textContent);
            
            imgHeading.appendChild(textimg);
            popupBox.appendChild(imgHeading)
            
          }
        
        // Craeta The Image 
        let popupImage = document.createElement("img");
    
        popupImage.src = img.src
    
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);
    
        // Creata The Cloes Span 
        let cloesButton = document.createElement("span");
    
        let cloesButtonText = document.createTextNode("X");
    
        cloesButton.appendChild(cloesButtonText);
    
        cloesButton.className = "cloes-button";
    
        popupBox.appendChild(cloesButton)
    
        // cloesButton.onclick = function () {
        //   cloesButton.parentElement.remove()
        //   overlay.remove()
        // }

    })

});

document.addEventListener("click", function (e) {

    if (e.target.className == 'cloes-button') {
      e.target.parentNode.remove()
  
      document.querySelector('.popup-overlay').remove()
    }
  });
