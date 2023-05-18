import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { HttpClientModule } from '@angular/common/http';
import { userService } from 'src/Services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LocalStorageService, LOCAL_STORAGE, localStorageProvider } from 'src/Services/localStorage.service';
import { ComponentComunicationService } from 'src/Services/comunication.service';
import { AuthService } from 'src/Services/auth.service';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AlumnosComponent,
    LoginComponent,
    ProfesoresComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    userService,
    { provide: LOCAL_STORAGE, useValue: localStorage },
    ComponentComunicationService,
    localStorageProvider,
    LocalStorageService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
