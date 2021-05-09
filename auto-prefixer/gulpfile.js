var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer')


// function defaultTask(cb) {
 
//     cb();
//   }
  
//   exports.default = defaultTask
     // place code for your default task here
     gulp.task('styles', function(){
       return gulp.src('css/styles.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))
    });
    
    gulp.task('watch', function(){
       return gulp.watch('css/styles.css',['styles'])
    });