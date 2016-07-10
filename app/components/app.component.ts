import { Component } from '@angular/core';
import {ChallengesRender} from "./challengesRender.component";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app/html/app.component.html',
    directives: [ROUTER_DIRECTIVES,ChallengesRender]
})
export class AppComponent { }
