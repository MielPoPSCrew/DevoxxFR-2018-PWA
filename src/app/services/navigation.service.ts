import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

    private navigationData: { [data: string]: any } = {};
    public popEvent: boolean;

    constructor() {
        this.popEvent = false;
    }

    public put(id: string, value: any): void {
        this.navigationData[id] = value;
    }

    public get(id: string): any {
        return this.navigationData[id];
    }
}
