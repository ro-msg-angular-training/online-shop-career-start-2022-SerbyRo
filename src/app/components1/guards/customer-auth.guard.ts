import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthGuard implements CanActivate {

  constructor(private authService: AuthentificationService, private router: Router) {}

  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.userHasRole('customer')){
      return true;
    }else{
      this.authService.redirectUrl = state.url;
      return this.router.parseUrl('/'); 
    }
  }
  
}
