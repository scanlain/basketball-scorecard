const IncrementBtns = document.querySelectorAll('.score-btn')
const resetScoreBtn = document.querySelector('#reset-score-btn')

const homeSection = document.querySelector('#home')
const guestSecton = document.querySelector('#guest')

let homeScore = 0
let guestScore = 0

function updateLeaderStyles(){

    homeSection.style.backgroundColor = 'blanchedalmond'
    guestSecton.style.backgroundColor = 'blanchedalmond'

    if(homeScore > guestScore){
        homeSection.style.backgroundColor = 'green'
    }
    else if(guestScore > homeScore){
        guestSecton.style.backgroundColor = 'green'
    }
}

IncrementBtns.forEach((btn) => {

    btn.addEventListener('click', function(event){

        let clickedBtn = event.target
        console.log('clicked btn :', clickedBtn)

        console.log('clicked btn text :', clickedBtn.textContent)
        
        let NumberToIncrement = Number(clickedBtn.textContent.trim())
        console.log('score to increase : ', NumberToIncrement)
        
        let parentDiv = clickedBtn.closest('.score-section')
        console.log('Parent div : ', parentDiv)

        if(parentDiv.id === "home"){

            homeScore += NumberToIncrement
            parentDiv.querySelector('.score').textContent = homeScore

        }
        else if(parentDiv.id === "guest"){

            guestScore += NumberToIncrement
            parentDiv.querySelector('.score').textContent = guestScore

        }

        updateLeaderStyles()

    })

})

resetScoreBtn.addEventListener('click', function(){

    homeScore = 0
    guestScore = 0

    let scoreSections = document.querySelectorAll('.score-section')

    scoreSections.forEach((section) => {
        section.querySelector('.score').textContent = 0
    })

    updateLeaderStyles()
})
