import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import {AppComponent} from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] // <-- Provide HttpClient here
});
