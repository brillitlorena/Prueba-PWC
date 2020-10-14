import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-listar-comentario',
  templateUrl: './listar-comentario.component.html',
  styleUrls: ['./listar-comentario.component.css']
})
export class ListarComentarioComponent implements OnInit {
  listComentario: Comentario[];
  loading = false;

  constructor(private comentarioService: ComentarioService) { }

  ngOnInit(): void {
    this.cargarComentario();
  }

  cargarComentario() {
    this.loading = true;
    this.comentarioService.getListComentario().subscribe(data => {
      this.loading = false;
      this.listComentario = data;
    });
  }

  delete(id: number) {
    this.loading = true;
    this.comentarioService.deleteComentario(id).subscribe(data => {
      this.cargarComentario()
      this.loading = false;
    });
  }
}
