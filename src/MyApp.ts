import * as repos3 from './models3';
import { repos4 } from './models4';

function myApp() {
    var v1: repos3.repos.Repository = {
        id: 1,
        name: "name",
        full_name: "full name",
        url: "url"
    };
    var v2: repos4.repos2.Repository = {
        id: 2,
        name: "name",
        full_name: "full name",
        url: "url"
    }

    console.log(v1);
    console.log(v2);
}
