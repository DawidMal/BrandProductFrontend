import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReportingPageComponent } from './reporting-page/reporting-page.component'; // Import the Reporting component
import { LoginComponent } from './login/login.component';
const routes: Routes = [  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to product component by default
{ path: 'product', component: ProductComponent },
{ path: 'reporting', component: ReportingPageComponent },
{ path: 'add-product', component: AddProductComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
