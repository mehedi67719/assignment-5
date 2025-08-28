1.
We use getElementById to find the html ID., we use getElementsByClassName to find html class , we use querySelector To find elements using CSS selectors ,
We use querySelectorAll when we want to find multiple elements at once.




2.create a new element using document.createElement() ,set its content or attributes, and then insert it into the DOM using methods  appendChild()



3.Event Bubbling is when an event and The event runs in the DOM from bottom to top.




4.Event Delegation is a JavaScript technique where we attach an event listener to the parent element instead of the child element,it  useful because 
Instead of adding separate listeners to many child elements, everything can be managed with one listener,
Also works on elements that are dynamically created after page load.



5.preventDefault() → stops the element’s default browser action.

stopPropagation() → stops the event from bubbling or propagating to parent elements.