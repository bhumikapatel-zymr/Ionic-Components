import { Injectable } from '@angular/core';
import { Http, Response ,HttpModule,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Alert} from 'ionic-angular';
import { IUserDetail } from '../model/userdetail';
import 'rxjs/add/operator/catch';

/*

  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PeopleServiceProvider {

  constructor(public http: Http) {
    console.log('Hello PeopleServiceProvider Provider');
  }
  getIPAddress(): Observable <IUserDetail[]> {
      /*return new Promise(resolve => {
        this.http.get('https://randomuser.me/api/')
        .subscribe(data => {
          resolve(<IUserDetail[]>data.json());
        });
      });*/

      return this.http.get('https://randomuser.me/api/')
              .map((response:Response) => <IUserDetail[]>response.json().results)
               .catch(this.catchError);
    }

    catchError(error:Response){
      return Observable.throw(error.json().error || 'Server error');
    }

    makePostRequest(strname) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = new FormData();
    body.append('firstname', strname);
    console.log(body);
    console.log(headers);
     return this.http.post('https://httpbin.org/post' , body,headers)
      .map(res => res.json()
    );

}
}
