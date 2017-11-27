import { EventEmitter2 as _EventEmitter2 } from 'eventemitter2';
import * as _ from 'underscore';

export interface Observer {
    listNotificationInterests(): Array<string>;
    onNotification(eventName: string, data: any): Promise<any> | void;
}

export class EventEmitter2 extends _EventEmitter2 {
    observers: Array<Observer> = [];
    constructor(options?) {
        super(options);
        this.onAny((event: string, ...values: any[]) => {
            return this.notifyObservers(event, ...values);
        });
    }


    emitAsync(...args): Promise<any> {
        return super['emit' + 'Async'](...args);
    }

    private notifyObservers(event: string, ...values: any[]): Promise<any> {
        return Promise.all(this.observers.map((observer: Observer) => {
            if (observer.listNotificationInterests) {
                const interests = observer.listNotificationInterests();
                if (_.contains(interests, event)) {
                    return observer.onNotification(event, values[0]);
                }
            } else {
                return observer.onNotification(event, values[0]);
            }
        }));
    }

    registerOberver(observer: Observer) {
        if (observer.onNotification) {
            if (_.contains(this.observers, observer)) {
            }
            this.observers.push(observer);
        }
    }

    unRegisterOberver(observer: Observer) {
        this.observers = _.without(this.observers, observer);
    }

}

export const EventService = new EventEmitter2();
