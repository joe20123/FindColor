import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchcolorComponent } from './searchcolor/searchcolor.component';

const appRoutes: Routes = [
    {
        path: 'search',
        component: SearchcolorComponent
    },
    {
        path: '',
        redirectTo: '/search', pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
     ],
    exports: [ RouterModule]
})
export class AppRoutingModule {}
