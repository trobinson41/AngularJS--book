import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { DataService } from './data.service';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ViewerComponent } from './components/viewer/viewer.component';
//import { Bug } from './shared/Bug';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        ViewerComponent,
        CatalogComponent,
        HomeComponent
    ],
    providers: [DataService],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'viewer', component: ViewerComponent },
            { path: 'catalog', component: CatalogComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
