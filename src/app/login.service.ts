import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private baseUrl = 'http://localhost:9090/';  

  constructor(private http:HttpClient) { }

 // below this all the API's will be there

  // We can have the multiple connect
  getUserList(): Observable<any> {

    console.log("Hi this is Prudhvi");

    return this.http.get(`${this.baseUrl}`+'getuser');  //will change ...As Per ordermanagement


  }

   // below this all the API's will be there

  // We can have the multiple connect

  createUser(user: object): Observable<object> {

    return this.http.post(`${this.baseUrl}`+'adduser', user);

  }

  deleteUser(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}deleteuser/${id}`, { responseType: 'text' });

  }


  getUser(id: number): Observable<Object> {

    return this.http.get(`${this.baseUrl}/getuser/${id}`);

  }

  updateUser(id: number, value: any): Observable<Object> {

    return this.http.post(`${this.baseUrl}/updateuser/${id}`, value);
  }
}


