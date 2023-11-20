import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs';
import { AdminService } from '../../../services/admin.service';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit  {
  public spinnerType: String = 'square-jelly-box';
  isLoading: Subject<boolean> = this.adminService.isLoading;

  constructor(private route:ActivatedRoute, private router:Router, public adminService: AdminService) {}

  ngOnInit():void {
    // this.showHero = (this.router.url != '/')?false:true;
    // console.log(this.showHero);
  }

}
