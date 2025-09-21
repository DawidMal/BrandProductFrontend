import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: any = {
    name: '',
    price: '',
    description: '',
    brandId: null,
    productTypeId: null,
    image: ''
  };
  brands: any[] = [];
  productTypes: any[] = [];
  imageTouched = false;
  nameTouched = false;
  priceTouched = false;
  descriptionTouched = false;
  brandTouched = false;
  productTypeTouched = false;

  constructor(private dataService: DataService, private router: Router) {}
onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.product.image = e.target.result.split(',')[1]; 
      };
      reader.readAsDataURL(file);
    }
    this.imageTouched = true;
  }

  ngOnInit(): void {
    this.loadBrands();
    this.loadProductTypes();
  }

  loadBrands() {
    this.dataService.getBrands().subscribe(data => {
      this.brands = data;
    });
  }
  
  loadProductTypes() {
    this.dataService.getProductTypes().subscribe(data => {
      this.productTypes = data;
    });
  }

  isValidPrice(price: string): boolean {
    if (!price) return false;
    const priceRegex = /^\d+(\.\d{1,2})?$/;
    return priceRegex.test(price);
  }
  
  
  onSubmit() {
    this.nameTouched = true;
    this.priceTouched = true;
    this.descriptionTouched = true;
    this.brandTouched = true;
    this.productTypeTouched = true;

    if (!this.product.name || !this.product.price || !this.product.description || !this.product.brandId || !this.product.productTypeId || !this.product.image) {
      return;
    }
    if (isNaN(parseFloat(this.product.price)) || !(/^\d+(\.\d{1,2})?$/.test(this.product.price))) {
     
      return;
    }

    this.dataService.addProduct(this.product).subscribe(
      response => {
        this.router.navigate(['/product'], { state: { message: `${this.product.name} created successfully` } });

      },
      error => {
        console.error('Error adding product:', error);
      }
    );
  }
}