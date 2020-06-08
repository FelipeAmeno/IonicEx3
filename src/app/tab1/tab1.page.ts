import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PessoaService } from '../services/pessoa.service'
import { Pessoas } from '../model/pessoas.model'



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pessoas: Pessoas[] = [];

  constructor(private pessoaService: PessoaService, private geolocation: Geolocation) { }

  async ngOnInit() {
    await this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Localização");

      console.log("Latitude: " + resp.coords.latitude + " Longitude: " + resp.coords.longitude)
      this.ChamarpessoasProximas(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      console.log('Erro ao encontrar/transmitir a localização ', error);
    });
  }

  async ChamarpessoasProximas(lat, long) {
    await this.pessoaService.encontrarPessoasPessoasProxima(lat, long).then((x) => {
      console.log(x);
      x.forEach(x => {
        console.log(x);
        console.log(x.data);
        this.pessoas.push(x.data);
      })
      console.log(this.pessoas);
    }).catch((err) => {
      console.log(err);
    })
  }
}
