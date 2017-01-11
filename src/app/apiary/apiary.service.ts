/**
 * Created by goran.pavlovski on 1/11/2017.
 */


import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Apiary, Hive} from "../shared/interfaces";
@Injectable()
export class ApiaryService{

    apiaryUrl = 'http://localhost:3000/apiaries';

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

    getSingleApiary(id: number): Observable<Apiary>{
        return this.http.get(this.apiaryUrl + '/' + id)
            .map((res: Response) => res.json())
            .catch(this.handleError)
    }

    getApiaryHives(id: number): Observable<Hive[]>{
        return this.http.get(`${this.apiaryUrl}/${id}/hives`)
            .map((res:Response) => res.json())
            .catch(this.handleError)
    }

    private handleError(error: Response){
        return Observable.throw(error || 'Server error');
    }


}