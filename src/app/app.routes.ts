import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConvertComponent } from './convert/convert.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: "Startsidan" },
    { path: 'convert', component: ConvertComponent, title: "Konvertering" },
    { path: 'about', component: AboutComponent, title: "Om uppgiften"},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '404', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent }
];
