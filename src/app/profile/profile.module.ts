import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { IntroComponent } from '../intro/intro.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
    
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    IntroComponent,
    FooterComponent
  
  ],
  providers: []
})
export class ProfileModule { }