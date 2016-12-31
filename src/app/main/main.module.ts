import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { mainRoutes } from './main.routes';
import { SidebarComponent } from './main/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRoutes),
    NgbModule
  ],
  declarations: [MainComponent, SidebarComponent]
})
export class MainModule { }
