import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Product } from '../../../types';
import { ConfirmationService } from 'primeng/api';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product',
  standalone: true,
  imports:[RatingModule,FormsModule],
  providers: [ConfirmationService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product !: Product;

}
