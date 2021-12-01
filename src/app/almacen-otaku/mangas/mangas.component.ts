import { Component, OnInit } from '@angular/core';
import { OtakuService } from 'src/app/services/otaku.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent implements OnInit {
  objectMangas: {};
  data: any[];


  constructor(private otakuService: OtakuService) { }

  async ngOnInit() {
    this.objectMangas = await this.otakuService.getAllMangas();

    this.data = Object.values(this.objectMangas);
    this.data = this.data[5]

  }

}
// tengo pendiente crear los metodos para mangas
