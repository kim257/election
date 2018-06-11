import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { SuccessComponent } from './components/success/success.component';
import { FormsModule } from "@angular/forms";
import { dataService } from "./service/data.service";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'detail', component: DetailComponent
  },
  {
    path: 'success', component: SuccessComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
