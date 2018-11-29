import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovieComponent } from './single-movie.component';



import { AppComponent } from '../app.component';
import { SearchModelComponent } from '../search-model/search-model.component';
import { SearchListComponent } from '../search-list/search-list.component';

import { WelcomeComponent } from '../welcome/welcome.component';
import { MyfavouriteComponent } from '../myfavourite/myfavourite.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from '../auth.guard';
import { MovieServiceService } from '../movie-service.service';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('SingleMovieComponent', () => {
  let component: SingleMovieComponent;
  let fixture: ComponentFixture<SingleMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      imports:[ReactiveFormsModule,
        BrowserModule,
        HttpClientTestingModule,
       CommonModule,
        FormsModule,RouterModule,RouterTestingModule],
      providers: [AuthGuard, MovieServiceService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
