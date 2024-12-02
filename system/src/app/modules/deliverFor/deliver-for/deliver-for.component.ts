import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from '../../../shared/_models';
import { UserService } from '../../../_services/user.service';
import { Product } from '../../../shared/_models/product_model';
import { DeliverService } from '../../../_services/deliver.service';
import { TruckService } from '../../../_services/truck.service';
import { Truck } from '../../../shared/_models/truck_model';
import { HttpClient } from '@angular/common/http';
import { empty, Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliver-for',
  templateUrl: './deliver-for.component.html',
  styleUrls: ['./deliver-for.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class DeliverForComponent implements OnInit {


  deliverForm!: FormGroup;
  user!: User;
  product!: Product;
  isSubmitted = false;
  trucks: Truck[] = [];
  truckingNumber!: string;
  isvisiable = false
  destroy$ = new Subject<boolean>
  items: { label: string; value: string }[] | undefined;
  isSelectVisible = false;
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private userService: UserService,
    private deliverService: DeliverService,
    private truckService: TruckService,
    private http: HttpClient,
    private router: Router
  ) {
    this.deliverService.productObservable$.subscribe(newProduct => {
      this.product = newProduct
    })

    this.userService.userObservable$.subscribe(newUser => {
      this.user = newUser;

    });

  }





  ngOnInit(): void {
    this.items = [{
      label: 'Plastic',
      value: 'Plastic',
    },
    {
      label: 'Metal',
      value: 'Metal',
    }, {
      label: 'Wood',
      value: 'Wood',
    }, {
      label: 'Glass',
      value: 'Glass',
    }, {
      label: 'Fabric',
      value: 'Fabric',
    }, {
      label: 'Paper',
      value: 'Paper',
    },]
    this.truckService.getAll().subscribe(trucks => { this.trucks = trucks })
    console.log(this.trucks.values)
    const beginDate = this.product?.createdAt ? this.parseDate(this.product.createdAt) : new Date();
    this.deliverForm = this.fb.group({//記得要將日期轉換
      _id: [this.product._id != undefined ? this.product._id : ''],
      sender: [this.product._id != undefined ? this.product.sender : this.user.name, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: [this.product._id != undefined ? this.product.email : this.user.email],
      name: [this.product._id != undefined ? this.product.sender : this.user.name, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      receiver: [this.product._id != undefined ? this.product.receiver : "", [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      origin: [this.product._id != undefined ? this.product.origin : "", [Validators.required]],
      destination: [this.product._id != undefined ? this.product.destination : "", [Validators.required]],
      date: [this.product._id != undefined ? this.parseDate(this.product.createdAt) : undefined, [Validators.required, this.minDateValidator]],
      quantity: [this.product._id != undefined ? this.product.quantity : "2", [Validators.required, Validators.max(99), Validators.min(1)]],
      length: [this.product._id != undefined ? this.product.length : "1", [Validators.required, Validators.min(0), Validators.max(300)]],
      width: [this.product._id != undefined ? this.product.width : "1", [Validators.required, Validators.min(0), Validators.max(250)]],
      height: [this.product._id != undefined ? this.product.height : "1", [Validators.required, Validators.min(0), Validators.max(250)]],
      weight: [this.product._id != undefined ? this.product.weight : "1", [Validators.required, Validators.min(0)]],
      material: [this.product._id != undefined ? this.product.material : "", [Validators.required]],
      truckingNumber: [this.product._id != undefined ? this.product.truckingNumber : "", [Validators.required]],
      truckingNumber2: [[]],
      startDate: [this.product._id != null? this.parseDate(this.product.startDate) : "", [Validators.required, this.minDateValidator]],
      endDate: [this.product._id != null ? this.parseDate(this.product.endDate) : "", [Validators.required]]
    });

  }
  ngOnDestory() {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
  parseDate(createdAt: string | undefined): Date | null {
    if (!createdAt) return null;
    const date = Date.parse(createdAt); // 使用原生 Date.parse 嘗試解析日期
    return isNaN(date) ? null : new Date(date);
  }
  



  get fc() {
    return this.deliverForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.compareDate()) {
      console.log(this.deliverForm.value['endDate'])
      return;
    }
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      accept: () => {
        this.deliverService.create(this.deliverForm.value).pipe(takeUntil(this.destroy$)).subscribe({
          next: () => {
            
            console.log(this.deliverForm.value['truckingNumber'])

            this.truckService.update(this.truckingNumber, '', false).subscribe();//後面的參數是是否isLoading
            this.truckService.update(this.deliverForm.value['truckingNumber'], this.deliverForm.value['_id'], true).subscribe();
            this.truckingNumber = ''


            this.showSuccess();

            this.router.navigateByUrl('/deliverFor', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/deliverInfo']);
            });
          },
          error: (error) => {
            console.log('Error creating delivery:', error);
            this.showFail(error);
          }

        });
      }
  
    });
  }

  compareDate(): boolean {
    // 比较日期
    if (this.deliverForm.value['startDate'] > this.deliverForm.value['endDate']) {
      this.showFail('出货时间不能比出货结束时间更早');
      return false
    }
    return true
  }
  minDateValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today ? null : { minDate: true };
  }
  convertToISOString(dateString: string): string {
    const date = new Date(dateString); // 將日期字串轉換為 Date 物件
    return date.toISOString(); // 轉換為 ISO 8601 格式
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Action confirmed' });
  }

  showFail(error: any) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
  }
  toggleSelect() {
    this.isvisiable = !this.isvisiable;
  }
  toggleSelect2() {
    this.isSelectVisible = !this.isSelectVisible;
  }
  hideSelect() {
    this.isvisiable = false
  }
  onChange(event: any): void {//當選擇車牌後會將舊數值存到truckNumber裡面，

    const selectedValue = event.target.options[event.target.selectedIndex].textContent.trim();
    const inputElment = document.getElementById('truckingNumberInput') as HTMLInputElement;


    if (!this.truckingNumber) {
      this.truckingNumber = inputElment?.value
      console.log(this.truckingNumber)

    }
    this.deliverForm.patchValue({ truckingNumber: selectedValue });
    this.isvisiable = false
  }
  get isAuth() {
    return this.user.token;
  }
  get isAdmin() {
    return this.user.isAdmin;
  }
  get already_uploading() {
    return this.product
  }



}


