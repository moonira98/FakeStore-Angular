import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, switchMap, map } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  breadcrumbs: { label: string, url: string }[] = [];

  constructor(private router: Router, private productService: ProductsService) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.buildBreadcrumb());
  }

  buildBreadcrumb() {
    const urlParts = this.router.url.split('/').filter(Boolean);
    const breadcrumbs: { label: string, url: string }[] = [];

    if (urlParts[0]) {
      breadcrumbs.push({ label: 'Products', url: '/products' });
    }

    if (urlParts[1]) {
      const id = urlParts[1];
      this.productService.getProductById(id).subscribe(product => {
        const breadcrumbs: { label: string, url: string }[] = [];
        breadcrumbs.push({ label: 'Products', url: '/products' });
        breadcrumbs.push({ label: product.title, url: `/products/${product.id}` });
        this.breadcrumbs = breadcrumbs;
      });
    } else {
      this.breadcrumbs = [{ label: 'Products', url: '/products' }];
    }
    
  }
}
