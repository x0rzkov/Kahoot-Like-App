import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_ROOT } from '../models/config';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  readonly SERVER_ROOT: string = SERVER_ROOT;

  constructor(private http: HttpClient) { }

  public joinGame(pin: string):Observable<any> {
    return this.http.get<any>(`${this.SERVER_ROOT}/join/${pin}`, {observe: 'response'});
  }
}
