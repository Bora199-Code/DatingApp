import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private http = inject(HttpClient);
  baseUrl = 'https://localhost:44304/api/';

  login(model:any){
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}
