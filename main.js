// let planes = "1) Planes de Entrenamiento / 2) Planes Alimenticios";

// let duracion = "1) Adquirir el plan por 2 semanas / 2) Adquirir el plan por 1 mes /3) Adquirir el plan por 2 meses";

// OBJETO
const opciones = [
class Persona{
    constructor(nombre, plan, duracion, precio){
        this.nombre = nombre;
        this.plan = plan;
        this.duracion = duracion;
        this.precio = precio;
    }
    valor(){
        console.log(this.precio);
    }
}
];


// const persona1 = new Persona("Carla", 1, 3, 5500);
// const persona2 = new Persona("Ezequiel", 2, 2, 4500);
// console.log(persona1);
// console.log(persona2);
// persona1.valor();


// // ARRAY

// // const nombres = ["Carla", "Ezequiel", "Luciana", "Sandra", "Daniel"];

// // console.log(nombres[0]);
// // console.log(nombres[1]);
// // console.log(nombres[2]);
// // console.log(nombres[3]);
// // console.log(nombres[4]);


// // for(let index = 0; index < nombres.length; index ++){
// //     console.log(nombres[index]);
// // }

// // nombres.push("Lola");
// // console.log(nombres);

// // console.log(nombres.indexOf("Luciana"));

// // console.log(nombres.includes("Lucas"));

// // AGREGO UN OBJETO AL ARREGLO

// opciones.push({nombre: "Camila", plan: 2, duracion: 1, precio: 2000});
// console.log(opciones);

let nombre = prompt("Ingrese su nombre");
let planes = prompt("Ingrese una de nuestras opciones: Planes de entrenamiento o Planes Alimenticios");
let duracion = prompt("Ingrese la duración: 2 semanas, 1 mes, 2 meses");
let precio = prompt("Ingrese el valor: 2 semanas: 2000 / 1 mes: 3500 / 2 meses: 5500");

let Persona = {
    nombre: Persona.length + 1,
    plan,
    duracion,
    precio,
};

opciones.push(Persona);
console.log(opciones);

// let respuesta = prompt(`Hola ${this.nombre}, has elegido la opción: ${this.plan} con una duración de ${this.duracion} por el valor de $ ${this.precio}`);
// let nombre = prompt("Ingrese su nombre");
// let eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));


// while(eleccion != "ESC"){

//         if(eleccion === 1){
            
//             let respuesta = parseInt(prompt("Ha seleccionado la opción 'Planes de Entrenamiento'. Elija la duración:" + duracion));
        
//             switch(respuesta){
//                 case 1:
//                     alert("Adquirir el plan por 2 semanas. Precio: $2000");
//                     break;
    
//                 case 2:
//                     alert("Adquirir el plan por 1 mes. Precio: $3500");
//                     break;
    
//                 case 3:
//                     alert("Adquirir el plan por 2 meses. Precio: $5500");
//                     break
    
//                 default:
//                     alert("Lo sentimos, la opción ingresada es incorrecta");
//                     break;
    
//             }
//         let pregunta = prompt("¿Desea agregar la opción planes alimenticios? Responda 'si' o 'no'");

//             if(pregunta === "si"){
            
//                 let respuesta = parseInt(prompt("Ha agregado la opción 'Planes Alimenticios'. Elija la duración:" + duracion));

//                 switch(respuesta){
//                     case 1:
//                         alert("Adquirir el plan por 2 semanas. Precio: $2000");
//                         break;
//                     case 2:
//                         alert("Adquirir el plan por 1 mes. Precio: $3500");
//                         break;
//                     case 3:
//                         alert("Adquirir el plan por 2 meses. Precio: $5500");
//                         break;
                
//                     default:
//                         alert("Lo sentimos, la opción ingresada es incorrecta");
//                         break;
                    
//                 }
                   
//             }
            
//             if(pregunta === "no"){
//                 alert("Muchas gracias."); 
//             }
//             eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));
    
//         }else if(eleccion === 2){
    
//             let respuesta = parseInt(prompt("Ha seleccionado la opción 'Planes Alimenticios'. Elija la duración:" + duracion));
    
//             switch(respuesta){
//                 case 1:
//                     alert("Adquirir el plan por 2 semanas. Precio: $2000");
//                     break;
//                 case 2:
//                     alert("Adquirir el plan por 1 mes. Precio: $3500");
//                     break;
//                 case 3:
//                     alert("Adquirir el plan por 2 meses. Precio: $5500");
//                     break;
            
//                 default:
//                     alert("Lo sentimos, la opción ingresada es incorrecta");
//                     break;
                
//             }
          
//         let pregunta = prompt("¿Desea agregar la opción planes de entrenamiento? Responda 'si' o 'no'");

//             if(pregunta === "si"){

//                 let respuesta = parseInt(prompt("Ha agregado la opción 'Planes de Entrenamiento'. Elija la duración:" + duracion));

//                 switch(respuesta){
//                     case 1:
//                         alert("Adquirir el plan por 2 semanas. Precio: $2000");
//                         break;
//                     case 2:
//                         alert("Adquirir el plan por 1 mes. Precio: $3500");
//                         break;
//                     case 3:
//                         alert("Adquirir el plan por 2 meses. Precio: $5500");
//                         break;
                
//                     default:
//                         alert("Lo sentimos, la opción ingresada es incorrecta");
//                         break;
                    
//                 }

    
//             }
            
//             if(pregunta === "no"){
//                 alert("Muchas gracias."); 
//             }
       
        
//         eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));
    
    
//         eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));
            
//     }
    
//     }
    

