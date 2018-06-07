import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModalComponent } from './movie-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatDialog, MatDialogRef, MatDialogRef, MatIconModule, MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserModule} from '@angular/platform-browser';


describe('MovieModalComponent', () => {
    let component: MovieModalComponent;
    let fixture: ComponentFixture<MovieModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [ MovieModalComponent],
                imports:[
                    BrowserModule,
                    BrowserAnimationsModule,
                    MatToolbarModule,
                    MatTabsModule,
                    MatDialog,
                    MatTableModule,
                    MatDialogModule,
                    MatFormFieldModule,
                    FormsModule,
                    MatInputModule,
                    HttpClientModule,
                    MatIconModule
                ]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
