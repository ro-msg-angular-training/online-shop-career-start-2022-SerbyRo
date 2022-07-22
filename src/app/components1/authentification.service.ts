import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { catchError,Observable,of,tap } from 'rxjs';
import Product from './Types/Product';
import { User, UserRoles } from './Types/user';
import { LoginCredential } from './Types/loginCredentials';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) {}

  user: User | null = null;
  redirectUrl: string | null = null;

  login(username:string, password:string): Observable<User>{
    return this.http.post<User>(`${'http://localhost:3000'}/login`, { username, password })
    .pipe(tap((user)=>(this.user = user)));
  }

  logout(): void{
    this.user = null;
  }

  isLoggedIn(): boolean{
    return this.user !== null;
  }

  userHasRole(role: UserRoles): boolean{
    return this.user?.roles.includes(role) ?? false;
  }
  
}
