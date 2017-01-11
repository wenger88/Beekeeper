/**
 * Created by goran.pavlovski on 1/11/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {Hive} from "../shared/interfaces";
@Injectable()
export class HiveService{

    hivesUrl = 'http://localhost:3000/hives';
    hiveTypes = 'http://localhost:3000/hiveTypes';

    constructor(private http: Http){}

    getAllHives(): Observable<Hive[]>{
        return this.http.get(this.hivesUrl)
            .map((res:Response) => res.json())
            .catch(this.handleError)
    }

    getSingleHive(id: number): Observable<Hive>{
        return this.http.get(this.hivesUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    getAllHiveTypes(): Observable<Response[]>{
        return this.http.get(this.hiveTypes)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    addHive(body: Object): Observable<Hive>{
        let bodyString = JSON.stringify(body);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.hivesUrl, bodyString, options)
            .map((res: Response)=> <Hive>res.json())
            .catch(this.handleError)

    }


    private handleError(error: Response){
        return Observable.throw(error || 'Server error');
    }

}