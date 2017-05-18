// Observable Version
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Hotspot } from './hotspot';

@Injectable()
export class HotspotService {
  private jsonFileURL: string = 'app/hotspots.json';
  hotspots: Hotspot[];
  constructor(private http: Http) {
    this.http.get(this.jsonFileURL).subscribe(res => this.hotspots = <Hotspot[]>res.json());
  }

  getHotspots(): Observable< Hotspot[] > {
    return this.http.get(this.jsonFileURL)
      .map(this.exactData)
      .catch(this.handleError);
  }

  private exactData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
