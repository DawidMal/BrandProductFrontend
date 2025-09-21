import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private apiService: DataService, private router: Router) { }

  login() {
    this.apiService.login(this.model)
      .subscribe(
        response => {
          // Handle successful login
          console.log(response);
          this.successMessage = 'Login successful!';
          // Redirect to the product page after a short delay
          setTimeout(() => {
            this.router.navigate(['/product']);
          }, 2000); // 2 seconds delay before redirecting
        },
        error => {
          // Handle login error
          console.error(error);
          this.errorMessage = 'Invalid username or password.';
        }
      );
  }
}
