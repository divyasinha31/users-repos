// Component to show the repository of a particular user

import { Component,
         OnInit
       }                      from '@angular/core'
import { UsersReposService }  from './../../services'
import { Repo,
         GetRepos,
         SearchRepo
       }                      from './../../constants'
import { ListHeadParams,
         ListHeadOutput
       }                      from 'src/app/common/list-head/list-head.component'
import { ActivatedRoute }     from '@angular/router'

export interface ReposOfUserParams {
  userId  : string
  repoUrl : string
}

@Component({
  selector    : 'app-repos-of-user',
  templateUrl : './repos-of-user.component.html',
  styleUrls   : ['./repos-of-user.component.scss']
})

export class ReposOfUserComponent implements OnInit {

  userId        : string
  repoUrl       : string
  listHeadParam : ListHeadParams  = { } as ListHeadParams
  repos         : Repo[]          = [ ]
  error         : boolean         = false

  constructor(private urServ  : UsersReposService,
              private route   : ActivatedRoute) {

    this.route.queryParams.subscribe((params : ReposOfUserParams) => {
      this.repoUrl  = params.repoUrl
      this.userId   = params.userId
    })
  }

  ngOnInit() : void {
    this.listHeadParam = {
      searchPlaceHolder : 'Search Repo...',
      perPage           : 50,
      isFirst           : true,
      currentCount      : 50
    }

    this.getRepos()
  }

  private async getRepos(startFrom : number = 0) {
    const params : GetRepos.params = {
      repoUrl : this.repoUrl
    }

    this.listHeadParam = {...this.listHeadParam}
    this.listHeadParam.currentCount = startFrom
    this.listHeadParam.isFirst = startFrom === 0

    this.urServ.getRepos(params)
      .subscribe((data : any) => {
        this.repos = data
      })
  }

  private async searchRepo(searchItem : string) {
    const params : SearchRepo.params = {
      ownerId   : this.userId,
      repoName  : searchItem
    }

    this.repos        = [...this.repos]
    this.repos.length = 0

    this.urServ.searchRepo(params)
      .subscribe((data : any) => {
        this.repos.push(data)
      },
      (error : any) => {
        this.error = true
      })
  }

  getDataForAction(event : ListHeadOutput) {
    if (event.searchItem) {
      this.searchRepo(event.searchItem)
      return
    }

    this.getRepos(event.startFrom)
  }
}