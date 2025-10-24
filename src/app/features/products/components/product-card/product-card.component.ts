import { Component, Input} from '@angular/core';
import { IProduct } from '../../../../shared/models/card';
import { UiCardComponent } from '../../../../shared/ui-components/ui-card/ui-card.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [UiCardComponent, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
    @Input() product!: IProduct
  
}
