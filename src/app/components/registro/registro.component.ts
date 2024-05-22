import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mientidad } from '../../models/mientidad';
import { HttpserviceService } from '../../services/httpservice.service';
import { InfocompartidaService } from '../../services/infocompartida.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  mientidad: Mientidad = new Mientidad(null,null,null,null,null,false,null,null,null);
  constructor(private router: Router, private httpservice: HttpserviceService, private infocompartida: InfocompartidaService) { 
  }

  EntregarValores(){
    this.mientidad.nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    this.mientidad.autor = (<HTMLInputElement>document.getElementById('autor')).value;
    this.mientidad.edicion = (<HTMLInputElement>document.getElementById('edicion')).value;
    if(parseInt((<HTMLInputElement>document.getElementById('fama')).value, 10) > 0 && parseInt((<HTMLInputElement>document.getElementById('fama')).value, 10) < 3){
      this.mientidad.fama = parseInt((<HTMLInputElement>document.getElementById('fama')).value, 10);
    }
    this.mientidad.fe_escritura = null;
    this.mientidad.precio = parseInt((<HTMLInputElement>document.getElementById('precio')).value, 10)
    this.mientidad.nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    if(parseInt((<HTMLInputElement>document.getElementById('precio')).value, 10) == 1){
      this.mientidad.tipo = false;
    }
    else{
      this.mientidad.tipo = true;
    }
    this.postMientidad(this.mientidad);
  }

  postMientidad(valor: Mientidad){
    if(valor.nombre != null){
      this.httpservice.postData("http://localhost:8080/libro", valor)
      .then(response => {
        this.infocompartida.setMientidad(response.data);
        this.router.navigate(['/listado']);
      })
      .catch(error => {
        console.error(error);
      });
    }
    else{
      console.log("Usuario o contrasena es null");
    }

  }
}
