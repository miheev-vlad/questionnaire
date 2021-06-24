import { Component, OnInit } from '@angular/core';

// interface suggsInterface {
//   value: string;
//   unrestricted_value: string;
//   data: Object;
// }

// const suggsArr: suggsInterface[] = [
//   {
//     value: "Павел1", unrestricted_value: "Павел", data: {}
//   },
//   {
//     value: "Павел2", unrestricted_value: "Павел", data: {}
//   },
//   {
//     value: "Павел3", unrestricted_value: "Павел", data: {}
//   }
// ]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }


  // public suggs = [] as any;
  // public topics = [] as any;
  // get firstName() {
  //   return this.questionnaireForm.get('firstName');
  // }
  // get subscribe() {
  //   return this.questionnaireForm.get('subscribe');
  // }
  // get email() {
  //   return this.questionnaireForm.get('email');
  // }
  // get interested() {
  //   return this.questionnaireForm.get('interested');
  // }
  // constructor(private fb: FormBuilder, private _http: HttpService, private router: Router) { }
  // ngOnInit() {
  //   this._http.getRF()
  //     .subscribe(data => this.topics = data);
  // }
  // questionnaireForm = this.fb.group({
  //   firstName: ['', [Validators.required, Validators.minLength(3), forbiddenFirstNameValidator]],
  //   email: ['', [Validators.maxLength(20), Validators.pattern(/[а-яА-ЯёЁ]/)]],
  //   subscribe: [false, Validators.requiredTrue],
  //   patronymic: [''],
  //   lastName: [''],
  //   userName: [''],
  //   password: [''],
  //   interested: ['Need', forbiddenSelValidator]
  // });
  // onSubmit() {
    // this._http.getApiData().then((response) => {
    //   response.json().then((data) => {
    //     console.log(data);
    //   });
    // }).catch();
  //   console.log(JSON.stringify(this.questionnaireForm.value));
  //   this.questionnaireForm.setValue({
  //     firstName: '',
  //     email: '',
  //     subscribe: false,
  //     patronymic: '',
  //     lastName: '',
  //     userName: '',
  //     password: '',
  //     interested: 'Need'
  //   })
  //   this.router.navigateByUrl('/succpage');
  // }
  // getSearchName() {
  //   this._http.getApiData(this.questionnaireForm.get('email')?.value)
  //     .subscribe(data => {
  //       console.log(this.suggs);
  //       this.suggs = data;
  //       console.log(this.suggs);
        
  //     });
    // this._http.getApiData(this.questionnaireForm.get('email')?.value).then((response) => {
    //   response.json().then((data) => {
    //     console.log(data);
    //   });
    // }).catch();
  // }
}
