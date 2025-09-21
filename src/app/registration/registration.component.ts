import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  model: any = {};
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private apiService: DataService, private router: Router) { }

  register() {
    this.apiService.register(this.model)
      .subscribe(
        response => {
          // Handle successful registration
          console.log(response);
          this.successMessage = 'Registration successful!';
          // Redirect to the login page after a short delay
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000); // 2 seconds delay before redirecting
        },
        error => {
          // Handle registration error
          console.error(error);
           // 2 seconds delay before redirecting
          this.successMessage = 'Registration unsuccessful!';
        }
      );
  }
}
