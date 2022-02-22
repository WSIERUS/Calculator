add = (a, b) => a + b

minus = (a, b) => a - b

multiple = (a, b) => a * b

division = (a, b) => a / b

exponentiation = (a, b) => {
  if(a == a.toFixed(0) && b == b.toFixed(0)){
    let result = a
    for (let i = 1; i < b; i++) {
      result = result * a
    }
    return result
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

const defaultOperation = (a, b, c) => c(a, b)

const operationButtonType = (type, value, name) => {
  if (type === 'number' && operationOperatorCache[operationOperatorCache.length-1] !== strong) {
    actuallyNumber = actuallyNumber + value.toString()
    displayString += name
  } 
  else if (type === 'operator' && (actuallyNumber.length || operationNumberCache.length > 0)) {
    if(actuallyNumber) operationNumberCache.push(parseFloat(actuallyNumber))
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
  else if (type === 'delete') {
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
  else if (type === 'delete-all') {
    operationNumberCache = []
    operationOperatorCache = []
    displayString = ''
    actuallyNumber = ''
  }
  renderDisplay()
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