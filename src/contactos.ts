// Desarrolla una aplicación de gestión de contactos en la que los alumnos puedan crear una
// clase `Contacto` con propiedades como `nombre`, `correo electrónico`, `número de teléfono`, etc. 
// Implementa métodos para agregar nuevos contactos, buscar contactos por nombre y
// mostrar la lista completa de contactos. Esto les permitirá practicar la creación de clases,


  
  
export class Contacto {
  private id: number;
  private nombre: string;
  private email: string;
  private telefono: string;

  constructor(nombre: string, email: string, telefono: string) {
    this.id = this.generarId();
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
  }

  private generarId(): number {
    const ids = Agenda.listaContactos.map(contacto => contacto.id);

    if (ids.length === 0) {
      return 1; // Si no hay contactos en la lista, el primer ID será 1.
    }

    return Math.max(...ids) + 1;
  }

  // Métodos públicos para obtener información sobre el contacto
  obtenerNombre(): string {
    return this.nombre;
  }

  obtenerEmail(): string {
    return this.email;
  }

  obtenerTelefono(): string {
    return this.telefono;
  }
}

export class Agenda {
  static listaContactos: Contacto[] = [];

  static agregarContacto(contacto: Contacto) {
    Agenda.listaContactos.push(contacto);
    console.log(`El contacto ${contacto.obtenerNombre()} se agregó a la agenda.`);
  }

  static buscarContacto(nombre: string) {
    const contactoEncontrado = Agenda.listaContactos.find(contacto => contacto.obtenerNombre() === nombre);
    
    if (contactoEncontrado) {
      console.log(`Nombre: ${contactoEncontrado.obtenerNombre()}, Email: ${contactoEncontrado.obtenerEmail()}, Teléfono: ${contactoEncontrado.obtenerTelefono()}`);
    } else {
      console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
    }
  }

  static listarContactos() {
    if (Agenda.listaContactos.length === 0) {
      console.log("La agenda de contactos está vacía.");
    } else {
      console.log("Lista de contactos:");
      Agenda.listaContactos.forEach(contacto => {
        console.log(`Nombre: ${contacto.obtenerNombre()}, Email: ${contacto.obtenerEmail()}, Teléfono: ${contacto.obtenerTelefono()}`);
      });
    }
  }
}

const contacto = new Contacto("Pablo", "contacto@gmail.com", "370456893")
Agenda.agregarContacto(contacto)
Agenda.listarContactos()
Agenda.buscarContacto("Pablo")


// export class TodoList {
//   private todos: Todo[] = []

//   generarId () {
//     const ids = this.todos.map(e => e.id)

//     if (!ids.length) {
//       ids.push(0)
//     }

//     return Math.max(...ids) + 1
//   }

//   addTodo (todo: Todo) {
//     this.todos.push(todo)
//   }

//   getTodos () {
//     return this.todos
//   }

//   deleteTodo (id: number) {
//     this.todos = this.todos.filter(e => e.id !== id)
//   }

//   completeTodo (id: number) {
//     this.todos = this.todos.map(e => {
//       if (e.id === id) {
//         e.done = true
//       }
//       return e
//     })
//   }
// }

// const lista = new TodoList()

// const todo1: Todo = {
//   id: lista.generarId(),
//   title: 'My first todo',
//   done: false,
//   date: new Date().toJSON().slice(0, 10)
// }

// lista.addTodo(todo1)

// const todo2: Todo = {
//   id: lista.generarId(),
//   title: 'My second todo',
//   done: false,
//   date: new Date().toJSON().slice(0, 10)
// }

// lista.addTodo(todo2)

// console.log(lista.getTodos())

// lista.deleteTodo(2)

// console.log(lista.getTodos())

// lista.completeTodo(1)

// console.log(lista.getTodos())