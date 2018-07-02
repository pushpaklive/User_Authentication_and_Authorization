import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

const routes: Routes = [
    //Routes has this structure of path, component,useAsDefault 
    { path: '', redirectTo: '/events' , pathMatch : 'full'},
    { path: 'events', component: EventsComponent },
    { path: 'special', component: SpecialEventsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    //Using forRoot Method and passing our const routes to it makes angular aware of our routes
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    //Using exports we can use RouterModule outside -  will use this in app.module.ts in imports Array
})

export class AppRoutingModule {

}