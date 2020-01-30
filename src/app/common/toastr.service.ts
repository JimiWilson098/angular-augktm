import { Injectable } from '@angular/core'
import *as toastr from 'toastr'

@Injectable()
export class ToastrService {
  private readonly _toastr
  constructor() {
    this._toastr = toastr
  }
  success(message: string, title?: string) {
    this._toastr.success(message,title)
  }
  info(message: string, title?: string) {
    this._toastr.info(message,title)
  }
  warning(message: string, title?: string) {
    this._toastr.warning(message,title)
  }
  error(message: string, title?: string) {
    this._toastr.error(message,title)
  }
}