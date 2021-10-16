import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./home/home.component";
import { RiksdagenService } from './services/riksdagen.service';
import { PersonerComponent } from './personer/personer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RiksdagenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
