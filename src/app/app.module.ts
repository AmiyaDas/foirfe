import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { bootstrap } from 'bootstrap/dist/js/bootstrap.min.js';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import { OwlModule } from 'ngx-owl-carousel';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from '../environments/environment';
import { ResourcesPostComponent } from './resources-post/resources-post.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { ResourcesListComponent } from './resources-list/resources-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResourcesComponent,
    ContactComponent,
    WhatWeDoComponent,
    WhoWeAreComponent,
    FooterComponent,
    ResourcesPostComponent,
    ScrollTopComponent,
    ResourcesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatSnackBarModule,
    RouterModule,
    ReactiveFormsModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    OwlModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

//, WhatWeDoComponent, WhoWeAreComponent