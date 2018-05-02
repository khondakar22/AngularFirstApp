import { Component } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color:white;
        }
    `]
})
export class ServerComponent {
    __serverID__ = 10;
    __serverStatus__ = 'Offline';

    constructor() {
        this.__serverStatus__ = Math.random() > 0.5 ? 'online' : 'offline' ;
    }


    getServerStatus() {
        return this.__serverStatus__;
    }
    getColor() {
        return this.__serverStatus__ === 'online' ? 'green' : 'red' ;
    }
}
