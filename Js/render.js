const calculator = document.querySelector('#calculator-buttons')

const controlPanel = document.querySelector('#control-panel')
const controlPanelButtonsSection = document.querySelector('#control-panel-buttons-section')

buttons.map(button => { // Mapowanie przycisków dla check listy
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
    controlPanelButtonsSection.appendChild(label)
  }
})

const handleControlPanelButton = (button, input) => { // Obsługa wyłącznie lub włączenia przycisku dla każdego elementu check listy
  button.visible = !button.visible
  input.checked = button.visible
}

const acceptButton = document.createElement('button') // Przycisk akceptacji wyboru checklisty
acceptButton.addEventListener('click', () => isControlPanelVisible())
acceptButton.textContent = 'Zaakceptuj'
acceptButton.className = 'control-panel-accept-button'
controlPanel.appendChild(acceptButton)

const isControlPanelVisible = () => { // Obsługa zaakaceptowanie wyboru checklisty oraz mapowanie calculatora
  controlPanel.className = 'hidden'
  buttons.map(button => {
    const element = document.createElement('button')
    element.textContent = button.name
    element.className = button.visible ? button.class : `${button.class}` + ' unvisible'
    if (button.visible) element.addEventListener('click', () => operationButtonType(button.type, button.value, button.display))
    calculator.appendChild(element)
  })
}

const renderDisplay = () => { // Renderowanie wyniku na wyświetlaczu
  document.querySelector('#calculator-display').textContent = displayString
}

renderDisplay()