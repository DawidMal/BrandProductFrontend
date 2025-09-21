import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataService } from '../Service/data.service';
import { Product } from '../product/Product';

import { Router, ActivatedRoute } from '@angular/router';
import { Notification } from '../add-product/Message';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'price', 'brand', 'productType', 'description'];
  dataSource = new MatTableDataSource<Product>([]);
  pageSizeOptions: number[] = [3, 5, 10];
  notification: Notification = { message:  null };
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const message = this.route.snapshot.paramMap.get('message');
    this.notification = message ? { message: decodeURIComponent(message) } : { message: null };
    this.getProducts();
  }

  getProducts(): void {
    this.dataService.getProducts().subscribe(products => {
      this.dataSource.data = products;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
