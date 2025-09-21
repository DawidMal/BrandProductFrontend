import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from '../app/Service/data.service';
import { ProductComponent } from './product/product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportingPageComponent } from './reporting-page/reporting-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component'; // Add this line

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SearchProductComponent,
    AddProductComponent,
    ReportingPageComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
     ReactiveFormsModule, 
     MatSelectModule,
    MatOptionModule,
    MatExpansionModule, // Import MatExpansionModule
    MatListModule ,
  ],
  providers: [DataService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
