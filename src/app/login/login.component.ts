import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OtakuService } from '../services/otaku.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formUser: FormGroup;

  constructor(
    private router: Router,
    private otakuService: OtakuService

  ) {
    this.formUser = new FormGroup({
      correo: new FormControl(),
      password: new FormControl(),

    });


  }

  ngOnInit(): void {
  }

  async userLogin(): Promise<any> {
    try {
      const userData = this.formUser.value;

      const dataUserLogin = await this.otakuService.userLogin(userData);
      console.log(dataUserLogin);

      sessionStorage.setItem('user_email', JSON.stringify(userData.email));
      sessionStorage.setItem('token', JSON.stringify(dataUserLogin.token));

      this.router.navigate([`/home`]).then(() => {
        window.location.reload();
      });

    } catch (error) {

    }
  }



}


