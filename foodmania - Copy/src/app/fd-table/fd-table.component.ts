import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-fd-table',
    templateUrl: './fd-table.component.html',
    styleUrls: ['./fd-table.component.css']
})
export class FdTableComponent {
    @Input() public fdtitle: string;
    @Input() public list: Array<{}>;
    @Output() public btnclick: EventEmitter<any> = new EventEmitter();
    @Output() public btnclick1: EventEmitter<any> = new EventEmitter();

    btn() {
        this.btnclick.emit({ a: 10 });
    }
}
