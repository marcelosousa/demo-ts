/**
 * Copyright (C) 2019-2020 Explore.dev, Unipessoal Lda - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

namespace NS {
    export interface I1 {
        id: string;
    }

    export interface I2 {
        name: string;
    }

    function f() {
        const a: I1 = {
            id: "abc"
        };
        const b: I2 = {
            name: "qweqwe"
        };
    }
}

function t() {
    const a: NS.I1 = {
        id: "abc"
    };
    const b: NS.I2 = {
        name: "qweqwe"
    };
}

export default NS;
