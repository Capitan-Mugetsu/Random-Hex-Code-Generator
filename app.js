const outputColor = document.querySelector('#output-color span')
// console.log(outputColor);
const output = document.getElementById('output')
const genBtn = document.getElementById('gen-btn')
const copyBtn = document.getElementById('copy-btn')
const customAlert = document.querySelector('.custom-alert')
const hexString = "0123456789abcdef"

const genHexCode = () => {

    let hexCode = '#'
    for (let i = 0; i < 6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)]        
    }

    output.value = hexCode
    outputColor.classList.remove('show-color')

    setTimeout(() => {
        outputColor.classList.add('show-color')
    }, 10);

    outputColor.style.backgroundColor = hexCode
}

copyBtn.addEventListener('click', ()=> {
    output.select();
    document.execCommand('copy')
    customAlert.style.transform = 'translateX(0)';

    setTimeout(() => {
        customAlert.style.transform = 'translateX (calc(100% + 10px))'
    }, 200);
})

window.onload = genHexCode

genBtn.addEventListener('click', genHexCode)
