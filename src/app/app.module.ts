import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RiksdagenService } from './services/riksdagen.service';
import { PersonerComponent } from './personer/personer.component';
import { PersonfilterComponent } from './components/personfilter/personfilter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonerComponent,
    PersonfilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [RiksdagenService],
  bootstrap: [AppComponent],
})
export class AppModule {}
