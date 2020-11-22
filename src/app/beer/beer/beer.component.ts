import { Component, OnInit } from '@angular/core';
import { FetchBeerService } from 'src/app/common/fetch-beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor( private getBeer : FetchBeerService) { }
  allBeers : Object;
  allImages : Object;
  ngOnInit() {
    this.getAllBeers();
    this.getAllBeerImages();
  }

  getAllBeers() {
    this.getBeer.getAllBeers().subscribe(
      response => {this.allBeers = response }
    );
  }

  getAllBeerImages() {
    this.getBeer.getAllImages().subscribe(
      response => { this.allImages = response }
    );
  }

}
