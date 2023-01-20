
//creacion de arrys 
let pronoun = ['the', 'our', "you"];
let adj = ['good', 'little', 'awesome'];
let noun = ['doct', 'universe', 'market'];
let dom = ['.com', '.net', '.io'];

// usar los bucles o loops anidados para mezclar los diferentes valores
for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            for (let d = 0; d < dom.length; d++) {
                console.log(pronoun[p] + adj[a] + noun[n] + dom[d]); // Une dominios sin excepcion//
                // domain hacks//

            }

        }
    }
}



