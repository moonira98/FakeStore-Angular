import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-ui-card',
  standalone: true,
  imports: [  
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    CurrencyPipe,
    MatButtonModule,],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.scss'
})
export class UiCardComponent {
  @Input() id! : number
  @Input() title!: string;
  @Input() price!: number;
  @Input() description?: string;
  @Input() category?: string;
  @Input() image!: string[];
  @Input() rate!: number; 
  @Input() be!: boolean

  @Output() addToBucket = new EventEmitter<void>()

  onAddToBucket() {
    this.addToBucket.emit()
  }

  
}
