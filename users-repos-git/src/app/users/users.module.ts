import { NgModule }             from '@angular/core'
import { CommonModule }         from '@angular/common'
import { AppCommonModule }      from '../common/common.module'
import { UserInfoComponent }    from './user-info/user-info.component'
import { ReposOfUserComponent } from './repos-of-user/repos-of-user.component'

@NgModule({
  declarations: [
    UserInfoComponent,
    ReposOfUserComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ]
})

export class UsersModule { }