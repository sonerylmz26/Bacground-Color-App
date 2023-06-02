const body = document.getElementsByTagName("body")
const btnClick = document.getElementById("btnClick")
const btnMouseOver = document.getElementById("btnMouseOver")
const text = document.querySelector("#text")


// let colorAlpha = Math.random().toFixed(1)
// console.log(colorAlpha)


btnClick.addEventListener("click", () => {
      clickFunc();

})

function clickFunc() {

let colorOne = Math.floor(Math.random() * 255);
let colorTwo = Math.floor(Math.random() * 255);
let colorThree = Math.floor(Math.random() * 255);
      document.body.style.backgroundColor = "rgba("+ colorOne +", "+ colorTwo +", "+ colorThree + ") " ; 

     btnClick.style.color = "rgba("+ colorOne +", "+ colorTwo +", "+ colorThree + ") " ; 
     
      text.innerHTML = `rgba: (${colorOne},  ${colorTwo}, ${colorThree}) `
      
}


btnMouseOver.addEventListener("mouseover", () => {

let colorOne = Math.floor(Math.random() * 255);
let colorTwo = Math.floor(Math.random() * 255);
let colorThree = Math.floor(Math.random() * 255);

      document.body.style.backgroundColor = "rgba("+ colorOne +", "+ colorTwo +", "+ colorThree + ") " ; 

      btnMouseOver.style.color = "rgba("+ colorOne +", "+ colorTwo +", "+ colorThree + ") " ; 




      text.innerHTML = `rgba: (${colorOne},  ${colorTwo}, ${colorThree} ) `




})

