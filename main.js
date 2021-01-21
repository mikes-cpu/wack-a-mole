const holeTopLeft = document.querySelector(".box__top-left"); 
const moleTopLeft = document.querySelector(".mole__top-left"); 
const holeTopMid = document.querySelector(".box__top-mid"); 
const moleTopMid = document.querySelector(".mole__top-mid"); 
const holeTopRight = document.querySelector(".box__top-right"); 
const moleTopRight = document.querySelector(".mole__top-right"); 
const holeMidLeft = document.querySelector(".box__mid-left"); 
const moleMidLeft = document.querySelector(".mole__mid-left"); 
const holeMidMid = document.querySelector(".box__mid-mid"); 
const moleMidMid = document.querySelector(".mole__mid-mid"); 
const holeMidRight = document.querySelector(".box__mid-right"); 
const moleMidRight = document.querySelector(".mole__mid-right"); 
const holeBottomLeft = document.querySelector(".box__bottom-left"); 
const moleBottomLeft = document.querySelector(".mole__bottom-left"); 
const holeBottomMid = document.querySelector(".box__bottom-mid"); 
const moleBottomMid = document.querySelector(".mole__bottom-mid"); 
const holeBottomRight = document.querySelector(".box__bottom-right"); 
const moleBottomRight = document.querySelector(".mole__bottom-right"); 

const playButtonPress = document.querySelector(".play-button");
const scoreHTML = document.querySelector(".score")  
// const mole = document.querySelector(".mole")  


let score = 0;

const changeScore = () => {
    scoreHTML.innerHTML = `<p>Score: ${score}</p>`;
}
changeScore()

const timeout = ((mole) => {
    setTimeout(function(){ mole.style.display = "none"; }, 2000);
})



const NumberRandomiser = () => {
    return Math.floor(Math.random() * 9) + 1;
}
const showRandomMole = () => {
    switch (NumberRandomiser()) {
        case 1: moleTopLeft.style.display = "block"; timeout(moleTopLeft); break;
        case 2: moleTopMid.style.display = "block"; timeout(moleTopMid); break;
        case 3: moleTopRight.style.display = "block"; timeout(moleTopRight); break;
        case 4: moleMidLeft.style.display = "block"; timeout(moleMidLeft); break;
        case 5: moleMidMid.style.display = "block"; timeout(moleMidMid); break;
        case 6: moleMidRight.style.display = "block"; timeout(moleMidRight); break;
        case 7: moleBottomLeft.style.display = "block"; timeout(moleBottomLeft); break;
        case 8: moleBottomMid.style.display = "block"; timeout(moleBottomMid); break;
        case 9: moleBottomRight.style.display = "block"; timeout(moleBottomRight); break;
    }
}

let timerID = ((mole) => {
    if (score < 10) {
    setInterval(showRandomMole, 3000);
    } else if (score > 10) {
    setInterval(showRandomMole, 1000);
    }
})

// timerID(moleTopRight)
// timerID(moleMidLeft)
// timerID(moleMidMid)
// timerID(moleMidRight)
// timerID(moleBottomLeft)
// timerID(moleBottomMid)
// timerID(moleBottomRight)



// var myWindow = window.open("", "", "width=200, height=100");
// myWindow.document.write("<p>This is 'myWindow'</p>");
// setTimeout(function(){ myWindow.close() }, 3000);

// const showMole = (() => {
//     showRandomMole()
    
// })
// showMole()
// showMole(moleTopLeft)
// showMole(moleTopMid)
// showMole(moleTopRight)
// showMole(moleMidLeft)
// showMole(moleMidMid)
// showMole(moleMidRight)
// showMole(moleBottomLeft)
// showMole(moleBottomMid)
// showMole(moleBottomRight)

playButtonPress.addEventListener("click", () => {
        timerID()
        // setTimeout(function(){ mole.style.display = "none"; }, 3000)
})

// (moleTopLeft)
// (moleTopMid)
// (moleTopRight)
// (moleMidLeft)
// (moleMidMid)
// (moleMidRight)
// (moleBottomLeft)
// (moleBottomMid)
// (moleBottomRight)

const clickMole = ((hole, mole) => {
    hole.addEventListener("click", (event) => {
        if (mole.style.display === "block") {
            mole.style.display = "none" 
            // showRandomMole()
            score++
            changeScore()
        } else if (mole.style.display === "none") {
            event.preventDefault()
        }
    })
})
clickMole(holeTopLeft, moleTopLeft)
clickMole(holeTopMid, moleTopMid)
clickMole(holeTopRight, moleTopRight)
clickMole(holeMidLeft, moleMidLeft)
clickMole(holeMidMid, moleMidMid)
clickMole(holeMidRight, moleMidRight)
clickMole(holeBottomLeft, moleBottomLeft)
clickMole(holeBottomMid, moleBottomMid)
clickMole(holeBottomRight, moleBottomRight)




