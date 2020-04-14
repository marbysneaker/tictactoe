


function render(){
    let boxes = []
    let clickedBoxes = []
    for (let i = 0; i<9; i++){
        let number = i + 1;
        boxes.push(`box${number}`)
        console.log(number)
    }
    let x = 'X'
    let o = 'O'
    let playerOne = x
    let playerTwo = o
    function displayLetter(box){
        
        if (!clickedBoxes.includes(box)){
            let clicked = document.querySelector(`#${box}`)
            let letter = document.createElement('span')
            clicked.appendChild(letter)
            letter.textContent = playerOne
            clickedBoxes.push(box)
            let newSet = boxes.filter(x => !clickedBoxes.includes(x));
            console.log(newSet)
            let randomBox = newSet[Math.floor(Math.random()*newSet.length)];
            console.log(randomBox)
            clickedBoxes.push(randomBox)

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