import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{
  public title = 'fyle-frontend-challenge';
  public repos:any=[]
  public user:any={}
  public no_of_repos:number=0
  public totalRepo:number=0
  public repolink:string=""
  public languages:any=[];
  public searchName: string = '';
  public perPageRepo:any=10;
  public current_page:number=1
  public visibility:boolean=false;
  public searched:boolean=false;
  public info_fetched:boolean=false;
  public error:boolean=false;


onChange(event:any){

  const newval=event.target as HTMLInputElement;
 
  if(newval.name=="search"){
  this.searchName=newval.value}

  if(newval.name=="option"){
  this.perPageRepo=parseInt(newval.value)


  const repoCount:any = Math.ceil(this.totalRepo / this.perPageRepo);
  const repoCountString = repoCount.toString();
  const repoCountInteger = parseInt(repoCountString);
  this.no_of_repos = repoCountInteger;

  this.fetchRepo(this.perPageRepo,1);
}
}

 

  constructor(
    private apiService: ApiService
  ) {}
  
 

  ngOnInit():void {
    
  }

  getRange(n: number): any[] {
    return Array(n).fill(0);
  }


  search(){
 
    this.languages=[];
    this.visibility=false;
    this.searched=true;
    this.error=false;
    this.info_fetched=false;

  
   
    try {
     
      this.apiService.getUser(this.searchName).subscribe(
       
        (res:any)=>{
    
        if(!res){
          this.error=true;
          return
        }
  
        this.user=res;
        this.visibility=true;
        this.searched=false;
        
        this.repolink=res.repos_url;
        this.totalRepo=res.public_repos
        console.log(res.public_repos/this.perPageRepo)
  
        const repoCount:any = Math.ceil(this.totalRepo / this.perPageRepo);
        const repoCountString = repoCount.toString();
        const repoCountInteger = parseInt(repoCountString);
        this.no_of_repos = repoCountInteger;
        this.fetchRepo(this.perPageRepo,1)
  
      },
    (err: any) => {
        if (err.status === 404) {
          this.error = true;
        }
      }
    
    );
      
    } 
    catch (err) {
            console.log("error occurred at fetching user details")
      
    }

  }



  fetchRepo(per_page_repo:number,curr_page:number){
 
    let pages_to_fetch:number=Math.min(per_page_repo,this.totalRepo)
    console.log(pages_to_fetch)
    this.error=false;
    this.info_fetched=false;
    try {
      this.apiService.getRepos(this.searchName,pages_to_fetch,curr_page).subscribe((res:any)=>{
        this.repos=res
        console.log(res)
  
        this.repos.forEach((item:any)=>{
          this.apiService.getLanguages(item.owner.login,item.name).subscribe((langres:any)=>{
              
              const alreadyExists = this.languages.some((lang:any) => lang.owner.login === item.owner.login && lang.name === item.name);
              if (!alreadyExists) {
                const repoWithLang = { ...item, language: Object.keys(langres) };
                this.languages.push(repoWithLang);
              }
          })
         });
         this.info_fetched=true;
      })
    
     
    } catch (err) {
      console.log("error occurred at fetching repo details")

      this.error=true;
      this.info_fetched=true;
    }
   
   
 }
  
}
