let planElegido = "1) Plan de entrenamiento, 2) Plan alimenticio";
let duracion1 = "1) 2 semanas";
let duracion2 = "2) 1 mes";
let duracion3 = "3) 2 meses";
let precio1 = "2.000";
let precio2 = "3.500";
let precio3 = "5.500";

// OBJETO
const opciones = [];
class Persona{
    constructor(nombre, plan, duracion, precio){
        this.nombre = nombre;
        this.plan = plan;
        this.duracion = duracion;
        this.precio = precio;  
    }
};


let nombre = prompt("Ingrese su nombre");

planElegido = parseInt(prompt(`Elija una de nuestras opciones: ${planElegido}`));

 while(planElegido != "ESC"){

         if(planElegido === 1){
            
             duracion = parseInt(prompt(`Ha seleccionado la opción 'Planes de Entrenamiento'. Elija la duración:${duracion1}, ${duracion2} o ${duracion3}`));
        
             switch(duracion){
                 case 1:
                     alert(`Ha seleccionado "${duracion1}". Precio: ${precio1}`);
                     break;
    
                 case 2:
                    alert(`Ha seleccionado "${duracion2}". Precio: ${precio2}`);
                     break;
    
                 case 3:
                    alert(`Ha seleccionado "${duracion3}". Precio: ${precio3}`);
                     break
    
                 default:
                     alert("Lo sentimos, la opción ingresada es incorrecta");
                     break;
    
             }
         let pregunta = prompt("¿Desea agregar la opción planes alimenticios? Responda 'si' o 'no'");

             if(pregunta === "si"){
            
                let respuesta = parseInt(prompt(`Ha agregado la opción "Planes alimenticios". Elija la duración: ${duracion1}, ${duracion2} o ${duracion3}`));

                 switch(respuesta){
                     case 1:
                         alert(`Ha seleccionado "${duracion1}". Precio: ${precio1}`);
                         break;
                     case 2:
                        alert(`Ha seleccionado "${duracion2}". Precio: ${precio2}`);
                         break;
                     case 3:
                        alert(`Ha seleccionado "${duracion3}". Precio: ${precio3}`);
                         break;
                
                     default:
                         alert("Lo sentimos, la opción ingresada es incorrecta");
                         break;
                    
                 }
                   
             }

             if(pregunta === "no"){
                 alert("Muchas gracias.");
                 break; 
             }

            const personaNueva = new Persona(nombrePedido, planPedido, duracionElegida, precioTotal);
            opciones.push(personaNueva);

             planElegido = parseInt(prompt(`Elija una de nuestras opciones: ${planElegido}`));
    
         }else if(planElegido === 2){
    
            duracion = parseInt(prompt(`Ha seleccionado la opción 'Planes Alimenticios'. Elija la duración:${duracion1}, ${duracion2} o ${duracion3}`));
    
             switch(duracion){
                 case 1:
                    alert(`Ha seleccionado "${duracion1}". Precio: ${precio1}`);
                     break;
                 case 2:
                    alert(`Ha seleccionado "${duracion2}". Precio: ${precio2}`);
                     break;
                 case 3:
                    alert(`Ha seleccionado "${duracion3}". Precio: ${precio3}`);
                     break;
            
                 default:
                     alert("Lo sentimos, la opción ingresada es incorrecta");
                     break;
                     }
          
         let pregunta = prompt("¿Desea agregar la opción planes de entrenamiento? Responda 'si' o 'no'");

             if(pregunta === "si"){

                let respuesta = parseInt(prompt(`Ha agregado la opción "Planes de Entrenamiento". Elija la duración: ${duracion1}, ${duracion2} o ${duracion3}`));

                switch(respuesta){
                    case 1:
                        alert(`Ha seleccionado "${duracion1}". Precio: ${precio1}`);
                        break;
                    case 2:
                       alert(`Ha seleccionado "${duracion2}". Precio: ${precio2}`);
                        break;
                    case 3:
                       alert(`Ha seleccionado "${duracion3}". Precio: ${precio3}`);
                        break;
               
                    default:
                        alert("Lo sentimos, la opción ingresada es incorrecta");
                        break;
                   
                }
                  
            }
            
             if(pregunta === "no"){
                 alert("Muchas gracias.");
                 break; 
             }

            const personaNueva = new Persona(nombrePedido, planPedido, duracionElegida, precioTotal);
            opciones.push(personaNueva);

        
         planElegido = parseInt(prompt(`Elija una de nuestras opciones: ${planElegido}`));

         planElegido = parseInt(prompt(`Elija una de nuestras opciones: ${planElegido}`));
     }
    
     
 }   




let persona = {
    nombre: nombre,
    plan,
    duracion,
    precio,
};

opciones.push(Persona);
console.log(opciones);

let total = 0;
for (let i = 0; i< opciones.length; i++){
    total += opciones[i].precio;
}
console.log(total);

