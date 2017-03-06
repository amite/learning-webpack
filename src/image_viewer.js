require('./assets/css/styles.css')

const email = require('./assets/images/email.svg')
const dog = require('./assets/images/doggo.jpg')
const earphones = require('./assets/images/earphones.jpg')

const emailImg = document.createElement('img')
emailImg.src = email

const smallImg = document.createElement('img')
smallImg.src = earphones

const bigImg = document.createElement('img')
bigImg.src = dog


document.body.appendChild(emailImg)
document.body.appendChild(smallImg)
document.body.appendChild(bigImg)