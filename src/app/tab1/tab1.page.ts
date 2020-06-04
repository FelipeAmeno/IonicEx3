import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PessoaService } from '../services/pessoa.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private pessoaService: PessoaService) { }

  async ngOnInit() {
    let teste = await this.pessoaService.getPessoa();
    console.log(teste);
  }
}
