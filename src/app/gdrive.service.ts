import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GdriveService {

  data: any = null;

  constructor(public http: Http) { }

  load(id) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    var url = 'https://spreadsheets.google.com/feeds/cells/' + id + '/1/public/values?alt=json';
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map(res => {
          // console.log(res)
          return res.json()
        })
        .subscribe(data => {
          console.log('Raw Data', data);
          this.data = data.feed.entry;
          let returnArray: Array<any> = [];
          for (let i = 4; i < this.data.length; i++) {
            returnArray.push(this.data[i].content)
          }
          resolve(returnArray);
        });
    });
  }

}
