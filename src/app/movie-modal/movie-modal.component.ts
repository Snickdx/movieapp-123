import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-movie-modal',
    templateUrl: './movie-modal.component.html',
    styleUrls: ['./movie-modal.component.css']
})
export class MovieModalComponent {

    constructor(
        public dialogRef: MatDialogRef<MovieModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(data: any) {
        console.log('submitted...');
        console.log(data);
        if ((data.title !== undefined) && (data.genre !== undefined) &&
            (data.rating !== undefined) && (data.cost !== undefined)) {
            this.dialogRef.close(data);
        } else {
            this.dialogRef.close(undefined);
        }

    }

}

