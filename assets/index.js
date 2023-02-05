let ratingSection = document.querySelector(".rating-section")
let thankYouSection = document.querySelector(".thank-you-section")
let ratingButtons = document.querySelectorAll("button.rating-button")
let inputScore = 0
let submitButton = document.querySelector("button.submit-button")

ratingButtons.forEach((ratingButton) => {
    ratingButton.addEventListener("click", (e) => {
        inputScore = e.target.value
    })
})
submitButton.addEventListener("click", (e) => {
    document.querySelector(".thank-you-section").classList.remove("none-display")
    document.querySelector(".score").innerHTML = inputScore
    ratingSection.classList.add("none-display")
})






// for(let i = 0; i < rattingButtonArray.length; i++)
// {
//     var r = rattingButtonArray[i];
//     r.addEventListener("click", function(ev){
//         for(let j=0;j<rattingButtonArray.length;j++)
//         {
//             rattingButtonArray[j].classList.remove("ratting-button-clicked");
//         }
//         ev.target.classList.toggle("ratting-button-clicked");
//         rattingScore=ev.target.innerText;
//     })
// }