const calculator = document.querySelector('#calculator-buttons')

const controlPanel = document.querySelector('#control-panel')

buttons.map(button => {
  if(button.visible){
    const input = document.createElement('input')
    input.addEventListener('click', () => handleControlPanelButton(button, input))
    input.setAttribute('type', 'checkbox')
    input.checked = button.visible
    const span = document.createElement('span')
    span.textContent = `Aktywuj ${button.name}`
    const label = document.createElement('label')
    label.className = 'check-list-label'
    label.appendChild(input)
    label.appendChild(span)
    controlPanel.appendChild(label)
  }
})

const handleControlPanelButton = (button, input) => {
  button.visible = !button.visible
  input.checked = button.visible
}

const acceptButton = document.createElement('button')
acceptButton.addEventListener('click', () => isControlPanelVisible())
acceptButton.textContent = 'Zaakceptuj'
controlPanel.appendChild(acceptButton)

const isControlPanelVisible = () => {
  controlPanel.className = 'hidden'
  buttons.map(button => {
    const element = document.createElement('button')
    element.textContent = button.name
    element.className = button.visible ? button.class : `${button.class}` + ' unvisible'
    if (button.visible) element.addEventListener('click', () => operationButtonType(button.type, button.value, button.name))
    calculator.appendChild(element)
  })
}

const renderDisplay = () => {
  document.querySelector('#calculator-display').textContent = displayString
}

renderDisplay()

// Brak ekranu startowego
// Sterowanie widocznością przycisków