// Input - output parameters for the apis.

import { User,
         Repo
       }        from "./app-types"

export namespace GetUsers {
  export interface params {
    countFrom : number
    perPage   : number
  }

  export interface retval {
    userList  : User[]
    isLast   ?: boolean
  }
}

export namespace GetRepos {
  export interface params {
    repoUrl : string
  }

  export interface retval {
    repoList  : Repo[]
    isLast   ?: boolean
  }
}

export namespace SearchUser {
  export interface params {
    userId : string
  }

  export interface retval {
    userFound : boolean
  }
}

export namespace SearchRepo {
  export interface params {
    ownerId   : string
    repoName  : string
  }

  export interface retval {
    repoFound : boolean
  }
}