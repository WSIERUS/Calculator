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
    isNextMustBeNumber = false
    renderDisplay()
  } 
  else if (type === 'operator' && isNextMustBeNumber === false) {
    operationNumberCache.push(parseInt(actuallyNumber))
    displayString += name
    actuallyNumber = ''
    isNextMustBeNumber = true
    operationOperatorCache.push(value)
    renderDisplay()
  }
  else if (type === 'operator' && isNextMustBeNumber === true) {
    if(operationOperatorCache === 0 )operationOperatorCache[operationOperatorCache.length] = value
    else operationOperatorCache[operationOperatorCache.length-1] = value
    displayString += name
    renderDisplay()
  }
  else if (type === 'checkResult') {
    checkResult()
    renderDisplay()
  }
}

const checkResult = () => {
  let result
  operationNumberCache.push(parseInt(actuallyNumber))
  actuallyNumber = ''
  for (let i = operationOperatorCache.length; i >= 1; i--) {
    result = defaultOperation(operationNumberCache[0], operationNumberCache[1], operationOperatorCache[0])
    console.log(result)
    operationNumberCache.shift()
    operationNumberCache.shift()
    operationOperatorCache.shift()
  }
  operationNumberCache[0] = result  
  isNextMustBeNumber = true
  
  displayString = result
  
  i = operationOperatorCache.length
  return result
}