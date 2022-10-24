class User{
    id:number;
    nombre: string;
    amigos: User[];

    public constructor(id: number, nombre: string, amigos: User[]) {
      this.id = id;
      this.nombre = nombre;
      this.amigos = amigos;
    }

    

    
  }