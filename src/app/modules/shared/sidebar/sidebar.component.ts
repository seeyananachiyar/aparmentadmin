import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public appUrlPrefix: string = environment.appUrlPrefix;

  constructor(
    private router:Router
  ) { }
}
