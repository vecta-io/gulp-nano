![Nano](logo.png)

[![npm version](https://badge.fury.io/js/gulp-nano.svg)](https://badge.fury.io/js/gulp-nano)

Gulp plugin for SVG files compression using Nano. For more information, visit [Nano](https://vecta.io/nano)

## Installation

`npm install gulp-nano`

## Authentication

Obtain API Key in [Nano](https://vecta.io/nano)

## Usage

```javascript
var gulp = require('gulp'),
    nano = require('gulp-nano');

gulp.task('Compress SVG', function () {
    return gulp.src('./*.svg')
        .pipe(nano({ key: 'YOUR API KEY', embed_fonts: 1 }))
        .pipe(gulp.dest('./compressed/'));
});
```

## Usage with gulp-cache

```javascript
var gulp = require('gulp'),
    cache = require('cache'), //cache compressed svg
    nano = require('gulp-nano');

gulp.task('Compress SVG', function () {
    return gulp.src('./*.svg')
        .pipe(cache(
            nano({ key: 'YOUR API KEY', embed_fonts: 1 }), { name: 'nano-cache' } )
        .pipe(gulp.dest('./compressed/'));
});
```

### Options

`key <string>` 

- API key obtained from [Nano](https://vecta.io/nano)

`precision=3 <number>`

- Precision of numerical values in SVG.

`embed_fonts=1 <number|boolean>`

- Fonts embedding in SVG. Useful when svg is referenced using <img>. Defaults to `1` or `true`

`maintain_class=0 <number|boolean>`

- Maintain class name of SVG elements. Defaults to `0` or `false`
- Example:

```html
<!--Before-->
<svg>
    <rect class="Fill" x="0" y="0" width="100" height="100"></rect>
</svg>

<!--After-->
<svg>
    <path class="Fill" d="M 0 0 L 100 100" />
</svg>
```

`maintain_id=0 <number|boolean>`

- Maintain id of SVG elements. Defaults to `0` or `false`
- Example:

```html
<!--Before-->
<svg>
    <rect id="rect1" x="0" y="0" width="100" height="100"></rect>
</svg>

<!--After-->
<svg>
    <path id="rect1" d="M 0 0 L 100 100" />
</svg>
```

`maintain_structure=0 <number|boolean>`

- Maintain structure of SVG elements. Defaults to `0` or `false`

## License

This software is licensed under the MIT License. [View the license](LICENSE).
