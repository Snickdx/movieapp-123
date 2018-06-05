///<reference path="../../node_modules/@angular/core/src/di/metadata.d.ts"/>
///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {DataLayer} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataLayer],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns = ['id', 'title', 'genre', 'rating', 'cost'];
  dataSource: any;
  newtitle: string;
  newgenre: string;
  newrating: string;
  newcost: string;
  bigID: number;
  searchResults: string[];

  MOVIES: MovieElement[];

  constructor(
    public dialog: MatDialog,
    public dataLayer: DataLayer,
    ) {}

  onKey(value: string) {
    this.searchResults = [];
    this.MOVIES.forEach(each_obj => {
      if (each_obj.title === undefined) { console.log('undefined object'); }
      else {
        if (each_obj.title.includes(value)) {
          this.searchResults.push(each_obj.title);
        }
      }
    });

  }

  ngOnInit() {
    this.dataLayer.getMovies().subscribe((fetchedMovies: MovieElement[]) => {
      console.log(fetchedMovies);
      this.MOVIES = fetchedMovies;
      this.dataSource = fetchedMovies;
      this.bigID = fetchedMovies.length + 1;
    });
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      width: '300px',
      data: {
        title: this.newtitle,
        genre: this.newgenre,
        rating: this.newrating,
        cost: this.newcost
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === undefined) { console.log ('No data submitted...'); } // Empty form
      else {
        result.id = this.bigID;
        this.dataSource.push(result);
        this.dataLayer.postMovie(result).subscribe(data => {
            this.dataSource.push(data);
            this.dataLayer.getMovies().subscribe((fetchedMovies: MovieElement[]) => {
                console.log(fetchedMovies);
                this.MOVIES = fetchedMovies;
                this.dataSource = fetchedMovies;
                this.bigID = fetchedMovies.length + 1;
            });
        });
      }

    });
  }

}

export interface MovieElement {
  id: number;
  title: string;
  genre: string;
  rating: number;
  cost: number;
}
//
// const MOVIES:MovieElement[] = [
//   {id: 1, title: "something", genre: "action", rating: 10, cost: 40 },
//   {id: 2, title: "something", genre: "action", rating: 10, cost: 40 },
//   {id: 3, title: "something", genre: "action", rating: 10, cost: 40 },
//   {id: 4, title: "something", genre: "action", rating: 10, cost: 40},
//   {id: 5, title: "something", genre: "action", rating: 10, cost: 40},
//   {id: 6, title: "something", genre: "action", rating: 10, cost: 40},
// ]

@Component({
  selector: 'app-add-movie',
  templateUrl: 'add-movie.html',
})
export class AddMovieComponent {

    constructor(
        public dialogRef: MatDialogRef<AddMovieComponent>,
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

