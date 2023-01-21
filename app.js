//creacion de arrays 
let pronoun = ['the', 'our', "your"];
let adj = ['good', 'little', 'awesome'];
let noun = ['doct', 'universe', 'market'];
let dom = ['.com', '.net', '.io'];

function dGenerator(pronoun, adj, noun, dom) {
    // usar los bucles o loops anidados para mezclar los diferentes valores
    for (let p = 0; p < pronoun.length; p++) {
        for (let a = 0; a < adj.length; a++) {
            for (let n = 0; n < noun.length; n++) {
                for (let d = 0; d < dom.length; d++) {
                    console.log(pronoun[p] + adj[a] + noun[n] + dom[d]); // Une dominios sin excepcion//
                    // domain hacks//
                    if (noun[n] === 'doct') {
                        console.log(pronoun[p] + adj[a] + noun[n] + '.org');
                    } else {
                        console.log(pronoun[p] + adj[a] + noun[n] + dom[d]);
                    }
                }

            }
        }
    }
}
dGenerator(pronoun, adj, noun, dom);