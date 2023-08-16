# Javascript_Basics_Udemy

This repo contents some javascript code which I am learning from Udemy

<h2>this keyword</h2>
<i>this</i> is a complex keyword which works differently with differnt elements.

<h3><i>In the global scope</i></h3>
in the global scope, <i>'this'</i> means the window object itself.

<h3><i>Inside a regular function call</i></h3>
Here <i>'this'</i> will be <i>undefined</i> (only if use strict mode in javascript, otherwise <i>'this'</i> will point to the global object).

<h3><i>Inside arrow function</i></h3>
An arrow function dose not have it's own <i>'this'</i> keyword. Instead here the <i>'this'</i> keyword will point to it's parent element.

<h3><i>Function call inside an object</i></h3>
Here the this keyword will be the object itself. this always points it's owner. in this case the object is the owner of the function
