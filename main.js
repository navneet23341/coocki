const fortuneCookie = document.querySelector("#cookie1")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("button")

const fortunePhrases = [
  'A felicidade é encontrada dentro de si mesmo.',

  'Você é a única pessoa que pode limitar seu próprio potencial.',

  'Seja a mudança que você deseja ver no mundo.',

  'A vida é uma aventura, então aproveite a jornada.',

  'Acredite em si mesmo e em suas habilidades.',

  'Não tenha medo de experimentar coisas novas.',

  'A vida pode ser imprevisível, mas é importante seguir em frente com confiança.',

  'Lembre-se de que você é capaz de fazer grandes coisas.',

  'O fracasso é um ponto de partida, não um ponto final.',

  'Lembre-se de que você é único e especial.',

  'Às vezes, é preciso se afastar do caos do mundo para encontrar a paz interior.',

  'A vida é uma maratona, não uma corrida de velocidade.',

  'Às vezes, a chave para a felicidade está em encontrar a beleza nas coisas simples.',

  'Acredite em si mesmo e na sua capacidade de superar desafios.'
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
