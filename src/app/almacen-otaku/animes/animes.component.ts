import { Component, OnInit } from '@angular/core';


import { OtakuService } from 'src/app/services/otaku.service';
import { Type } from '../../../../../curso-angular/02-gifsApp/src/app/gifs/interface/gifs.interface';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {
  objectAnimes: {};
  data: any[];




  constructor(private otakuService: OtakuService) { }

  async ngOnInit() {
    this.objectAnimes = await this.otakuService.getAllAnimes();

    this.data = Object.values(this.objectAnimes);

    this.data = this.data[5]


  }


}
