import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule, MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieModalComponent } from './movie-modal/movie-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: [MovieModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
