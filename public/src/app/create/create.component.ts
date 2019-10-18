import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  authorName : {
    name : ''
  };
  constructor( private _httpService : HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.authorName = {
      name : ''
    }
  }
  createAuthor(){
    console.log('---->', this.authorName.name);
    let observable = this._httpService.createNewAuthor(this.authorName);
    observable.subscribe(data => {
      console.log('create ts', data);
    })
    this._router.navigate(['/']);
  }
}
