import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from '../../src/app/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = "http://localhost:3000/admin";

  constructor(private http : HttpClient) { }

  admins() : Observable<IAdmin[]> {
    return this.http.get<IAdmin[]>(this.url);
  }

  
}
