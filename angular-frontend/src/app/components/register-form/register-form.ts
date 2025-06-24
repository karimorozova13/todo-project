import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router, RouterModule  } from '@angular/router';
import { Section } from '../section/section';
import { Container } from '../container/container';
import { FormTitle } from '../form-title/form-title';
import { CustomInput } from '../custom-input/custom-input';
import { Icon } from '../icon/icon';
import { LinkText } from '../link-text/link-text';
import { SubmitBtn } from '../submit-btn/submit-btn';
import { CommonModule } from '@angular/common';



// Custom validator for matching passwords
function passwordMatchValidator(password: string, confirmPassword: string): ValidatorFn {
  return (formGroup: AbstractControl) => {
    const pass = formGroup.get(password)?.value;
    const confirmPass = formGroup.get(confirmPassword)?.value;
    return pass === confirmPass ? null : { passwordMismatch: true };
  };
}

@Component({
  selector: 'app-register-form',
   standalone: true,
  imports: [RouterModule , CommonModule,ReactiveFormsModule,Section, Container, FormTitle, CustomInput,Icon, LinkText, SubmitBtn],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss'
})
export class RegisterForm {
 registerForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        userName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/[A-Z]/), // uppercase
          Validators.pattern(/[a-z]/), // lowercase
          Validators.pattern(/[0-9]/), // number
          Validators.pattern(/[!@#$%^&*]/) // special char
        ]],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: passwordMatchValidator('password', 'confirmPassword')
      }
    );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  async onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const values = this.registerForm.value;

    try {
      // Call your API here, replace this with your service call:
      // await this.authService.register(values);

      console.log('Registration successful:', values);
      this.router.navigate(['/login']);
    } catch (error) {
      // Handle error (e.g. show popup)
      this.errorMessage = 'Registration failed. Please try again.';
      console.error(error);
    }
  }

  // Helper getter for easy access in template
  get f() {
    return this.registerForm.controls;
  }
}

