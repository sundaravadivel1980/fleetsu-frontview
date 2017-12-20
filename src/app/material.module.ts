import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatListModule, MatIconModule  } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatListModule, MatIconModule ],
  exports: [MatButtonModule, MatToolbarModule, MatListModule, MatIconModule ],
})
export class MaterialModule { }
