import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersComponent } from './customers/customers.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { ApiComponent } from './api/api.component';
import { MappingsComponent } from './api/mappings/mappings.component';
import { ProcessComponent } from './api/mappings/process/process.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ContactsComponent,
    LoginComponent,
    RegisterComponent,
    CustomersComponent,
    RequirementsComponent,
    ApiComponent,
    MappingsComponent,
    ProcessComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

