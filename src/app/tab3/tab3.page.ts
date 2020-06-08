import { Component } from '@angular/core';
import { PhotoService } from '../services/pessoa.service';
import { Photo } from '../model/pessoas.model'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private photoService: PhotoService) { }
}