import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {

  comentario: FormGroup;
  id = 0;
  accion = 'Agregar';
  loading = false;
  comentarios: Comentario;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private comentarioService: ComentarioService,
              private router: Router) { 
    this.comentario = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      texto: ['', Validators.required],
    });
    if(+this.route.snapshot.paramMap.get('idComentario') > 0){
        this.id = +this.route.snapshot.paramMap.get('idComentario');
    }
  }

  ngOnInit(): void {
    this.editarComentario();
  }
    guardarComentario(){
      if(this.accion == 'Agregar'){
        const comentario: Comentario ={
          fechaCreacion: new Date(),
          autor: this.comentario.get('autor').value,
          titulo: this.comentario.get('titulo').value,
          texto: this.comentario.get('texto').value,
        };
        this.comentarioService.guardarComentario(comentario).subscribe(data => {
          this.router.navigate(['/']);
        });
      } else{
        const comentario: Comentario ={
          idComentario: this.comentarios.idComentario,
          fechaCreacion: this.comentarios.fechaCreacion,
          autor: this.comentario.get('autor').value,
          titulo: this.comentario.get('titulo').value,
          texto: this.comentario.get('texto').value,
      };
      this.comentarioService.actualizarComentario(this.id, this.comentarios).subscribe(data => {
        this.router.navigate(['/']);
      });
    }
      console.log(this.comentario);
    }

    editarComentario(){
      if(this.id > 0){
        this.accion = 'Editar';
        this.comentarioService.cargarComentario(this.id).subscribe(data => {
        this.comentarios = data;
        this.comentario.patchValue({
          titulo: data.titulo,
          autor: data.autor,
          texto: data.texto,
        });
      });
    }
  }
}
