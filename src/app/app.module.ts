import { FollowerService } from './services/follower.service';
import { ErrorHandler } from '@angular/core';

import { PostService } from './services/post.service';

import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavouriteComponent } from './favourite/favourite.component';

import { TitleCasePipe } from './title-case.pipe';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { NgSwitchCaseExampleComponent } from './ng-switch-case-example/ng-switch-case-example.component';
import { NgtemplateexampleComponent } from './ng-template-example/ng-template-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgForTrackbyExampleComponent } from './ng-for-trackby-example/ng-for-trackby-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ZippyMoshComponent } from './zippy-mosh/zippy-mosh.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Assignment6FormComponent } from './assignment6-form/assignment6-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { Assignment7ChangePasswordComponent } from './assignment7-change-password/assignment7-change-password.component';
import { Assignment7ChangePasswordMoshComponent } from './assignment7-change-password-mosh/assignment7-change-password-mosh.component'
import { PostsComponent } from './Consuming-HTTP-Services/Get-Data-PostsComponent.component'

import { HttpModule } from '@angular/http'
import { AppErrorHandler } from './common/app-error-handler';
import { FollowerComponent } from './follower-component/follower-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TestComponentComponent,
    AuthorsComponent,
    SummaryPipe,
    FavouriteComponent,
    TitleCasingComponent,
    TitleCasePipe,
    BootstrapPanelComponent,
    LikeComponent,
    NgSwitchCaseExampleComponent,
    NgtemplateexampleComponent,
    NgForExampleComponent,
    NgForTrackbyExampleComponent,
    NgStyleExampleComponent,
    InputFormatDirective,
    ZippyComponent,
    ZippyMoshComponent,
    ContactFormComponent,
    Assignment6FormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    Assignment7ChangePasswordComponent,
    Assignment7ChangePasswordMoshComponent,
    PostsComponent,
    FollowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthorsService, 
    PostService,
    FollowerService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


