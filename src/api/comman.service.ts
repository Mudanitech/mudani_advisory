import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
    providedIn: 'root'
})

export class CommonService {
    constructor(
        private toastr: ToastrService,
        private spinner: NgxSpinnerService
    ) { }

    succ(msg) {
        this.toastr.success(msg);
    }
    err(msg) {
        this.toastr.error(msg);
        this.spinner.hide();
    }
}




