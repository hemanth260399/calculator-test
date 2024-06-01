let value1=""
let currenttemp=""
oper=""
let resultvalue=0
let resultarea=document.getElementById("resultarea")

function number(num){
    resultarea.value=resultarea.value+=num
    value1+=num
}

function equalto(){
    value1=Number(value1)
    currenttemp=Number(currenttemp)
    console.log(value1)
    console.log(currenttemp)
     if(oper=="+"){
        oper=""
        addition(currenttemp,value1)
    }
    else if(oper=="-"){
        subtratcion(currenttemp,value1)
    }
    else if(oper=="*"){
        muliplication(currenttemp,value1)
    }
    else{
        division(currenttemp,value1)
    }
}
function backspace(){
    result=resultarea.value.slice(0,-1)
    resultarea.value=result
}
function clearall(){
    resultarea.value=""
    value1=""
    currenttemp=""
    oper=""
}
function operator(operand){
    oper=operand
    resultarea.value=resultarea.value+=oper
    currenttemp=value1
    value1=""
}
function addition(value1,value2){
    resultvalue=value1+value2
    resultarea.value=resultvalue
    oper=""
    value1=resultvalue
}
function subtratcion(value1,value2){
    resultvalue=value1-value2
    resultarea.value=resultvalue
}
function muliplication(value1,value2){
    resultvalue=value1*value2
    resultarea.value=resultvalue
}
function division(value1,value2){
    resultvalue=value1/value2
    resultarea.value=resultvalue
}