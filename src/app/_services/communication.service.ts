import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommunicationService {

    private source = new Subject<string>();

    called$ = this.source.asObservable();

    callMethod(callingMethod: string) {
        this.source.next(callingMethod);
    }
}
