import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'food-app',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    public originUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.originUrl = new URL(document.URL).origin;
    }

    goBack() {
        this.router.navigate(['./../'], { relativeTo: this.route});
    }
}