import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Chart , registerables} from 'chart.js';
import { DataService } from '../Service/data.service';
import { MatAccordion } from '@angular/material/expansion';
Chart.register(...registerables);
@Component({
  selector: 'app-reporting-page',
  templateUrl: './reporting-page.component.html',
  styleUrls: ['./reporting-page.component.css']
})
export class ReportingPageComponent implements OnInit {
  @ViewChild('productCountByBrandChart') productCountByBrandChartRef!: ElementRef;
  @ViewChild('productCountByTypeChart') productCountByTypeChartRef!: ElementRef;
  @ViewChild('activeProductsReportChart') activeProductsReportChartRef!: ElementRef;
  activeProductsReportData: any[] = [];
  productTypes: any[] = [];
  brands: string[] = [];
  productsByType: { [key: string]: any[] } = {};
  productsByBrand: { [brand: string]: any[] } = {};
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getProductCountByBrand();
    this.getProductCountByType();
    this.getActiveProductsReport();
    
  }

  getProductCountByBrand(): void {
    this.dataService.getProductCountByBrand().subscribe(data => {
      const labels = data.map(item => item.brandName);
      const counts = data.map(item => item.count);

      new Chart(this.productCountByBrandChartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Product Count by Brand',
            data: counts,
            backgroundColor: '#90E0EF'
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }

  getProductCountByType(): void {
    this.dataService.getProductCountByType().subscribe(data => {
      const labels = data.map(item => item.productTypeName);
      const counts = data.map(item => item.count);

      new Chart(this.productCountByTypeChartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Product Count by Type',
            data: counts,
            backgroundColor: '#00B4D8'
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }

  getActiveProductsReport(): void {
    this.dataService.getActiveProductsReport().subscribe(data => {
      if (data) {
        // Filter out null or undefined brandNames
        data = data.filter(item => item && item.brandName);
  
        // Sort the data by brand name
        data.sort((a, b) => {
          const brandA = (a.brandName || '').toString(); // Ensure brandName is always a string
          const brandB = (b.brandName || '').toString(); // Ensure brandName is always a string
          return brandA.localeCompare(brandB);
        });
  
        this.activeProductsReportData = data;
  
        // Extract unique brands
        this.brands = Array.from(new Set(data.map(item => item.brandName)));
  
        // Group products by brand
        this.brands.forEach(brand => {
          // Filter products by brand
          const productsOfBrand = this.activeProductsReportData.filter(item => item.brandName === brand);
  
          // Sort products of this brand by product name
         //productsOfBrand.sort((a, b) => a.productName.localeCompare(b.productName));
  
          this.productsByBrand[brand] = productsOfBrand;
        });
      }
    });
  }
  
  
}
