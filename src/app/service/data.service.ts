import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class dataService {

  selectedList = _.fill(new Array(21), undefined);
  class = undefined;
  room = undefined;

  constructor(private httpClient: HttpClient) {
  }

  reset() {
    this.selectedList = _.fill(new Array(21), undefined);
    this.class = undefined;
    this.room = undefined;
  }


  sendDataToBE(data) {
    return this.httpClient.post(environment.url, data, {responseType: 'text'});
  }

}
