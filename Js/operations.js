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

const operationButtonType = (type, value) => {
  if (type === 'number') {
    switch (isNextNumber) {
      case true:
    }
    operationNumberCache.push(value)
  }
  else if (type === 'operator') {
    operationOperatorCache.push(value)
  }
  else if (type === 'checkResult') {
    let result = null
    for (let i = operationNumberCache.length; i > 0; i = operationNumberCache.length) {
      result = operation(operationNumberCache[0], operationNumberCache[1], value)
      operationNumberCache.unshift(result)
    }
    result = operationNumberCache[0]
    return result
  }
}