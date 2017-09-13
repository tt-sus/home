import { Component } from '@angular/core';
import * as _ from 'underscore';
import { GdriveService } from './gdrive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  projects: any[]=[];
  info: Array<any>;
  dataId: string;
  title = 'app';
  constructor( private gDrive: GdriveService ) {
    this.dataId = '1aUxCOcC5mRkpFkRcF1qhEuzNCVtfRyOw6eiga0FuyfI';
    gDrive.load( this.dataId )
      .then( ( data ) => {
        console.log( data );
        this.info = data;
        let n=3;
        let lists = _.groupBy(data, function(element, index){
          return Math.floor(index/n);
        });
        lists = _.toArray(lists); 
        this.projects=[];//Added this to convert the returned object to an array.
           lists.forEach((element,i )=> {
             let projectObj={name:element[0].$t,link:element[1].$t,url:element[2].$t};
             this.projects.push(projectObj)           
           });
            console.log(this.projects)
      }, (error) => {
        console.log( error );
      });
  }
}
