import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; //component needs to communicate to server

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  allAuthors = [];
  constructor(private _httpService : HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.findAuthors()
  }
  findAuthors(){
    // console.log('all authors...');
    let observable = this._httpService.findAllAuthors();
    observable.subscribe( AuthorData => {
      console.log('all authors have been found successfully', AuthorData);
      this.allAuthors = AuthorData['data'];
    })
  }
  
  deleteRecord(id){
   console.log('delete this record' + id);
   let observable = this._httpService.deleteRecord(id);
   observable.subscribe(deletedData => {
     console.log('record has been deleted');
     this.findAuthors();
    //  this._router.navigate(['/showAll']);
   });

  }
}
