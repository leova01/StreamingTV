import { Routes } from '@angular/router';
import { BrowseComponent } from './pages/browse/browse.component';
import { DetailsComponent } from './pages/Details/Details.component';

export const routes: Routes = [
    
    {path: '**', redirectTo: 'browse', pathMatch: 'full'},
    {path: '', redirectTo: 'browse', pathMatch: 'full'},
    {path: 'browse', component: BrowseComponent},
    {path: 'details/:id', component: DetailsComponent},
];
