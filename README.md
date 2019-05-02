![Nano](logo.png)

Gulp plugin for SVG files compression using Nano. For more information, visit [Nano](https://vecta.io/nano)

## Installation

`npm install gulp-nano`

## Authentication

Obtain API Key in [Nano](https://vecta.io/nano)

## Usage

```javascript
var gulp = require('gulp'),
    gulp_nano = require('gulp-nano');

gulp.task('Compress SVG', function () {
    return gulp.src('./*.svg')
        .pipe(gulp_nano({ key: <YOUR API KEY>, mode: <COMPRESSION MODE> }))
        .pipe(gulp.dest('./compressed/'));
});
```

## License

This software is licensed under the MIT License. [View the license](LICENSE).
