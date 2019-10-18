import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  constructor (private _httpService : HttpService){}

// getAll(){
//   let observable = this._httpService.getAll();
//   observable.subscribe(data => {
//     console.log('All authors were successfully retrieved');
//     for(let x in data[Symbol.iterator]()){
      
//     }
//   })
// }

}
