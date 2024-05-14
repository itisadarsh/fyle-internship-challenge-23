import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from './common/loader/loader.component';
import { ErrorComponent } from './core/components/error/error.component';
import { UserInfoComponent } from './core/components/user-info/user-info.component';
import { RepositoryListComponent } from './core/components/repository-list/repository-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ErrorComponent,
   
    UserInfoComponent,

    RepositoryListComponent
  ],
  imports: [
    BrowserModule,
   
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
