import { Pipe, PipeTransform } from '@angular/core';
/*
*/
@Pipe({ name: 'squareroot' })
export class SquareRootPipe implements PipeTransform {
    transform(value: number, x: number, y: any): any {
        return (value * x) / y;
    }
}
