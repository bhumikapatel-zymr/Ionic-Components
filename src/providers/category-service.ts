import { Injectable } from '@angular/core';
import { Http,Response ,HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ICategory } from '../model/category';
import 'rxjs/add/operator/catch';


@Injectable()
export class CategoryService {

  constructor(public http: Http) {

  }

  getCategories(): Observable<ICategory[]>{

    return this.http.get('assets/data/data.json')
            .map((response:Response) => <ICategory[]>response.json().results)
             .catch(this.catchError);
  }

  catchError(error:Response){
    return Observable.throw(error.json().error || 'Server error');
  }

}
