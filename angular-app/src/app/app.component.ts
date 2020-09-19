import { Component } from '@angular/core';
import { ProductService } from './core/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private productService: ProductService) {
        this.productService.getAll().subscribe((res) => {
            console.log('saddasd', res)
        })
    }
}
