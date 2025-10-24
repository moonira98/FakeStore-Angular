import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-ui-card',
  standalone: true,
  imports: [  MatCardModule,
    MatButtonModule,
    MatChipsModule,
    CurrencyPipe,
    MatButtonModule,],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.scss'
})
export class UiCardComponent {
  @Input() image?: string;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() description?: string;
  @Input() price?: number;
  @Input() link?: string; // например, для перехода

}
