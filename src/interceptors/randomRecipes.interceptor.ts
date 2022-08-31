import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { EMPTY, Observable, of, retryWhen } from 'rxjs';
import {randomRecipesMocks} from '../../mocks/tsMocks/randomRecipes.mocks'

@Injectable()
export class RandomRecipesInterceptor implements HttpInterceptor {

  // constructor(private injector: Injector)

  intercept(req: HttpRequest<any>, next : HttpHandler ): Observable<HttpEvent<any>> {
    if(req.method === "GET" && req.url === "http://localhost:4200/randomRecipes") {
      console.log('intercepted')
      return of(new HttpResponse({status:200, body: randomRecipesMocks}))
    }
    next.handle(req)
    return new Observable()
  }
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //     return  req.urlWithParams.includes("random-recipes") ? EMPTY : next.handle(req)
  // }
}




