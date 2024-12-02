import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../_services/user.service";
import { User } from "../../shared/_models";
import { DeliverService } from "../../_services/deliver.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    user!:User;
    constructor(private userService:UserService,private deliverService: DeliverService, private router :Router){
        userService.userObservable$.subscribe(
           (newUser)=>{
                this.user = newUser;
           } 
        )
    }
    ngOnInit(): void {
        
    }
    logout(){
        this.userService.logout();
        this.deliverService.clearProduct();
    }
    Profile(){
        this.router.navigateByUrl('');
    }
    get isAuth(){
        return this.user.token;
    }
    
}