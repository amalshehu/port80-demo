import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';  // for debugging


@Injectable()
export class AppService {
  handleError(arg0: any): any {
    throw new Error('Method not implemented.');
  }

  constructor(private http: Http) { }
  search(link: any) {
   return this.http.request(link)
                    .map((res: any) => res.json())
                    .do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }
}
