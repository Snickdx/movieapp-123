///<reference path="../../node_modules/@angular/core/src/di/metadata.d.ts"/>
///<reference path="../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material"
import {DataLayer} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataLayer],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns = ['id', 'title', 'genre', 'rating', 'cost'];
  dataSource:any;
  newtitle: string;
  newgenre: string;
  newrating: string;
  newcost: string;
  data: any;
  bigID: number;
  values:string = "";
  searchResults: string[];

  MOVIES: MovieElement[];

  constructor(
    public dialog: MatDialog,
    public dataLayer: DataLayer,
    )
  {}

  onKey(value: string) {
    this.searchResults = [];
    this.MOVIES.forEach(each_obj => {
      if (each_obj.title == undefined) console.log("undefined object")
      else {
        if (each_obj.title.includes(value)) {
          this.searchResults.push(each_obj.title);
        }
      }

    })

  }

  ngOnInit() {
    this.dataLayer.getMovies().subscribe((fetchedMovies:MovieElement[]) => {
      console.log(fetchedMovies);
      this.MOVIES = fetchedMovies;
      this.dataSource = fetchedMovies;
      this.bigID = fetchedMovies.length + 1;
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddMovieComponent, {
      width: '300px',
      height: '65%',
      data: {
        title: this.newtitle,
        genre: this.newgenre,
        rating: this.newrating,
        cost: this.newcost
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == undefined) { console.log ("No data submitted..."); } // Empty form
      else {


        result.id = this.bigID;
        this.MOVIES.push(result);
        this.dataLayer.postMovie(result).subscribe(data => this.MOVIES.push(data));
      }

    });
  }

}

export interface MovieElement {
  id: number,
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
  selector: 'add-movie',
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

  onSubmit() {
    console.log("submitted...");
  }

}

