add = (a,b) => a + b

minus = (a,b) => a - b

multiple = (a,b) => a * b

division = (a,b) => a / b

exponentiation = (a,b) => {
  let result = a
  for(let i = 1; i < b;  i++){
    result = result*a
  }
  return result
}

strong = (a) => {
  let result = 1
  for(let i = 1; i <= a; i++) {
    result = result * i
  }
  return result
}

const operation = (a,b,c) => c(a,b) 