import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AdminService } from './services/admin.service';
@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private adminService: AdminService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.adminService.show();
    return next.handle(request).pipe(
      finalize(() => this.adminService.hide()),
    );
  }
}
