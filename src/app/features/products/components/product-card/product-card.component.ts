import { Component, Input } from '@angular/core';
import { IProduct } from '../../../../shared/models/card';
import { UiCardComponent } from '../../../../shared/ui-components/ui-card/ui-card.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
    @Input() product!: IProduct
}
