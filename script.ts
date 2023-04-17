// dz

//  1

function n1 (){
  let win=parseInt(prompt('я могу посчитать степень 2х') as string)
  if (win || win == 0){
    win=win**2
    alert('ответ '+win)
  }
  else
  alert('ну ок')
}
// n1()

//  2

function n2 (){
  let win=parseInt(prompt('число 1') as string)
  let sum=win
  win=parseInt(prompt('число 2') as string)
  sum=(sum+win)/2
  alert(sum)
}
// n2()

//  5

function n3 (){
  let num= +(prompt('число 1') as string)
  let num22= +(prompt('число 2') as string)
  alert('ответ сумм ' + (num + num22) + '\n ответ минус ' + (num - num22) + '\n ответ деление ' + (num / num22) + '\n ответ умножение ' + (num * num22) + `\n введеные числа ${num} ${num22}`)
}
// n3()



// urok основы str139

//  1

function n4 (){
  let n= +(prompt('число') as string)
  if (n%2!=0) n--
  for (let cycle=0 , num=2;cycle!=n/2;cycle++ , num+=2)
  console.log(num)
}
// n4()

//  3

function n5 (){
let n= +(prompt('число') as string)
for (let num=1;num!=10;num++){
  if (n%num==0) console.log(num)
}
}
// n5()

// urok function str159

// 2

function n6 (){
  function fun (num) {
    alert(`erer ${num} ererer`)
  }
  fun(prompt(`message`))
}
// n6()

// 3

///////////////////////////////////////////////////
// function fun (){

// }
// Log.innerHTML += "<br>inc x = "
////////////////////////////////////////////////

// 5

function n7(){
  function fun (x){
    if (x>=1){
      return 1
    }
    if (x==0){
      return 0
    }
    return -1
  }
  alert (
    fun(prompt(`message`))
    )
  }
// n7()

// urok all str193

// 1


function n8(){
function call(){
  let num = 0
  let sum = ""
  for (let el of arguments){
    sum += arguments[num]
    sum += " "
    num++
  }
  console.log(sum)
}
call(3,7,14,`err`,5)
}
// n8()

// 2

function n9() {
function call() {
  let num = +(prompt(`exit==0`) as string)
  let min = num
  let max = num
  while (num != 0) {
    min = num < min ? num : min
    max = num > max ? num : max
    num = +(prompt(`exit==0`) as string)
  }
  return alert(`min = ${min}
max = ${max}`)
}
call()
}
// n9()

// 3

function n10(){
function numbers(){
  let numbers = 0
  for (let el of arguments) {
    if (typeof(el)=='number') {
      numbers++
    }
  }
  return numbers
}
console.log('numbers(5,5,5,3)',numbers(5,5,5,3))
console.log('numbers(5,a,5,d)',numbers(5,'a',5,'d'))
console.log('numbers(q,w,0,true)',numbers('q','w',0,true))
}
// n10()

// 4

function n11 (){
function mean (){
  let i = 0
  let num = 0
  for (let el of arguments){
    num+=arguments[i]
    i++
  }
  return num/=i
}

console.log(mean(6,6,6,5));
}
// n11()

// 5

function n12 (){
  let memory = 1
  function doubling(input) {
      if (input % 2 == 0) {
          memory++
          input/=2
          if (input == 2){
              alert(`${input} ^ ${memory}`)
              return 0
            }
            else doubling(input)
          }
          else {
              alert (`ошибка`)
              return 'ошобка'
            }
          }
          console.log (doubling(prompt(`2^x`)))
}
// n12()
          
// 6
          
function n13 (){
function doubleArray (){
  const str=[]
  for (let i=0; i!= arguments.length;i++){

    str.unshift(` ${arguments[i]}`)
  }
  return str
}
console.log(doubleArray ('eegg',100,'upu',477,777));
}
// n13()