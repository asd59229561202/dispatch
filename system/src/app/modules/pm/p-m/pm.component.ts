import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../shared/_models';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.scss']
})
export class PmComponent implements OnInit {

onChange() {
throw new Error('Method not implemented.');
}

  user: User[] = []
  items: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.items = [{
      label: 'True',
      icon: 'pi pi-refresh',
      
    },
    {
      label:'False',
      icon:'pi pi-times'
    }]
    this.loadUserInfo()

  }
  private loadUserInfo(): void {
    this.userService.getAllUser().subscribe(
      (data: User[]) => {
        this.user = (data)
      }
    )
  }
  saveUser(user:User) {
    this.userService.update(user).subscribe(resqonse=>{
      window.alert('Update Success')
    })
    }
  
}


