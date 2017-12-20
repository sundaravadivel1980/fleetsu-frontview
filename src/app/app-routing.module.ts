import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './devicelist/devicelist.component';
import { AboutMeComponent } from './aboutme/aboutme.component';
import { ContactMeComponent } from './contactme/contactme.component';

const routes: Routes = [
  {   path: '', redirectTo: '/devicelist', pathMatch: 'full'},
  {   path: 'devicelist', component: DeviceListComponent    },
  {   path: 'about', component: AboutMeComponent    },
  {   path: 'contact', component: ContactMeComponent    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
