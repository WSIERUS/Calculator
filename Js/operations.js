add = (a, b) => a + b

minus = (a, b) => a - b

multiple = (a, b) => a * b

division = (a, b) => a / b

exponentiation = (a, b) => {
  let result = a
  for (let i = 1; i < b; i++) {
    result = result * a
  }
  return result
}

strong = (a) => {
  let result = 1
  for (let i = 1; i <= a; i++) {
    result = result * i
  }
  return result
}

const defaultOperation = (a, b, c) => c(a, b)

const operationButtonType = (type, value, name) => {
  if (type === 'number') {
    actuallyNumber = actuallyNumber + value.toString()
    displayString += name
  } 
  else if (type === 'operator' && (actuallyNumber.length || operationNumberCache.length > 0)) {
    if(actuallyNumber) operationNumberCache.push(parseInt(actuallyNumber))
    actuallyNumber = ''
    if(operationNumberCache.length > operationOperatorCache.length) {
      displayString += name
      operationOperatorCache.push(value)
    }
    else if (operationNumberCache.length <= operationOperatorCache.length) {
      operationOperatorCache[(operationOperatorCache.length-1)] = value
      displayString = displayString.slice(0, displayString.length-1) + name
    }
  }
  else if (type === 'checkResult') {
    checkResult()
  }
  renderDisplay()
}

const removeButton = () => {
  console.log('dziala') // Dopracować
}

const checkResult = () => {
  let result
  operationNumberCache.push(parseInt(actuallyNumber))
  actuallyNumber = ''
  for (let i = operationOperatorCache.length; i >= 1; i = operationOperatorCache.length) {
    result = defaultOperation(operationNumberCache[0], operationNumberCache[1], operationOperatorCache[0])
    operationNumberCache.shift()
    operationNumberCache.shift()
    operationNumberCache.unshift(result)
    operationOperatorCache.shift()
  }
  operationNumberCache = []
  actuallyNumber = result.toString()
  displayString = result.toString()
  isNextMustBeNumber = true
}

// Brak komunikatu dotyczącego liczb naturalnych zwykła walidacja
// Brak funkcji czyszczenia pola kiedy actuallyNumber ma coś to wtedy czysci operator i wrzuca ostatnią liczbę z tablicy do actuallyNumber