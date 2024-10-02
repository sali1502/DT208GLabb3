import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConvertComponent } from './convert/convert.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: "Startsidan" },
    { path: 'convert', component: ConvertComponent, title: "Konvertering" },
    { path: 'about', component: AboutComponent, title: "Om uppgiften"},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
