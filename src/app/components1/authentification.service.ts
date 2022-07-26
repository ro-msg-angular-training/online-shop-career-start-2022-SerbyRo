import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { catchError, Observable, of, tap } from 'rxjs';
import Product from './Types/product';
import { User, UserRoles } from './Types/user';
import { LoginCredential } from './Types/login-credentials';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(private http: HttpClient) {}

  user: User | null = null;
  redirectUrl: string | null = null;

  login(username: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${environment.url}/login`, { username, password })
      .pipe(tap((user) => (this.user = user)));
  }

  loginFullUser(creds: LoginCredential): Observable<User> {
    return this.http
      .post<User>(`${environment.url}/login`, creds)
      .pipe(tap((user) => (this.user = user)));
  }

  logout(): void {
    this.user = null;
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  userHasRole(role: UserRoles): boolean {
    return this.user?.roles.includes(role) ?? false;
  }
}
