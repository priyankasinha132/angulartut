import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-fd-table',
    templateUrl: './fd-table.component.html',
    styleUrls: ['./fd-table.component.css']
})
export class FdTableComponent {
    @Input() public fdtitle: string;
    @Input() public list: Array<{}>;
}
