const buttons = [
  {name:'+', type:'operator', class:'normal-button', value:add, visible:true},
  {name:'-', type:'operator', class:'normal-button', value:minus, visible:true},
  {name:'*', type:'operator', class:'normal-button', value:multiple, visible:true},
  {name:'/', type:'operator', class:'normal-button', value:division, visible:true},
  {name:'e', type:'operator', class:'normal-button', value:exponentiation, visible:true},
  {name:'!', type:'operator', class:'normal-button', value:strong, visible:true},
  {name:'1', type:'number', class:'normal-button', value:1, visible:true},
  {name:'2', type:'number', class:'normal-button', value:2, visible:true},
  {name:'3', type:'number', class:'normal-button', value:3, visible:true},
  {name:'4', type:'number', class:'normal-button', value:4, visible:true},
  {name:'5', type:'number', class:'normal-button', value:5, visible:true},
  {name:'6', type:'number', class:'normal-button', value:6, visible:true},
  {name:'7', type:'number', class:'normal-button', value:7, visible:true},
  {name:'8', type:'number', class:'normal-button', value:8, visible:true},
  {name:'9', type:'number', class:'normal-button', value:9, visible:true},
  {name:'0', type:'number', class:'double-button', value:0, visible:true},
  {name:'.', type:'number', class:'normal-button', value:'.', visible:true},
  {name:'CE', type:'delete-all', class:'double-button', value:0, visible:true},
  {name:'C', type:'delete', class:'normal-button', value:0, visible:true},
  {name:'=', type:'checkResult', class:'triple-button', value:'checkResult', visible:true},
]

let displayString = ''

let actuallyNumber = ''

let operationNumberCache = []

let operationOperatorCache = []
