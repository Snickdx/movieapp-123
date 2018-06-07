import { TestBed, async } from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserModule} from '@angular/platform-browser';
import {MatIconModule, MatInputModule} from '@angular/material';
import {MovieModalComponent} from './movie-modal/movie-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should retrieve movies`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.movies.length).toBeGreaterThan(0);
  // }));
});
