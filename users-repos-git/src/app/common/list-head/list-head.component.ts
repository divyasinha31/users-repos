// Component to handle list pagination for users and its repositories

import { Component,
         Input,
         Output,
         EventEmitter
       }                from '@angular/core'
import { FormControl }  from '@angular/forms'

export interface ListHeadParams {
  searchPlaceHolder   : string
  perPage             : number
  currentCount        : number
  isLast             ?: boolean
  isFirst            ?: boolean
}

export interface ListHeadOutput {
  startFrom  ?: number
  searchItem ?: string
}

@Component({
  selector    : 'app-list-head',
  templateUrl : './list-head.component.html',
  styleUrls   : ['./list-head.component.scss']
})

export class ListHeadComponent {

  @Input() params       : ListHeadParams
  @Output() actionType  : EventEmitter<ListHeadOutput> = new EventEmitter<ListHeadOutput>()

  searchFC : FormControl = new FormControl('')

  constructor() { }

  onSearch() {
    const value = this.searchFC.value
    this.actionType.emit({ searchItem : value })
    this.searchFC.reset()
  }

  onNext() {
    this.actionType.emit({ startFrom : this.params.currentCount + this.params.perPage })
  }

  onPrevious() {
    this.actionType.emit({ startFrom : this.params.currentCount - this.params.perPage })
  }

}