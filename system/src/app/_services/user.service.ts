import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/_models';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../shared/_models/interfaces/IUserLogin';
import { GETALLUSER_URL, LOGIN_URL, REGISTER_URL, UPDATEUSER_URL } from '../shared/_models/constants/urls';
import { IUserRegister } from '../shared/_models/interfaces/IUserRegister';


const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable$: Observable<User>;

  constructor(private http: HttpClient) {
    this.userObservable$ = this.userSubject.asObservable();
  }
  public get currentUser():User{
    return this.userSubject.value;
  }
  login(userLogin: IUserLogin): Observable<User> {
    console.log('logining')
    return this.http.post<User>(LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserFromLocalStorage(user);
          this.userSubject.next(user);
          
        },
      })
    );
  }
  register(userRegister:IUserRegister):Observable<User>{
    return this.http.post<User>(REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) =>{
          this.setUserFromLocalStorage(user);
          this.userSubject.next(user);
        }
      })
    )
  }
  getAllUser(): Observable<User[]>{
    return this.http.get<User[]>(GETALLUSER_URL)
  }
  update(user:User): Observable<User>{
    return this.http.post<User>(UPDATEUSER_URL,user)
  }
  logout(){
    localStorage.removeItem(USER_KEY);
    this.userSubject.next(new User());
    window.location.reload();
  }
  setUserFromLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    return userJson ? JSON.parse(userJson) as User : new User();
  }

}
