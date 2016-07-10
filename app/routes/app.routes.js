"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("../components/home.component");
var challenges_component_1 = require("../components/challenges.component");
var userTable_component_1 = require("../components/userTable.component");
exports.routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'challenges', component: challenges_component_1.ChallengesComponent },
    { path: 'usersTable', component: userTable_component_1.UsersTableComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map