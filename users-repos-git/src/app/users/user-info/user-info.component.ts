// Component to display all github users

import { Component,
         OnInit
       }                      from '@angular/core'
import { UsersReposService }  from './../../services'
import { ReposOfUserParams }  from '../repos-of-user/repos-of-user.component'
import { User,
         GetUsers,
         PATHS,
         SearchUser
       }                      from './../../constants'
import { ListHeadParams,
         ListHeadOutput
       }                      from 'src/app/common/list-head/list-head.component'
import { Router }             from '@angular/router'

@Component({
  selector    : 'app-user-info',
  templateUrl : './user-info.component.html',
  styleUrls   : ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {

  listHeadParam : ListHeadParams  = { } as ListHeadParams
  users         : User[]          = [ ]
  error         : boolean         = false

  constructor(private urServ : UsersReposService,
              private router : Router) { }

  ngOnInit() : void {
    this.listHeadParam = {
      searchPlaceHolder : 'Search User...',
      perPage           : 50,
      isFirst           : true,
      currentCount      : 50
    }

    this.getUsers()
  }

  private getUsers(startFrom : number = 0) {
    const params : GetUsers.params = {
      countFrom : startFrom,
      perPage   : 50
    }

    this.listHeadParam = {...this.listHeadParam}
    this.listHeadParam.currentCount = startFrom
    this.listHeadParam.isFirst = startFrom === 0

    this.urServ.getUsers(params)
      .subscribe((data : any) => {
        this.users = data
      })
  }

  private searchUser(searchItem : string) {
    const params : SearchUser.params = {
      userId : searchItem
    }

    this.users        = [...this.users]
    this.users.length = 0

    this.urServ.searchUser(params)
      .subscribe((data : any) => {
        this.users.push(data)
      },
      (error : any) => {
        this.error = true
      })
  }

  getDataForAction(event : ListHeadOutput) {
    if (event.searchItem) {
      this.searchUser(event.searchItem)
      return
    }

    this.getUsers(event.startFrom)
  }

  getReposForUser(user : any) {
    const params : ReposOfUserParams = {
      userId  : user.login,
      repoUrl : user.repos_url
    }

    this.router.navigate([PATHS.REPOS], { queryParams : params })
  }

}