import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public appUrlPrefix: string = environment.appUrlPrefix;
  constructor(
    private router:Router
  ) { }
}
