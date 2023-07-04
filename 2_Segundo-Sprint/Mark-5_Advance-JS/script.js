// #CardNumber numero en la tarjeta
// #titular titular de la tarjeta
// #expiration fecha de expiración
// #CVCcode codigo de la tarjeta

const inputs = document.querySelectorAll ("input");
console.log(inputs);

let titular = document.getElementById('titular');
let Name = document.getElementById('Name');


let cardNumer = document.getElementById('cardNumber');
let expiration = document.getElementById('expiration');
let CVCcode = document.getElementById('CVCcode');
// FORMA 1 
// =>   escondida por desuso. Funciona, pero no es una buena practica y no termina de ser funcional.
//      De igual forma se utiliza su contenido para reconstruir la formula.

 
// Genero una funcion For para que lo que se escriba en los distintos 
// inputs complete la imagen de la tarjeta
for (let i = 0; i < inputs.length; i++) {
     const element = inputs[i];
         element.oninput = function (){ 
             console.log("Se ingresaron "+this.value.length +" caracteres");
             console.log(this.id)

             if (this.id == "Name"){
                 titular.innerText =this.value ;
             }else 
             if (this.id == "CardNum") {
                 const grupos = numgrupos(this.value); 
                 cardNumer.innerText = grupos;
                 function numgrupos (num){
                     const grupo = [];
                     for (let i = 0; i < num.length; i+=4) {
                         grupo.push(num.slice(i, i+4));
                     }
                    const gruponum= grupo.join (' ');
                     return gruponum;
                 }  
                 // cardNumer.innerText =this.value ;
             }else 
                 if (this.id == "CardMonth") { 
                     const index = expiration.innerText.indexOf("/")
                     if (index == -1){
                         expiration.innerText = this.value + "/";
                     }else{
                         let Year = expiration.innerText.substring(index);
                         expiration.innerText = this.value + Year;
                     }
                 }else
                 if (this.id == "CardYear") {
                     const index = expiration.innerText.indexOf("/")
                     let Month = expiration.innerText.substring(0, index+1)
                     expiration.innerText = Month + this.value;                
                 }else
             if (this.id == "CardCVC") {
                 CVCcode.innerText =this.value ;
             }
            
         };
 };
   



// FORMA 2 considerada.
// usar una funcion por cada input. 
//Para ello vamos a agregar una etiqueta extra en cada input por función

// function fillName(){
//     titular.innerText = Name.value ;
// }
// function errName(){
//     for (let i = 0; i < Name.value.length; i++) {
//         const Vari = Name.value[i];
        
//     }
//     if (Name.value == 0)
//     {
//         console.log("error numerico")
// }
// }





// if (this.id == "CardNum") {
//     const grupos = numgrupos(this.value); 
//     cardNumer.innerText = grupos;

//     function numgrupos (num){
//         const grupo = [];
//         for (let i = 0; i < num.length; i+=4) {
//             grupo.push(num.slice(i, i+4));
//         }
//         const gruponum= grupo.join (' ');
//         return gruponum;
//     }     
// };
//     //cardNumer.innerText =this.value ;


//     if (this.id == "CardMonth") { 
//     const index = expiration.innerText.indexOf("/")
//         if (index == -1){
//             expiration.innerText = this.value + "/";
//         }else{
//             let Year = expiration.innerText.substring(index);
//                 expiration.innerText = this.value + Year;
//         }
//     }
//     if (this.id == "CardYear") {
//         const index = expiration.innerText.indexOf("/")
//             let Month = expiration.innerText.substring(0, index+1)
//             expiration.innerText = Month + this.value;                
//         }


// if (this.id == "CardCVC") {
//     CVCcode.innerText =this.value;
// }

