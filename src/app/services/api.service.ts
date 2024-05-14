import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import {environment} from '../environments/env'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    try {
      const user=JSON.parse(sessionStorage.getItem(githubUsername)!);

      if(!user){
        console.log('Cache miss');
        return this.httpClient.get(`${environment.baseUrl}/users/${githubUsername}`).pipe(
          tap((data:any)=>{
            sessionStorage.setItem(githubUsername,JSON.stringify(data))
          })
        );
  
      }
      console.log('cache hit')
      return of(JSON.parse(sessionStorage.getItem(githubUsername)!));
      
      
    } catch (err) {
      // return ;
      console.log("Error at user")
      throw new Error("Error at user")
    }
  
  }

  getRepos(githubUsername:string,per_page:number,curr_page:number){

    try {
      const repo=JSON.parse(sessionStorage.getItem(githubUsername+'repo'+per_page+'curr'+curr_page)!);

      if(!repo){
        console.log('Cache miss');
        return this.httpClient.get(`${environment.baseUrl}/users/${githubUsername}/repos?per_page=${per_page}&page=${curr_page}`).pipe(
          tap((data:any)=>{
            sessionStorage.setItem(githubUsername+'repo'+per_page+'curr'+curr_page,JSON.stringify(data))
          })
        );
  
      }
      console.log('cache hit')
      return of(JSON.parse(sessionStorage.getItem(githubUsername+'repo'+per_page+'curr'+curr_page)!));
  
  
  
  
    } catch (err) {
      console.log("Error at repo")
        throw new Error("Error at repo")
        // return ;
    }
   
    // return
  }

  getLanguages(githubUsername:string,project:string){

    const repo=JSON.parse(sessionStorage.getItem(githubUsername+project)!);

    if(!repo){
      console.log('Cache miss');
      return  this.httpClient.get(`${environment.baseUrl}/repos/${githubUsername}/${project}/languages`).pipe(
        tap((data:any)=>{
          sessionStorage.setItem(githubUsername+project,JSON.stringify(data))
        })
      );

    }
    console.log('cache hit')
    return of(JSON.parse(sessionStorage.getItem(githubUsername+project)!));

   
    
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
