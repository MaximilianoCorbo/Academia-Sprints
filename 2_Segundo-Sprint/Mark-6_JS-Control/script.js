const InputName = document.getElementById('InputName');
const cardTitular = document.getElementById('cardTitular');

const InputNum = document.getElementById('InputNum');
const cardNumber = document.getElementById('cardNumber');

const InputMonth = document.getElementById('InputMonth');
const InputYear = document.getElementById('InputYear');
const cardExpiration = document.getElementById('cardExpiration');

const InputCvc = document.getElementById('InputCvc');
const cardCvc = document.getElementById('cardCvc');

const thanks = document.getElementById('thanks')
const form = document.getElementById('form')
const sendBut = document.getElementById('sendBut')
// FORMA 2 considerada.
// usar una funcion por cada input. 
//Para ello vamos a agregar una etiqueta extra en cada input por función


function fillName(){
     cardTitular.innerText = InputName.value ;
}
function errName(){
    const errorMsgName = document.getElementById('errorName')
    errorMsgName.innerHTML = ''
    var flag = false;

    if(InputName.value.trim()==""){
        // alert('blank password')
        InputName.style.border="dotted red"
        InputName.style.outline="none"
        errorMsgName.innerHTML ='Ingrese nombre del titular'
        flag = false;
    }else if( InputName.value.length < 3){
         errorMsgName.innerHTML ='Nombre demasiado corto'
         InputName.style.border="dotted red"
         flag = false;
    }
    else if(InputName.value.length >= 3){
         errorMsgName.innerHTML = ''
         InputName.style.border=""
         flag = true;
    }
    return flag;
}

function fillNum(){
    const grupos = numgrupos(InputNum.value); 
    cardNumber.innerText = grupos;

    function numgrupos (num){
        const grupo = [];
        for (let i = 0; i < num.length; i+=4) {
            grupo.push(num.slice(i, i+4));
                }       
        
        const gruponum= grupo.join (' ');
       return gruponum;
    }     
};
function errNum(){
    const errorMsgNum = document.getElementById('errorNum')
    errorMsgNum.innerHTML = ''
    var flag = false;

    if(InputNum.value.trim()==""){
        InputNum.style.border="dotted red"
        InputNum.style.outline="none"
        errorMsgNum.innerHTML ='Ingrese el numero de tarjeta'
        flag = false;
    }else if( InputNum.value.length < 16){
         errorMsgNum.innerHTML ='Faltan digitos de la tarjeta'
         InputNum.style.border="dotted red"
         flag = false;
    }
    else if(InputNum.value.length == 16){
         errorMsgNum.innerHTML = ''
         InputNum.style.border=""
         flag = true;
    }
    return flag;
}

function fillExpM(){ 
    const index = cardExpiration.innerText.indexOf("/")

    if (index == -1){
        cardExpiration.innerText = InputMonth.value + "/";
    }else{
        let Year = cardExpiration.innerText.substring(index);
        cardExpiration.innerText = InputMonth.value + Year;
    }
}
function fillExpY(){
    const index = cardExpiration.innerText.indexOf("/")
    let Month = cardExpiration.innerText.substring(0, index+1)
    cardExpiration.innerText = Month + InputYear.value;                
}
function errExpM(){
    const errorMsgNum = document.getElementById('errorExp')
    errorMsgNum.innerHTML = ' '
    var flag = false;

    if(InputMonth.value.trim()==""){
        InputMonth.style.border="dotted red"
        InputMonth.style.outline="none"
        errorMsgNum.innerHTML ='Ingrese el mes de vencimiento'
        flag = false;
    }
    else if(InputMonth.value.length >= 1){
         errorMsgNum.innerHTML = ''
         InputMonth.style.border=""
         flag = true;
    }
    return flag;
}
function errExpY(){
    const errorMsgNum = document.getElementById('errorExp')
    errorMsgNum.innerHTML = ' '
    var flag = false;

    if(InputYear.value.trim()==""){
        InputYear.style.border="dotted red"
        InputYear.style.outline="none"
        errorMsgNum.innerHTML ='Ingrese el año de vencimiento'
        flag = false;
    }
    else if(InputYear.value.length < 4){
         errorMsgNum.innerHTML ='El valor año lleva 4 dígitos'
         InputYear.style.border="dotted red"
         flag = false;
    }
    else if(InputYear.value.length >= 4){
         errorMsgNum.innerHTML =''
         InputYear.style.border=""
         flag = true;
    }
    return flag;
}

function fillCvc(){
   cardCvc.innerText = InputCvc.value;
}
function errCvc(){
    const errorMsgNum = document.getElementById('errorCvc')
    errorMsgNum.innerHTML = ' '
    flag = false;

    if(InputCvc.value.trim()==""){
        InputCvc.style.border="dotted red"
        InputCvc.style.outline="none"
        errorMsgNum.innerHTML ='Ingrese el código'
        flag = false;
    }
    else if(InputCvc.value.length < 3){
        errorMsgNum.innerHTML ='El código CVC lleva 3 dígitos'
        flag = false;
    }
    else if(InputCvc.value.length == 3){
        errorMsgNum.innerHTML =''
        InputCvc.style.border=""
        flag = true;
    }
    return flag;
}

function validation(){
    var flag = false;
    console.log("Nombre: " + errName(flag) );
    console.log("Numero de tarjeta: " + errNum(flag));
    console.log("Mes de expiración: " + errExpM(flag));
    console.log("Año de expiración: " + errExpY(flag));
    console.log("Código de tarjeta: " + errCvc(flag));

    if(errName(flag),errNum(flag),errExpM(flag),errExpY(flag),errCvc(flag) == true ){
        console.log("Se envia el formulario")
        thanks.style.display= 'flex'
        form.style.display= 'none'
        sendBut.innerHTML ='Continue'
    }else{
        console.log("Faltan rellenar campos")
    }
}