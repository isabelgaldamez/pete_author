import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service'; //component needs to communicate to server
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
editThisAuthor = [];
authorUpdate = {
  name : ''
};
author = {
  name : '',
}
constructor(private _httpService : HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    
    this._route.params.subscribe((params: Params) => {
      console.log('-->', params.id, )
      this.getOneById(params.id);
    });
  }
  getOneById(id){
    let obs = this._httpService.getOneById(id);
    obs.subscribe( AuthorData => {
      console.log('data found : ', AuthorData['data'])
      this.editThisAuthor = AuthorData['data']
    })
  }
  editAuthor(id){
    console.log('edit author : ', id)
    console.log('edit author name: ', this.authorUpdate);
    let obs = this._httpService.updateRecord(id, this.authorUpdate);
    obs.subscribe(updatedData => {
      console.log('Data has been updated', updatedData);
      this._router.navigate(['/']);
    })

  }
  
}
