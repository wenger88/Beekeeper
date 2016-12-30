import {Component, trigger, state, style, transition, animate, OnInit} from '@angular/core';

import '../../public/scss/styles.scss';
import {Router, ActivatedRouteSnapshot, NavigationEnd} from "@angular/router";

@Component({
	selector: 'recipe-app',
	template: require('./app.component.html'),
	styles: [require('./app.component.scss')],
	animations: [
		trigger('slideInOut', [
			state('in', style({
				transform: 'translate3d(-75%, 0, 0)'
			})),
			state('out', style({
				transform: 'translate3d(0, 0, 0)'
			})),
			transition('in => out', animate('400ms ease-in-out')),
			transition('out => in', animate('400ms ease-in-out'))
		]),
        trigger('ButtonOutIn', [
            state('in', style({
                'margin-left': '53px',
            })),
            state('out', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
        trigger('ContentOutIn', [
            state('in', style({
                'margin-left': '69px',
            })),
            state('out', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),

	],

})

export class AppComponent implements OnInit{

	menuState:string = 'out';

	title: string;

	constructor(private router: Router){}

    private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
        var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
        if (routeSnapshot.firstChild) {
            title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.title = this.getDeepestTitle(this.router.routerState.snapshot.root);
            }
        });
    }

	toggleMenu() {
		// 1-line if statement that toggles the value:
		this.menuState = this.menuState === 'out' ? 'in' : 'out';
	}
}
