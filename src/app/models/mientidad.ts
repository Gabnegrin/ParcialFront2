export class Mientidad {
    id: number | null;
    nombre: string | null;
    autor: string | null;
    edicion: string | null;
    precio: number | null;
    eliminado: boolean | null;
    tipo: boolean | null;
    fama: number | null;
    fe_escritura: Date | null;

    constructor(
      id: number | null = null,
      nombre: string | null = null,
      autor: string | null = null,
      edicion: string | null = null,
      precio: number | null = null,
      eliminado: boolean | null = null,
      tipo: boolean | null = null,
      fama: number | null = null,
      fe_escritura: Date | null,
    ) {
      this.id = id;
      this.nombre = nombre;
      this.autor = autor;
      this.edicion = edicion;
      this.precio = precio;
      this.eliminado = eliminado;
      this.tipo = tipo;
      this.fama = fama;
      this.fe_escritura = fe_escritura
    }
}