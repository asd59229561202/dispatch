import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../../_services/user.service';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../_services/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [RouterOutlet,MessageService],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = 'deliverFor';
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: AlertService // 注入 MessageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
     }

  get fc() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    
    this.userService.login({ email: this.fc['email'].value, password: this.fc['password'].value }).subscribe(
      {
        next: (message) => {
          this.messageService.success('message');
          this.router.navigateByUrl(this.returnUrl);
        },

        error: (error) => {
          console.error(error);
          this.messageService.error(error);
        }
      }
    );
  }
}
