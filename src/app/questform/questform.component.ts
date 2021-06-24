import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questform',
  templateUrl: './questform.component.html',
  styleUrls: ['./questform.component.css']
})
export class QuestformComponent implements OnInit {
  public suggs = [] as any;
  public rfReg = [] as any;
  get lastName() {
    return this.questionnaireForm.get('lastName');
  }
  get userName() {
    return this.questionnaireForm.get('userName');
  }
  get patronymic() {
    return this.questionnaireForm.get('patronymic');
  }
  get login() {
    return this.questionnaireForm.get('login');
  }
  get phone() {
    return this.questionnaireForm.get('phone');
  }
  get email() {
    return this.questionnaireForm.get('email');
  }
  get subscribe() {
    return this.questionnaireForm.get('subscribe');
  }
  constructor(private fb: FormBuilder, private _http: HttpService, private router: Router) { }
  ngOnInit() {
    this._http.getRF()
      .subscribe(data => this.rfReg = data);
  }
  questionnaireForm = this.fb.group({
    lastName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/[а-яА-ЯёЁ]/)]],
    userName: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/[а-яА-ЯёЁ]/)]],
    patronymic: ['', [Validators.maxLength(50), Validators.pattern(/[а-яА-ЯёЁ]/)]],
    login: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/[a-zA-Z]/)]],
    region: [''],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i)]],
    subscribe: [false, Validators.requiredTrue]
  });
  onSubmit() {
    console.log(JSON.stringify(this.questionnaireForm.value));
    this.router.navigateByUrl('/succpage');
    this.questionnaireForm.setValue({
      lastName: '',
      userName: '',
      patronymic: '',
      login: '',
      region: '',
      phone: '',
      email: '',
      subscribe: false
    })
  }
  getSearchLastName() {
    this._http.getApiData(this.questionnaireForm.get('lastName')?.value)
      .subscribe(data => {
        this.suggs = data;
      });
  }
  getSearchUserName() {
    this._http.getApiData(this.questionnaireForm.get('userName')?.value)
      .subscribe(data => {
        this.suggs = data;
      });
  }
  getSearchPatronymic() {
    this._http.getApiData(this.questionnaireForm.get('patronymic')?.value)
      .subscribe(data => {
        this.suggs = data;
      });
  }
}
