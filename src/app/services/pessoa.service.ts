import { Injectable } from '@angular/core';
import { Pessoas } from '../model/pessoas.model'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  public pessoas: Pessoas[] = []


  constructor(private http: HttpClient) { }


  async getPessoa() {
    let resp = await this.http.get('/assets/pessoas.json').toPromise();
    return resp;

    //.subscribe(result => {
    //  return result;
    // });
  }


}
