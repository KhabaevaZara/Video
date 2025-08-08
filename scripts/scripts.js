const keyboarddDiv = document.querySelector(".keyboard");

const getRandomWord = () =>{
    const {word , hint }= wordList[Math.floor(Math.random() * wordList.length)]
}

//Creating keyboard buttons 
for (let i= 97; i<= 122; i++ ){
    const button = document.createElement("button");
    button.innerText=String.fromCharCode(i); 
    keyboarddDiv.appendChild(button);

}