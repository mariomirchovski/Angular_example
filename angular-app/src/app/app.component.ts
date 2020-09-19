import { Component } from '@angular/core';
import { ProductService } from './core/services/product.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-app';
    constructor(private productService: ProductService) { }
}
