import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';



interface Usuarios {

  id: number;
  name: string;
  idade: number;
  rg: number;
  email: string;

}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
  title = 'frontend';

  baseUrl = "http://localhost:3000/usuario";

  usuarios!: Usuarios[];

  read(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.baseUrl).pipe(
      map((obj) => obj)
    );
  }

  ngOnInit(): void {
    this.read().subscribe(data => {
      this.usuarios = data;
      console.log(data);
      
    })
  }

  constructor(private http: HttpClient) {}
}
