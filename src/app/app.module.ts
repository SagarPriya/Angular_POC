import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { FocusComponent } from './focus/focus.component';
import { CareerComponent } from './career/career.component';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    FocusComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
         path: 'app-all',
         component: AllComponent
      },
        {
           path: 'app-focus',
           component: CareerComponent
        },
          {
             path: 'app-career',
             component: FocusComponent
          }
        
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
