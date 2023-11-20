import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public isLoading = new Subject<boolean>();
  constructor() { }

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }
}
