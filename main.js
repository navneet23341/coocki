const fortuneCookie = document.querySelector("#cookie1")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("button")

const fortunePhrases = [
  'I admire youu so muchhh🩵',

  'youre really doing great',

  'tomorrow will be happiest day ever',

  'youre so cuteee🥺sachii',

  'skrr ko churaa lunga kal',

  'dance krke dikhaa',

  'never give up',

  'would you like to grab some coffee with me🐺fill krdo https://forms.gle/mamWPif6Uq8tKRuM7',

  'If you were a vegetable, you’d be a cute-cumber.',

  'I must be a snowflake because I’ve fallen for you',

  'allu ka murder',
]

let item = 0

fortuneCookie.addEventListener('click', openCookie)
btnReset.addEventListener('click', cookieReset)
document.addEventListener('keypress', handleEnter)

function openCookie() {
  screenToggle()
  document.querySelector(".fortune p").innerText = fortunePhrases[item]
}

function cookieReset(e) {
  screenToggle()
  item = Math.round(Math.random() * (fortunePhrases.length - 1))
}

function screenToggle() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleEnter(event) {
 if(event.key == 'Enter' && screen2.classList.contains("hide")) {
  openCookie()
 } else if(event.key == 'Enter' && screen1.classList.contains("hide")) {
  cookieReset()
} 
}
