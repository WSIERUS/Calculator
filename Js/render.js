const calculator = document.querySelector('#calculator-buttons')

buttons.map(button => {
  const element = document.createElement('button')
  element.textContent = button.name
  element.className = button.class
  element.addEventListener('click', () => operationButtonType(button.type, button.value, button.name))
  calculator.appendChild(element)
})

const renderDisplay = () => {
  document.querySelector('#calculator-display').textContent = displayString
}

renderDisplay()

// Brak ekranu startowego