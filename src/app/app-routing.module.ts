import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCarComponent } from './list-car/list-car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'cars', component: ListCarComponent },
  { path: 'car/:id', component: DetailCarComponent },
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
