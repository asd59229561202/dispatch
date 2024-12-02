import { Component, OnInit, OnDestroy} from '@angular/core';
import { DeliverInformationsService } from '../../../_services/deliver-informations.service';
import { Product } from '../../../shared/_models/product_model';
import { DeliverService } from '../../../_services/deliver.service';
import { TruckService } from '../../../_services/truck.service';
import { Truck } from '../../../shared/_models/truck_model';
import { deliverInfo } from '../../../shared/_models/deliverInfo_model';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-deliver-info',
  templateUrl: './deliver-info.component.html',
  styleUrls: ['./deliver-info.component.scss']
})
export class DeliverInfoComponent implements OnInit , OnDestroy {


  deliverInfos: Product[] = [];
  truckInfos: Truck[] = [];
  display: boolean = false; // 控制对话框显示状态
  selectedTruckingNumber: string = '';
  destroy$ = new Subject<boolean>
  currentProducts = Object.create(Product);
  isAmin : boolean = this.userService.currentUser.isAdmin
  constructor(
    private dIService: DeliverInformationsService,
    private deliverService: DeliverService,
    private truckService: TruckService,
    private  userService :UserService
  ) {}

  ngOnInit(): void {
    
    this.loadDeliverInfo();
  }
  ngOnDestroy(){
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
  private loadDeliverInfo(): void {
    if(this.isAmin){
    this.dIService.getClientAll().pipe(takeUntil(this.destroy$)).subscribe(
      (data: Product[]) => {
        this.deliverInfos = Array.isArray(data) ? data : [data];
        console.log('Loaded deliver information:', this.deliverInfos);
      },
      error => {
        console.error('Error loading deliver information:', error);
      }
    );
    }else{
      this.dIService.getClinet(this.userService.currentUser.email).subscribe(
        (data: Product[]) => {
          this.deliverInfos = Array.isArray(data) ? data : [data];
          console.log('Loaded client deliver information:', this.deliverInfos);
        },
        error => {
          console.error('Error client loading deliver information:', error);
        }
      )
    }
  }

  findProduct(sender: any): void {
    this.deliverService.findProduct(sender);
     
  }
  deleteProduct(sender: any) :void{
    this.dIService.deleteDeliver(sender).subscribe({
      next:()=>{
      this.truckService.update(sender.TruckingNumber,'',false).subscribe({
        next:()=>{
          this.loadDeliverInfo()
        }
      })
      },
    error:(err)=>{
      console.error('Error deletingdeliver:' , err)
    }})
    }
  showDialog(truckingNumber: string, infos: Product[]): void {
    this.selectedTruckingNumber = truckingNumber;
    this.truckInfos = [];
    console.log(typeof(infos))
    this.currentProducts = infos.filter(info => info.truckingNumber === truckingNumber); // 筛选出 truckNumber 匹配的 infos
    console.log('Current Products:', this.currentProducts); 
    this.truckService.findInfo(this.selectedTruckingNumber).pipe(takeUntil(this.destroy$)).subscribe(
      (data: Truck) => {
        this.truckInfos = Array.isArray(data) ? data : [data];
        console.log('Loaded Truck information:', this.truckInfos);
      },
      error => {
        console.error('Error loading Truck information:', error);
      }
    )
    this.display = true; // 打开对话框
  }
  calculateRatio(item: Truck): number {
    let totalVolume = 0;
    for (let product of this.currentProducts) {//dialog會重複出現
      
      if (product.truckingNumber === item.truckingNumber) {
        
        totalVolume += Number(product.height) * Number(product.length) * Number(product.width) * product.quantity;
      }
    }
    if (totalVolume === 0 || Number(item.height) * Number(item.length) * Number(item.width) === 0) {this.display = false;return 0};
    return (totalVolume / (Number(item.height) * Number(item.length) * Number(item.width))) * 100;
  }
}
