let nombre;
let eleccion;
let duracion;
let precio;
let total = 0;

// CLASE
const opciones = [];
class Persona{
    constructor(nombre, plan, duracion, precio){
        this.nombre = nombre;
        this.plan = plan;
        this.duracion = duracion;
        this.precio = precio;  
    }
};

// OBJETOS
const persona1 = new Persona("Carla", 1, 3, 5500);
const persona2 = new Persona("Ezequiel", 2, 2, 3500);
console.log(persona1);
console.log(persona2);
persona1.valor();
persona2.valor();




nombre = prompt("Ingrese su nombre");

eleccion = parseInt(prompt("Elija una de nuestras opciones (cualquier otra tecla para salir): '\n1. Planes de entrenamiento', '\n2. Planes alimenticios'"));

 while(eleccion === 1 || eleccion === 2){

         if(eleccion === 1){
            alert("Ha seleccionado la opción 'Planes de entrenamiento'");
         }else{
            alert("Ha seleccionado la opción 'Planes alimenticios'");
         }
    duracion = parseInt(prompt("Elija la duración: \n1. 2 semanas, \n2. un mes, \n3. dos meses"));

         if(duracion === 1 || duracion === 2 || duracion ===3){

            switch(duracion){
                case 1:
                    alert("Adquirir el plan por 2 semanas. Precio $2000");
                    precio = 2000;
                    break;
                
                case 2:
                    alert("Adquirir el plan por un mes. Precio $3500");
                    precio = 3500;
                    break;
                
                case 3:
                    alert("Adquirir el plan por dos meses. Precio 5500");
                    precio = 5500;
                    break;
            } 
            
            const personaNueva = new Persona(nombre, eleccion, duracion, precio);

            opciones.push(personaNueva);

         }else{
            alert("Duración incorrecta.");
         }
        
         eleccion = parseInt(prompt("Si lo desea, elija otras opciones (cualquier otra tecla para salir): '\n1. Planes de entrenamiento', '\n2. Planes alimenticios'"));

        
         if(eleccion === 1){
            alert("Ha seleccionado la opción 'Planes de entrenamiento'");
         }else{
            alert("Ha seleccionado la opción 'Planes alimenticios'");
         }
     
    
    duracion = parseInt(prompt("Elija la duración: \n1. 2 semanas, \n2. un mes, \n3. dos meses"));

         if(duracion === 1 || duracion === 2 || duracion ===3){

            switch(duracion){
                case 1:
                    alert("Adquirir el plan por 2 semanas. Precio $2000");
                    precio = 2000;
                    break;
                
                case 2:
                    alert("Adquirir el plan por un mes. Precio $3500");
                    precio = 3500;
                    break;
                
                case 3:
                    alert("Adquirir el plan por dos meses. Precio 5500");
                    precio = 5500;
                    break;
            } 

            const personaNueva = new Persona(nombre, eleccion, duracion, precio);

            opciones.push(personaNueva);

         }else{
            alert("Duración incorrecta.");
         }   
         eleccion = parseInt(prompt("Elija una de nuestras opciones (cualquier otra tecla para salir): '\n1. Planes de entrenamiento', '\n2. Planes alimenticios'"));

 }  

 let Persona = {
    nombre: Persona.length + 1,
    plan,
    duracion,
    precio,
};

// SUMA DE PRECIOS PARA EL TOTAL

for (let i = 0; i < opciones.length; i++){
    total += opciones[i].precio;
}
console.log(total);

