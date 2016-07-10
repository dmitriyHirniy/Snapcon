import { Component } from '@angular/core';
import {ChallengesRender} from "./challengesRender.component";
@Component({
    selector: 'app',
    template: '<challenges-render></challenges-render>',
    directives: [ChallengesRender]
})
export class AppComponent { }
