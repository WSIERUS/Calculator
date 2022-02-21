const buttons = [
  {name:'+', type:'operator', class:'normal-button', value:add},
  {name:'-', type:'operator', class:'normal-button', value:minus},
  {name:'*', type:'operator', class:'normal-button', value:multiple},
  {name:'/', type:'operator', class:'normal-button', value:division},
  {name:'expo', type:'operator', class:'normal-button', value:exponentiation},
  {name:'!', type:'operator', class:'normal-button', value:strong},
  {name:'1', type:'number', class:'normal-button', value:1},
  {name:'2', type:'number', class:'normal-button', value:2},
  {name:'3', type:'number', class:'normal-button', value:3},
  {name:'4', type:'number', class:'normal-button', value:4},
  {name:'5', type:'number', class:'normal-button', value:5},
  {name:'6', type:'number', class:'normal-button', value:6},
  {name:'7', type:'number', class:'normal-button', value:7},
  {name:'8', type:'number', class:'normal-button', value:8},
  {name:'9', type:'number', class:'normal-button', value:9},
  {name:'0', type:'number', class:'normal-button', value:0},
  {name:'=', type:'checkResult', class:'double-button', value:'checkResult'},
]

let isNextMustBeNumber = true

let displayString = ''

let actuallyNumber = ''

let operationNumberCache = []

let operationOperatorCache = []