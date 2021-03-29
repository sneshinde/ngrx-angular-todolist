import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ToDo from './todo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoHttpService {
 todos: any = [
    {
        "Title": "first",
        "IsCompleted": true
    },
    {
        "Title": "second",
        "IsCompleted": true
    }
]
  private ApiURL: string = 'https://localhost:44308/api/ToDo';
  constructor(private httpclient: HttpClient) {}

  getToDos(): Observable<ToDo[]> {
    //return this.httpclient.get<ToDo[]>(this.ApiURL);
    return of(this.todos);
  }

  createToDos(payload: ToDo): Observable<ToDo> {
    // return this.httpclient.post<ToDo>(this.ApiURL, JSON.stringify(payload), {
    //   headers: { 'Content-Type': 'application/json' }
    // });
     this.todos.push(payload);
    return of(payload);
  }
}