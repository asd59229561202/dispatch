import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../shared/_models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  
  user!: User 
  constructor(private userService: UserService) {
    this.userService.userObservable$.subscribe(newUser => {
      this.user = newUser;
      console.log(this.user)
    });
  }
  ngOnInit(): void {
  }
  saveUser(user: User) {
    this.userService.update(user).subscribe(
      ()=>{
        window.alert('Update Success')
      }
    )
  }

}
