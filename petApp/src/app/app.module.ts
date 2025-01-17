import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives here
import { MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { OwnersComponent } from './owners/owners/owners.component';
import { PetsComponent } from './pets/pets/pets.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { RegisterComponent } from './register/register.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AddPetComponent } from './pets/add-pet/add-pet.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DeletePetComponent } from './pets/delete-pet/delete-pet/delete-pet.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    OwnersComponent,
    PetsComponent,
    SettingsComponent,
    RegisterComponent,
    AddPetComponent,
    DeletePetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgbModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule

  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddPetComponent,
    DeletePetComponent
  ]
})
export class AppModule { }
