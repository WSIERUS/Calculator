const buttons = [ // Pseudo baza danych
  {name:'+',display:'+', type:'operator', class:'normal-button', value:add, visible:true},
  {name:'-',display:'-', type:'operator', class:'normal-button', value:minus, visible:true},
  {name:'*',display:'*', type:'operator', class:'normal-button', value:multiple, visible:true},
  {name:'/',display:'/', type:'operator', class:'normal-button', value:division, visible:true},
  {name:'expo',display:'e', type:'operator', class:'normal-button', value:exponentiation, visible:true},
  {name:'!',display:'!', type:'operator', class:'normal-button', value:strong, visible:true},
  {name:'1',display:'1', type:'number', class:'normal-button', value:1, visible:true},
  {name:'2',display:'2', type:'number', class:'normal-button', value:2, visible:true},
  {name:'3',display:'3', type:'number', class:'normal-button', value:3, visible:true},
  {name:'4',display:'4', type:'number', class:'normal-button', value:4, visible:true},
  {name:'5',display:'5', type:'number', class:'normal-button', value:5, visible:true},
  {name:'6',display:'6', type:'number', class:'normal-button', value:6, visible:true},
  {name:'7',display:'7', type:'number', class:'normal-button', value:7, visible:true},
  {name:'8',display:'8', type:'number', class:'normal-button', value:8, visible:true},
  {name:'9',display:'9', type:'number', class:'normal-button', value:9, visible:true},
  {name:'0',display:'0', type:'number', class:'double-button', value:0, visible:true},
  {name:'.',display:'.', type:'number', class:'normal-button', value:'.', visible:true},
  {name:'CE', type:'delete-all', class:'double-button', value:0, visible:true},
  {name:'C', type:'delete', class:'normal-button', value:0, visible:true},
  {name:'=', type:'checkResult', class:'triple-button', value:'checkResult', visible:true},
]

let displayString = '' // state wyświetlanego działania

let actuallyNumber = '' // Aktualna liczba w operacji

let operationNumberCache = [] // Liczby gotowe do działania

let operationOperatorCache = [] // Operatory gotowe do działania
