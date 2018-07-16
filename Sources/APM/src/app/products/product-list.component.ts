import { Component, OnInit } from "@angular/core"
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    pageTitle: string = "Product List!";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    _listFilter: string;
    
    public get listFilter() : string {
        return this._listFilter;
    }  
    public set listFilter(value : string) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
    }
    
    filteredProducts : IProduct[];
    products: IProduct[] = [];

    constructor(private productService : ProductService) {
    }

    ngOnInit(): void {
        console.log('OnInit');
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    toggleShow() : void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message : string) : void{
        this.pageTitle = "Product List " + message;
    }
}