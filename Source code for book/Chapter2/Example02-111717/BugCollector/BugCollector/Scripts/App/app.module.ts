import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BugDropdown } from './bugDropdown.component'; 

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, BugDropdown],
    bootstrap: [AppComponent]
})
export class AppModule { }