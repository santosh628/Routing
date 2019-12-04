import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { ApiComponent } from './api/api.component';
import { MappingsComponent } from './api/mappings/mappings.component';
import { ProcessComponent } from './api/mappings/process/process.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'requirements', component: RequirementsComponent },
  { path: 'api', component: ApiComponent },
  { path: 'api/mappings', component: MappingsComponent },
  { path: 'api/mappings/process', component: ProcessComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
