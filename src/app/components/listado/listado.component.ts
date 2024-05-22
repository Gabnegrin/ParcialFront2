import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Mientidad } from '../../models/mientidad';
import { Router } from '@angular/router';
import { HttpserviceService } from '../../services/httpservice.service';
import { InfocompartidaService } from '../../services/infocompartida.service';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  libros: Mientidad[] = [];
  constructor(private router: Router, private httpservice: HttpserviceService, private infocompartida: InfocompartidaService) { 
  }
  ngOnInit(): void {
    this.obtener();
  }
  obtener(){
    this.httpservice.getData('http://localhost:8080/libro')
    .then(response => {
      this.libros = response.data.map((librodata: any) => {
        return new Mientidad(
          librodata.id,
          librodata.nombre,
          librodata.autor,
          librodata.edicion,
          librodata.precio,
          librodata.eliminado,
          librodata.tipo,
          librodata.fama,
          librodata.fe_escritura,
        );
      });
    })
    .catch(error => {
      console.error(error);
    });
  }
}
