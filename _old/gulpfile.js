// Instanciação de módulos
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('scripts', function() {
    // Tarefas
    return gulp
            .src(['assets/components/brathena/*.js'])
            .pipe(uglify())
            .pipe(gulp.dest('build/js'));      
});