import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {MovieService} from './movie.service';
import {MovieModalComponent} from './movie-modal/movie-modal.component';

export interface MovieElement {
    id: number;
    title: string;
    genre: string;
    rating: number;
    cost: number;
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [MovieService],
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    displayedColumns = ['id', 'title', 'genre', 'rating', 'cost'];
    dataSource: any;
    searchResults: string[];
    movies: MovieElement[];

    constructor(
        public dialog: MatDialog,
        public dataLayer: MovieService,
    ) {}

    onKey(value: string) {
        this.searchResults = [];
        this.movies.forEach(each_obj => {
            if (each_obj.title === undefined) {
                console.log('undefined object');
            } else {
                if (each_obj.title.includes(value)) {
                    this.searchResults.push(each_obj.title);
                }
            }
        });

    }

    ngOnInit() {
        this.dataLayer.getMovies().subscribe((fetchedMovies: MovieElement[]) => {
            console.log(fetchedMovies);
            this.movies = fetchedMovies;
            this.dataSource = fetchedMovies;
        });
    }



    openDialog(): void {
        const dialogRef = this.dialog.open(MovieModalComponent, {
            width: '300px',
            data: {
                title: "",
                genre: "",
                rating: "",
                cost: ""
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result === undefined) { console.log ('No data submitted...'); } // Empty form
            else {
                this.dataSource.push(result);
                this.dataLayer.postMovie(result).subscribe(data => {
                    this.dataSource.push(data);
                    this.dataLayer.getMovies().subscribe((fetchedMovies: MovieElement[]) => {
                        console.log(fetchedMovies);
                        this.movies = fetchedMovies;
                        this.dataSource = fetchedMovies;
                    });
                });
            }

        });
    }

}
