import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private token = localStorage.getItem('token');

  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (
      localStorage.getItem('token') == null ||
      localStorage.getItem('token') == ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  getHeaders(token: string | null): HttpHeaders {
    let tokenString = 'Bearer ' + token;
    const headers = new HttpHeaders()
      .set('Authorization', tokenString)
      .set('Accept', 'application/json');
    return headers;
  }
}
