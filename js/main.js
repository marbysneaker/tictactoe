


function render(){
    let boxes = []
    let clickedBoxes = []
    for (let i = 0; i<9; i++){
        let number = i + 1;
        boxes.push(`box${number}`)
        console.log(number)
    }
    let marzel = '../tictactoe/images/marzel1.png'
    let lyla = '../tictactoe/images/lyla1.png'
    let x = 'X'
    let o = 'O'
    let playerOne = []
    let playerTwo = []
    let winner = null
    function checkForWin(){
        console.log(playerOne)
        console.log(playerTwo)
        let checker = (arr, target) => target.every(v => arr.includes(v));
        let win1 = ['box1','box2','box3']
        let win2 = ['box4','box5','box6']
        let win3 = ['box7','box8','box9']
        let win4 = ['box1','box4','box7']
        let win5 = ['box2','box5','box8']
        let win6 = ['box3','box6','box9']
        let win7 = ['box1','box5','box9']
        let win8 = ['box3','box5','box7']

        if(checker(playerOne, win1) || checker(playerOne, win2) || checker(playerOne, win3) || checker(playerOne, win4) || checker(playerOne, win5) || checker(playerOne, win6) || checker(playerOne, win7) || checker(playerOne, win8)){
            
            alert('player One is the winner')
            winner = true;
            location.reload();
            return false;
        }
        if(checker(playerTwo, win1) || checker(playerTwo, win2) || checker(playerTwo, win3) || checker(playerOne, win4) || checker(playerTwo, win5) || checker(playerTwo, win6) || checker(playerTwo, win7) || checker(playerTwo, win8)){
            
            alert('player Two is the winner')
            winner = true
            location.reload();
            return false;       
        }
    }
    function displayLetter(box){
        
        if (!clickedBoxes.includes(box)){
            let clicked = document.querySelector(`#${box}`)
            let letter = document.createElement('span')
            let img = document.createElement('img')
            img.src = marzel
            letter.appendChild(img)
            clicked.appendChild(img)
            
            console.log(img)
            letter.textContent = x
            clickedBoxes.push(box)
            playerOne.push(box)
            let newSet = boxes.filter(x => !clickedBoxes.includes(x));
            console.log(newSet)
            checkForWin()
            if (newSet.length == 0){
                if (winner === null){
                    alert('its a TIE')
                    location.reload();

                }
            }
            let randomBox = newSet[Math.floor(Math.random()*newSet.length)];
            console.log(randomBox)
            clickedBoxes.push(randomBox)
            playerTwo.push(randomBox)
            let oponentClicked = document.querySelector(`#${randomBox}`)
            let opponentLetter = document.createElement('span')
            let imgLyla = document.createElement('img')
            imgLyla.src = lyla
            oponentClicked.appendChild(imgLyla)
            opponentLetter.textContent = o
            checkForWin()
            
            

        }
       
    }

    let gameBox = document.querySelector(".body-game")
    for (let box of boxes){
        let newBox = document.createElement('div')
        gameBox.appendChild(newBox)
        newBox.classList.add('box')
        newBox.id = box
        newBox.addEventListener('click',function(event){
            displayLetter(box)

        })

    }

}
render()