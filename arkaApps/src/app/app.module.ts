import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FriendComponent } from './friend/friend.component';
import { FilterPipeModule} from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactMeComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    FilterPipeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'contactMe', component:ContactMeComponent},
      {path:'friend', component:FriendComponent}])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
