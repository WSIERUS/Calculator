// Wszystkie typy działań

add = (a, b) => a + b

minus = (a, b) => a - b

multiple = (a, b) => a * b

division = (a, b) => a / b

exponentiation = (a, b) => { // a to liczba potęgowana, b to wielkość potęgi
  if(a == a.toFixed(0) && b == b.toFixed(0) && a >= 0 && b >= 0){
    let result = a
    if(b === 0) { // jeśli potęga to 0 wtedy zwraca po działaniu 1
      result = 1
      return result
    }
    else {
      for (let i = 1; i < b; i++) {
        result = result * a
      }
      return result
    }
  }
  else {
    alert('możesz wykonać potęgowanie tylko dla liczb naturalnych')
    return null
  }
}

strong = (a) => {
  if(a == a.toFixed(0)){
    let result = 1
    for (let i = 1; i <= a; i++) {
      result = result * i
    }
    return result
  }
  else {
    alert('możesz wykonać silnie tylko dla liczb naturalnych')
    return null
  }
}

const defaultOperation = (a, b, c) => c(a, b) // Działanie uniwersalne

const operationButtonType = (type, value, display) => { // Bramka logiczna przez którą przepuszczamy tablice liczb i operatorów. Wykrywa typ przycisku i dokonuje odpowiedniej operacji
  if (type === 'number' && operationOperatorCache[operationOperatorCache.length-1] !== strong) { // Po znaku silni nie możesz dodać liczby
    if(operationOperatorCache[operationOperatorCache.length-1] === division && value === 0 && actuallyNumber === '') return alert('nie dziel przez zero!') // Nie dziel przez zero ;)
    else{
      actuallyNumber = actuallyNumber + value.toString()
      displayString += display
    }
  } 
  else if (type === 'operator' && (actuallyNumber.length || operationNumberCache.length > 0)) { // Dodaj operator
    if(actuallyNumber) operationNumberCache.push(parseFloat(actuallyNumber))
    actuallyNumber = ''
    if(operationNumberCache.length > operationOperatorCache.length) {
      displayString += display
      operationOperatorCache.push(value)
    }
    else if (operationNumberCache.length <= operationOperatorCache.length) {
      operationOperatorCache[(operationOperatorCache.length-1)] = value
      displayString = displayString.slice(0, displayString.length-1) + display
    }
  }
  else if (type === 'checkResult') { // Sprawdź rezultat
    checkResult()
  }
  else if (type === 'delete') { // Usuń
    if(actuallyNumber === '') {
      operationOperatorCache.pop()
      actuallyNumber = operationNumberCache.pop().toString()
    }
    else {
      actuallyNumber = actuallyNumber.slice(0, actuallyNumber.length-1)
    }
    displayString = displayString.slice(0,displayString.length-1)
    console.log(operationNumberCache, operationOperatorCache, actuallyNumber)
  }
  else if (type === 'delete-all') { // Usuń wszystko
    operationNumberCache = []
    operationOperatorCache = []
    displayString = ''
    actuallyNumber = ''
  }
  renderDisplay()
}

const checkResult = () => { // Weryfikacja rezultatu kiedy wciśniemy "="
  let result
  operationNumberCache.push(parseFloat(actuallyNumber))
  actuallyNumber = ''

  for (let i = operationOperatorCache.length; i >= 1; i = operationOperatorCache.length) { // Pętla wykonywania obliczeń dla złożonych działań
    result = defaultOperation(operationNumberCache[0], operationNumberCache[1], operationOperatorCache[0])
    result = result.toFixed(2) // Naprawa działania
    operationNumberCache.shift()
    operationNumberCache[0] = result
    operationOperatorCache.shift()
  }

  operationNumberCache = [] // Formatowanie/Przygotowanie pamięci cache dla kolejnych działań
  actuallyNumber = result.toString()
  displayString = result.toString()
  isNextMustBeNumber = true
}