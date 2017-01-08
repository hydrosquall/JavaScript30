

## Syntax

```css
    :root {
        --basecolor: #000;
    }

    h1 {
        color: var(--basecolor);
    }
```

- Note that you can scope variables to be scope specific (e.g. define base ONLY in one element)

## Why Use Variable at Runtime?

- For many situations, SASS/LESS is the better level of abstraction.
- Support Dynamic Application Theming
- Polyfills for future CSS features

## Resources:  
- [Google Datasheet](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care)
- [Tutorial Video](https://www.youtube.com/watch?v=AHLNzv13c2I&t=10s)
