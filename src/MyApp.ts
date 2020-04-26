import * as repos3 from './models3';
import { repos4, V4 } from './models4';

function myApp() {
    var v1: repos3.repos.Repository = {
        id: 1,
        name: "name",
        full_name: "full name",
        url: "url"
    };
    var v2: repos3.repos2.Repository = {
        id: 2,
        name: "name",
        full_name: "full name",
        url: "url"
    };
    var v3: repos4.repos.Repository = {
        id: 3,
        name: "name",
        full_name: "full name",
        url: "url"
    }
    var v4: repos4.repos2.Repository = {
        id: 4,
        name: "name",
        full_name: "full name",
        url: "url"
    }
    var vv4: V4 = {
        id: "4",
    }

    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log(v4);
    console.log(vv4);
}
