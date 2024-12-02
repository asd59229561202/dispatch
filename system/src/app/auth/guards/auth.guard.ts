import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../_services/user.service';

@Injectable(
  {
    providedIn: 'root'
  })

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService:UserService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
    
    if (this.userService.currentUser.token){
      return true; 
    }
    
    this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}})
    window.alert('請先登入')
      return false;
  }
  
}
