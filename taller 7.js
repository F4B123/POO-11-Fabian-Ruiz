(function() {

const b = [ 1, 2, , 3, 4 ];

const x = b.pop();	

const y = b.push( 5 );	

b.shift();			
b.unshift( 9 );		 

console.log( b );		// antes de ordenar

b.sort();				// ordena el array

console.log( b )

})();
