import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity, Observable } from 'rxjs';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  AppUrl = 'https://localhost:44372/';
  ApiUrl = 'api/Comentario';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getListComentario(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.AppUrl + this.ApiUrl);
  }

  deleteComentario(id: number): Observable<Comentario> {
    return this.http.delete<Comentario>(this.AppUrl + this.ApiUrl + id);
  }

  guardarComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.AppUrl + this.ApiUrl, comentario, this.httpOptions);
  }

  cargarComentario(id: number): Observable<Comentario> {
    return this.http.get<Comentario>(this.AppUrl + this.ApiUrl + id);
  }

  actualizarComentario(id: number, comentario: Comentario): Observable<Comentario> {
    return this.http.put<Comentario>(this.AppUrl + this.ApiUrl + id, comentario, this.httpOptions);
  }
}
