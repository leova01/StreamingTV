import { Routes } from '@angular/router';
import { BrowseComponent } from './pages/browse/browse.component';
import { DetailsComponent } from './pages/Details/Details.component';

export const routes: Routes = [
    
    {path: '**', component: BrowseComponent},
    {path: '', component: BrowseComponent},
    {path: '/browse', component: BrowseComponent},
    {path: '/details/:id', component: DetailsComponent},
];
