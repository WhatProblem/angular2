import { Injectable } from '@angular/core';
import 'rxjs/add/operator/retry';
import { HttpClient } from '@angular/common/http';




interface ItemsResponse {
    results: string[];
}



@Injectable()
export class GetJsonDataService {
    public results;
    constructor(private http: HttpClient) { }


    getJsonData() {
        this.http.get<ItemsResponse>('assets/data.json').subscribe(data => {
            // data is now an instance of type ItemsResponse, so you can do this:
            let localData = { 'first': data.results };
            this.results = localData;
            return { 'first': data.results };
        });
    }
}
