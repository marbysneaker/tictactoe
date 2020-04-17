


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
    let winner = 0
    let whosTurn = []
    let newSet = []
    let modal = document.querySelector(".modal")
    let modal1 = document.querySelector(".modal")
    let modal2 = document.querySelector(".modal")
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
            
            let newModal = document.createElement('div')
            modal.appendChild(newModal)
            winner = 1;
            let frame = document.createElement('img')
            frame.src = marzel
            frame.classList.add('rainbow')
            modal.appendChild(frame)
            let snake = document.createElement('div')
            snake.className = 'snake'
            modal.appendChild(snake)
            let snake1 = document.createElement('div')
            snake1.className ='snake1'
            snake1.style = 'animation-delay: 1.3s'
            modal1.appendChild(snake1)
            let snake2 = document.createElement('div')
            snake2.className = 'snake2' 
            snake2.style = 'animation-delay: 2.7s'  
            modal2.appendChild(snake2)
            frame.addEventListener('click',function(event){
                closeModal()
            })
        }
        if(checker(playerTwo, win1) || checker(playerTwo, win2) || checker(playerTwo, win3) || checker(playerTwo, win4) || checker(playerTwo, win5) || checker(playerTwo, win6) || checker(playerTwo, win7) || checker(playerTwo, win8)){
            
            alert('player Two is the winner')
            winner = 2
            location.reload();
            return false;       
        }
        if (newSet.length == 0){
            if (winner !== null){
                winner = 3
                alert('its a TIE')
                location.reload();

            }
        }
    }
    function sleep(milliseconds) { 
        let timeStart = new Date().getTime(); 
        while (true) { 
            let elapsedTime = new Date().getTime() - timeStart; 
            if (elapsedTime > milliseconds) { 
                break; 
            } 
        } 
    } 
    function oneTurn(box){
        console.log(box)
        console.log(!whosTurn)
        if (!clickedBoxes.includes(box)){
             if(winner === 0 && (whosTurn[-1]=== 'player2' || !whosTurn === false)){
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
                    whosTurn.push('player1')
                    newSet = boxes.filter(x => !clickedBoxes.includes(x));
                    console.log(newSet)
                    displayLetter()
            }    
        }
    }

    function twoTurn(){
        console.log(whosTurn.slice(-1)[0])
        sleep(5000)
        if (winner === 0 && whosTurn.slice(-1)[0]=== 'player1'){
            let randomBox = newSet[Math.floor(Math.random()*newSet.length)];
            console.log(randomBox)
            clickedBoxes.push(randomBox)
            playerTwo.push(randomBox)
            let oponentClicked = document.querySelector(`#${randomBox}`)
            let opponentLetter = document.createElement('span')
            let imgLyla = document.createElement('img')
            imgLyla.src = lyla
            oponentClicked.appendChild(imgLyla)
            whosTurn.push('player2')
            opponentLetter.textContent = o
            
        }    
    }
    function displayLetter(){   
        checkForWin()
        twoTurn() 
        checkForWin()   
    }

    let gameBox = document.querySelector(".body-game")
    for (let box of boxes){
        newSet.push(box)
        let newBox = document.createElement('div')
        gameBox.appendChild(newBox)
        newBox.classList.add('box')
        newBox.id = box
        newBox.addEventListener('click',function(event){
            oneTurn(box)

        })

    }
    function closeModal(){
        location.reload();
        return false; 

    }
}
render()