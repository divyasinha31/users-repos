import { NgModule }             from '@angular/core'
import { CommonModule }         from '@angular/common'
import { ReactiveFormsModule }  from '@angular/forms'
import { ListHeadComponent }    from './list-head/list-head.component'

@NgModule({
  declarations : [
    ListHeadComponent
  ],
  imports : [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [
    ListHeadComponent
  ]
})

export class AppCommonModule { }