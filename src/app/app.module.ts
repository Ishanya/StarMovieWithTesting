import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchModelComponent } from './search-model/search-model.component';
import { SearchListComponent } from './search-list/search-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { MovieServiceService } from './movie-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './auth.guard';

import { SingleMovieComponent } from './single-movie/single-movie.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyfavouriteComponent } from './myfavourite/myfavourite.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchModelComponent,
    SearchListComponent,
    FooterComponent,
    SingleMovieComponent,
    WelcomeComponent,
    MyfavouriteComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient,
    HttpClientModule,
    HttpClientTestingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule  ],
  providers: [AuthGuard, MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
