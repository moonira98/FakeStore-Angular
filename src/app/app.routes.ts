import { Routes } from '@angular/router';
import { HomeComponent } from './layout/components/home/home.component';
import { CardComponent } from './layout/components/card/card.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'product/:id', component: CardComponent}

];
