import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRf } from './rf';
import { Observable } from 'rxjs';
import { ISuggs } from './suggs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _url: string = "/assets/data/rf.json";

  constructor(private http: HttpClient) { }

  getApiData(gstr: string): Observable<ISuggs[]> {
    const headers = { 'Authorization': 'Token b556bbb8806ac03e4bec2fc510499aa7f49c67ef', 'content-type': 'application/json', 'accept': 'application/json' };
    const body = JSON.stringify({ query: gstr });
    return this.http.post<ISuggs[]>('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio', body, { headers })
    // return fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio', {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //     "Authorization": "Token " + "b556bbb8806ac03e4bec2fc510499aa7f49c67ef"
    //   },
    //   body: JSON.stringify({ query: gstr })
    // })
  }
  getRF(): Observable<IRf[]> {
    return this.http.get<IRf[]>(this._url);
  }
}
