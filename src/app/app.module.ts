import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HttpService } from './http.service';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { QuestformComponent } from './questform/questform.component';
import { SuccpageComponent } from './succpage/succpage.component'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestformComponent,
    SuccpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutocompleteLibModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
