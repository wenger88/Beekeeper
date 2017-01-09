/**
 * Created by goran.pavlovski on 1/9/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Apiary, Hive} from "../../shared/interfaces";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class DataService{

    apiaryUrl = 'http://localhost:3000/apiaries';
    hivesUrl = 'http://localhost:3000/hives';
    hiveTypes = 'http://localhost:3000/hiveTypes';

    constructor(private http: Http){}

    getAllApiaries(): Observable<Apiary[]>{

        return this.http.get(this.apiaryUrl)
            .map((res:Response) => res.json())
            .catch(this.handleError)

    }

    addApiary(body: Object): Observable<Apiary>{
        let bodyString = JSON.stringify(body);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.apiaryUrl, bodyString, options)
            .map((res: Response)=> <Apiary>res.json())
            .catch(this.handleError)

    }

    getApiaryHives(id: number): Observable<Hive[]>{
        return this.http.get(`${this.apiaryUrl}/${id}/hives`)
            .map((res:Response) => res.json())
            .catch(this.handleError)
    }

    getAllHives(): Observable<Hive[]>{
        return this.http.get(this.hivesUrl)
            .map((res:Response) => res.json())
            .catch(this.handleError)
    }

    getSingleApiary(id: number): Observable<Apiary>{
        return this.http.get(this.apiaryUrl + '/' + id)
            .map((res: Response) => res.json())
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