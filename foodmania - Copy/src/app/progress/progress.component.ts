import { Component } from '@angular/core';

@Component({
    selector: 'app-progress',
    template: `
    <div class="progress">
        <div class="progress-bar"
        role="progressbar"
        [style.width]="incr + '%'"
        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    `,
})
export class ProgressComponent {
    public incr = 20;
    incrment() {
        this.incr = this.incr + 10;
    }
}
