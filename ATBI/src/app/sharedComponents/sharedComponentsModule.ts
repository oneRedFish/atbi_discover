import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgMaterialModule} from "../ngMaterial.module";
import {CommentComponent} from "./commentComponent/comment.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule, NgbModule,
        FormsModule, ReactiveFormsModule, NgMaterialModule,
    ],
    declarations: [CommentComponent],
    exports: [CommentComponent],
})
export class SharedComponentModule {
}
