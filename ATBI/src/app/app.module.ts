import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {NgMaterialModule} from './ngMaterial.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./route.module";
import {InstructionComponent} from "./pages/detail/instruction/instruction.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {HomeComponent} from "./pages/home/home.component";
import {CarouselComponent} from './pages/detail/instruction/carousel/carousel.component';
import {CommentsComponent} from './pages/detail/comments/comments.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailProfileComponent} from './pages/detail/profile/detail-profile.component';
import {ProfileComponent} from "./pages/profile/profile.component";
import {MatDialogModule} from '@angular/material';
import {PopupdialogComponent} from './pages/detail/popupdialog/popupdialog.component';
import {MatButtonModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {NgxEditorModule} from 'ngx-editor';
import {HttpHandler, HttpClient} from "@angular/common/http";
import {HttpClientModule} from '@angular/common/http'
import {ImageUploadModule} from 'angular2-image-upload';
import {CardComponent} from "./pages/home/components/card.component";
import {SharedComponentModule} from "./sharedComponents/sharedComponentsModule";
import {AuthenticationService} from "./globalServices/authentication.service";
import {NgbPaginationConfig} from "@ng-bootstrap/ng-bootstrap";
import {APP_CONFIG, AppConfig} from "./app.config";


@NgModule({
    declarations: [
        AppComponent,
        InstructionComponent,
        DetailComponent,
        HomeComponent,
        CarouselComponent,
        CommentsComponent,
        DetailProfileComponent,
        ProfileComponent,
        PopupdialogComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        SharedComponentModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgMaterialModule,
        ChartsModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatStepperModule,
        NgxEditorModule,
        ImageUploadModule.forRoot(),
        HttpClientModule
    ],
    entryComponents: [
        PopupdialogComponent
    ],
    providers: [
        HttpClient, AuthenticationService, NgbPaginationConfig,
        {
            provide: APP_CONFIG,
            useValue: AppConfig
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
