import { BrowserModule }    from '@angular/platform-browser'
import { NgModule }         from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'

import { AppCommonModule }  from './common/common.module'
import { UsersModule }      from './users/users.module'
import { AppComponent }     from './app.component'

@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [
    BrowserModule,
    AppCommonModule,
    HttpClientModule,
    UsersModule,
    AppRoutingModule
  ],
  providers : [ ],
  bootstrap : [
    AppComponent
  ]
})

export class AppModule { }