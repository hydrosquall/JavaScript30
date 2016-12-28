## Notes on Drumkit

- Use [keycode.info](http://www.keycode.info) to check keyboard codes
- `data-` prefix used to specify custom attributes on HTML elements
- Javascript can listen for "transition end" from CSS, use that for key timeout
    - preferable to standard timeout
- Bug: if you hold down a key, the sound keeps working but it's unable to remove
the "playing" class. 
- Design could be improved by keeping audio elements and data items together, or
lazy-loading the audio files. Not clear if they must load when the page loads
or if they are called over the network gradually.

## Possible Todos:

- Rewrite templates in Jade / CoffeeScript / Typescript
- To do inline coffee, use: :coffee-script filter
- Make gallery page to link to all the activities
- Target 2 activities per day to finish before break ends
- Review es6 features 
- Rewrite template to generate list items with a jade (pug?) iterator

## Resources

- [Lesson url](https://youtu.be/VuN8qwZoego)

## Code snippets

Basic event listener

```
window.addEventListener('keydown', function(e) {
   console.log(e.keyCode); 
});
```

Doing event delegation in vanilla JS
