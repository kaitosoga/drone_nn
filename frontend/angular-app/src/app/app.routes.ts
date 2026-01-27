import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Game } from './game/game';
import { Inspect } from './inspect/inspect';
import { Custom } from './custom/custom';
import { Skins } from './skins/skins';
import { Leaderboard } from './leaderboard/leaderboard';
import { Profile } from './profile/profile';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'game', component: Game },
    { path: 'inspect', component: Inspect },
    { path: 'custom', component: Custom },
    { path: 'skins', component: Skins },
    { path: 'leaderboard', component: Leaderboard },
    { path: 'profile', component: Profile },
    { path: '', redirectTo: '/home', pathMatch: 'full' } // default route
];
