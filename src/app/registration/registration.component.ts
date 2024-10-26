import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  data: any;
  firstFormData = {
    StudentId: '',
    date: '',
    fisrtName: '',
    middleName: '',
    lastName: '',
    f_Firstname: '',
    f_Middlename: '',
    f_Lastname: '',
    DOB: '',
    number: '',
    mail: '',
    contact: '',
    income: '',
    Address: ''
  };

  secondFormData={
    course:'',
    degree:'',
    college:'',
    passing:'',
    percentage:'',

  };



    constructor(
      private _formBuilder: FormBuilder
    ) {}

    ngOnInit(): void{
      
      this.firstFormGroup = this._formBuilder.group({
        StudentId: ['',Validators.required],
        date: ['',Validators.required],
        fisrtName: ['',Validators.required],
        middleName: ['',Validators.required],
        lastName: ['',Validators.required],
        f_Firstname: ['',Validators.required],
        f_Middlename: ['',Validators.required],
        f_Lastname: ['',Validators.required],
        DOB: ['',Validators.required],
        number: ['',Validators.required],
        mail: ['',Validators.required],
        contact: ['',Validators.required],
        income: ['',Validators.required],
        address: ['',Validators.required]

      });
      this.secondFormGroup = this._formBuilder.group({
        course: ['',Validators.required],
        degree: ['',Validators.required],
        college: ['',Validators.required],
        passing: ['',Validators.required],
        percentage: ['',Validators.required],
      });

      this.thirdFormGroup = this._formBuilder.group({
        signiture: ['',Validators.required],
        parent_signiture: ['',Validators.required],
        pdate: ['',Validators.required],
        declare: [false, Validators.requiredTrue],
        photo: ['']
      });
    }

    fileChangeEvent(event:any) {
      console.log(this.thirdFormGroup.controls);
      console.log(event.target.files);
    }
    
    dataverify() {
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
      console.log(this.secondFormGroup.controls);

      this.firstFormData = {
        StudentId: this.firstFormGroup.controls['StudentId'].value,
        date: this.firstFormGroup.controls['date'].value,
        fisrtName: this.firstFormGroup.controls['fisrtName'].value,
        middleName: this.firstFormGroup.controls['middleName'].value,
        lastName: this.firstFormGroup.controls['lastName'].value,
        f_Firstname: this.firstFormGroup.controls['f_Firstname'].value,
        f_Middlename: this.firstFormGroup.controls['f_Middlename'].value,
        f_Lastname: this.firstFormGroup.controls['f_Lastname'].value,
        DOB: this.firstFormGroup.controls['DOB'].value,
        number: this.firstFormGroup.controls['number'].value,
        mail: this.firstFormGroup.controls['mail'].value,
        contact: this.firstFormGroup.controls['contact'].value,
        income: this.firstFormGroup.controls['income'].value,
        Address: this.firstFormGroup.controls['address'].value
      }
      this.secondFormData={
        course: this.secondFormGroup.controls['course'].value,
        degree: this.secondFormGroup.controls['degree'].value,
        college: this.secondFormGroup.controls['college'].value,
        passing: this.secondFormGroup.controls['passing'].value,
        percentage: this.secondFormGroup.controls['percentage'].value,
      }
      
      this.data = JSON.stringify(this.firstFormData);
      // console.log(this.firstFormData)
    }

  submit() {
    // console.log(this.firstFormGroup.controls['fisrtName'].value);
console.log("Registered Successfully");
    

  }
  
  isLinear = true;
}