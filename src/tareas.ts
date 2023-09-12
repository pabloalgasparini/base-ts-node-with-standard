// Clase para representar una tarea
class Tarea {
  public nombre: string;
  public fecha_vencimiento: Date;
  public completa: boolean = false;

  constructor(nombre: string, fecha_vencimiento: Date) {
    this.nombre = nombre;
    this.fecha_vencimiento = fecha_vencimiento;
  }

  // Agrega una tarea a la lista
  public agregarTarea(tarea: Tarea) {
    tareas.push(tarea);
  }

  // Marca una tarea como completada
  public completarTarea(tarea: Tarea) {
    tarea.completa = true;
  }

  // Elimina una tarea de la lista
  public eliminarTarea(tarea: Tarea) {
    tareas.splice(tareas.indexOf(tarea), 1);
  }
}

// Lista de tareas
const tareas: Tarea[] = [];

// Agregamos algunas tareas a la lista
tareas.push(new Tarea("Ir al supermercado", new Date()));
tareas.push(new Tarea("Llamar al médico", new Date()));
tareas.push(new Tarea("Terminar el proyecto", new Date()));

tareas.forEach((tarea)=>{
  if(!tarea.completa && tarea.nombre ==="Ir al supermercado"){
    tarea.completarTarea(tarea);
    console.log(`La tarea ${tarea.nombre} está completada`);
  }else if(!tarea.completa && tarea.nombre ==="Llamar al médico"){
    console.log(`La tarea ${tarea.nombre} fue eliminada con exito`);
    tarea.eliminarTarea(tarea)
  }
  
})


// Imprimimos las tareas
// tareas.forEach((tarea) => {
//   console.log("Tarea: ".concat(tarea.nombre));
//   if (tarea.completa) {
//     console.log("Completada");
//   } else {
//     console.log("No completada");
//   }
// });

export {}