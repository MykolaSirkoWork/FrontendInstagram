import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchUserService {
  public username$: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) {}

  public getUser(username: string): Observable<any> {
    return this.http.get(`http://localhost:3000?name=${username}`);
  }
}
