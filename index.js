const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordEl1 = document.getElementById("password1")
const passwordEl2 = document.getElementById("password2")
const button = document.getElementById("button")

function getPassword() {
    let password = []
    for(let i = 0; i <= 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        password.push(characters[randomIndex])
    }
    return password.join("")    
}

button.addEventListener("click", function password() {
    passwordEl1.textContent = getPassword()
    passwordEl2.textContent = getPassword()
})

