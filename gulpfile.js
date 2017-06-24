var gulp = require('gulp');
var myhtml = require("gulp-minify-html");
var mycss = require('gulp-clean-css');


gulp.task('myhtml'),function(){
	gulp.src('*.html')
	.pipe(myhtml())
	.pipe('haha')
}

gulp.task('mycss'),function(){
	gulp.src('css/*.css')
	.pipe(mycss())
	.pipe(gulp.dest('haha/css'))
}

gulp.task('default',['myhtml','mycss'],function(){
	console.log('完美！');
})