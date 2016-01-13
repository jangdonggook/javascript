
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

//자바스크립트 파일을 minify
gulp.task('uglify', function () {
    return gulp.src('com/**/*.js') //src 폴더 아래의 모든 js 파일을
        .pipe(concat('all.js')) //main.js 라는 파일명로 모두 병합한 뒤에,
        .pipe(uglify()) //minify 해서
        .pipe(gulp.dest('dist')); //dist 폴더에 저장
});

// 파일 변경 감지
gulp.task('watch', function () {
    gulp.watch('com/**/*.js', ['uglify']);
});

//gulp를 실행하면 default 로 uglify, watch task를 실행
gulp.task('default', ['uglify', 'watch']);


