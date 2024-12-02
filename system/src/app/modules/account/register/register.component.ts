import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../../_services/user.service';
import { AlertService } from '../../../_services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RouterOutlet]
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(private userService: UserService,
    private fb: FormBuilder,
    private messageService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit(){
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      address: ['', Validators.required]
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];

  }
  get fc() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;

    this.userService.register({
      name: this.fc['name'].value,
      email: this.fc['email'].value,
      password: this.fc['password'].value,
      address: this.fc['address'].value
    }).subscribe(
      {
        next: () => {
          this.messageService.success('Register Success');
          this.router.navigateByUrl(this.returnUrl);
        },
        error: (error) => {
          this.messageService.error(error);
        }
      }
    )
  }
}
