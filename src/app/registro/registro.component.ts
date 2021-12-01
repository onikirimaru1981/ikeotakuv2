import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtakuService } from '../services/otaku.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formUser: FormGroup;


  constructor(
    private router: Router,
    private otakuService: OtakuService
  ) {
    this.formUser = new FormGroup({
      nombre: new FormControl(),
      correo: new FormControl(),
      password: new FormControl(),
      genero: new FormControl(),
      ciudad: new FormControl(),
      pais: new FormControl(),
      fechaNacimiento: new FormControl()

    });


  }

  ngOnInit(): void { }

  async addUserBBDD(): Promise<any> {
    try {
      const userData = this.formUser.value;

      this.otakuService.createUser(userData);
      console.log('User created');

      this.formUser.reset();
    } catch (error) {
      console.log(error);
    }
    // this.router.navigate(['/userLogin']);
  }


}
