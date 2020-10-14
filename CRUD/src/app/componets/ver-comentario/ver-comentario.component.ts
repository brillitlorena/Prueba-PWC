import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-ver-comentario',
  templateUrl: './ver-comentario.component.html',
  styleUrls: ['./ver-comentario.component.css']
})
export class VerComentarioComponent implements OnInit {

  comentario: Comentario;
  loading = false;
  id: number;

  constructor(private comentarioService: ComentarioService, private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('idComentario');
  }

  ngOnInit(): void {
    this.cargarComentario();
  }

  cargarComentario() {
    this.loading = true;
    this.comentarioService.cargarComentario(this.id).subscribe(data => {
      this.loading = false;
      this.comentario = data;
    });
  }

}
