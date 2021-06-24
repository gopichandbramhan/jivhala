import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

// import { MustMatch } from './_helpers/must-match.validator';


@Component({
  selector: 'app-registratin',
  templateUrl: './registratin.component.html',
  styleUrls: ['./registratin.component.css']
})
export class RegistratinComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
    // constructor(private rr:Router) { }
    constructor(private formBuilder: FormBuilder) { }
  // userform:FormGroup;

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          mobileno: ['', [Validators.required, Validators.minLength(10)]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          address: ['', Validators.required],
          pin: ['', Validators.required],
        //   {
        //     validator: MustMatch('password', 'confirmPassword')
        // });
      });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}





















