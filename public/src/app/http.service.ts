import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) { }
  createNewAuthor(authorData){
    console.log('service -> ',authorData );
    return this._http.post('/author', authorData);
  }
  findAllAuthors(){
    console.log('find all authors');
    return this._http.get('/allAuthors');
  }
  getOneById(id){
    console.log('find by id', id);
    return this._http.get(`/getById/${id}`);
  }
  updateRecord(id, updateInfo){
    console.log('update record -> ', id);
    return this._http.put(`/updateAuthor/${id}`, updateInfo);
  }
  deleteRecord(id){
    console.log('delete this record' + id);
    return this._http.delete(`/delete/${id}`);
  }
}
