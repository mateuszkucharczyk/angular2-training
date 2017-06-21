import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

// ng g m contact
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
