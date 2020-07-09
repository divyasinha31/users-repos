import { NgModule }             from '@angular/core'
import { Routes,
         RouterModule
       }                        from '@angular/router'
import { UserInfoComponent }    from './users/user-info/user-info.component'
import { ReposOfUserComponent } from './users/repos-of-user/repos-of-user.component'
import { PATHS }                from './constants'

const routes: Routes = [
  {
    path        : '',
    redirectTo  : 'users',
    pathMatch   : 'full'
  },
  {
    path      : PATHS.USERS,
    component : UserInfoComponent
  },
  {
    path      : PATHS.REPOS,
    component : ReposOfUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }