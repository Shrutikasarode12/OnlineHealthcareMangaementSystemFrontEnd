import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../moduls/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent   {

  admin = { userName: '', 
            password: '' }; // Initialize admin object with empty strings

constructor(private router: Router, private service: AdminService) {}


login() {
if (this.admin.userName === 'admin' && this.admin.password === 'admin') {
// Navigate to the home page on successful login
this.router.navigate(['/home']);
// Call save method
this.save();
} else {
alert('Invalid username or password');
}
}
save() {
this.service.addLogin(this.admin).subscribe(
response => {
console.log('Login saved successfully');
},
error => {
console.error('Error saving login', error);
}
);
}
}
