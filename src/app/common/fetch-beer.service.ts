import { Injectable } from '@angular/core';
import { HttpClient , HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchBeerService {

  readonly beerapiUrl = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json";
  readonly imageapiUrl = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json";
  beers : any[];
  images : any[];

  constructor(private http : HttpClient) { }

  getAllBeers(){
    //to fetch all beers on the page load
    return this.http.get(this.beerapiUrl);
  }
  
  getAllImages(){
    return this.http.get(this.imageapiUrl);
  }
}
