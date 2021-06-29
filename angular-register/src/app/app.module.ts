import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './auth/register/register.component';
import { MenuComponent } from './core/menu/menu.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { UserListComponent } from './body/users/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
