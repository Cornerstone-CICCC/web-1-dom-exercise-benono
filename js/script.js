// YOUR CODE HERE
const btn1 = document.querySelector("#btn1")

btn1.addEventListener("click", () => {
  const outputParagraph = document.querySelector("#output1 p")
  console.log(outputParagraph)
  outputParagraph.style.color = "red"
})

const btn2 = document.getElementById("btn2")

btn2.addEventListener("click", () => {
  const output2 = document.querySelector("#output2")
  const HelloworldP = document.createElement("p")
  HelloworldP.textContent = "Helllo World"
  output2.append(HelloworldP)
})

const btn3 = document.querySelector("#btn3")

btn3.addEventListener("click", () => {
  const output3 = document.querySelector("#output3")
  output3.firstElementChild.classList.remove("small-text")
})

const btn4 = document.querySelector("#btn4")

btn4.addEventListener("click", () => {
  const output4 = document.querySelector("#output4")
  output4.childNodes.forEach((el) => {
    if (el instanceof HTMLParagraphElement) {
      el.style.color = "red"
    }
  })
})

const btn5 = document.querySelector("#btn5")

btn5.addEventListener("click", () => {
  const input = document.querySelector("#output5 input")
  console.log(input.value)
})
