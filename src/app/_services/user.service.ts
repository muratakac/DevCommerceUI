import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    create(user: User) {
        return this.http.post('http://localhost:57443/api/account/register', user);
    }
}
