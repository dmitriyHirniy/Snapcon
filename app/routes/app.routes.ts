import { provideRouter, RouterConfig } from '@angular/router';

import {HomeComponent} from "../components/home.component";
import {ChallengesComponent} from "../components/challenges.component";
import {UsersTableComponent} from "../components/userTable.component";

export const routes: RouterConfig = [
    { path: 'home', component: HomeComponent },
    { path: 'challenges', component: ChallengesComponent },
    { path: 'usersTable', component: UsersTableComponent },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
