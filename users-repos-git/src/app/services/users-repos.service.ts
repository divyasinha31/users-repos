// Service to make api calls

import { Injectable }   from '@angular/core'
import { HttpClient }   from '@angular/common/http'
import { GetUsers,
         GetRepos,
         SearchUser,
         SearchRepo
       }                from '../constants'
import { Observable }   from 'rxjs'

const LIST_USER_API   = 'https://api.github.com/users'
const SEARCH_REPO_API = 'https://api.github.com/repos'

@Injectable({
  providedIn: 'root'
})

export class UsersReposService {

  constructor(private http :  HttpClient) { }

  getUsers(params : GetUsers.params) : Observable<any> {
    return this.http.get<any>(`${LIST_USER_API}?since=${params.countFrom}&per_page=${params.perPage}`)
  }

  getRepos(params : GetRepos.params) : Observable<any> {
    return this.http.get<any>(params.repoUrl)
  }

  searchUser(params : SearchUser.params) : Observable<any> {
    return this.http.get<any>(`${LIST_USER_API}/${params.userId}`)
  }

  searchRepo(params : SearchRepo.params) : Observable<any> {
    return this.http.get<any>(`${SEARCH_REPO_API}/${params.ownerId}/${params.repoName}`)
  }
}