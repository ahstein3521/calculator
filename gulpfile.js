const gulp = 		require('gulp');
const uglify = 		require("gulp-uglify");
const concat = 		require("gulp-concat");
const livereload = 	require('gulp-livereload');
const autoprefixer= require('gulp-autoprefixer')
const plumber = 	require("gulp-plumber");
const sass = 		require("gulp-sass")
const babel = 		require("gulp-babel")
const ghPages = 	require('gulp-gh-pages');


const Paths = {
	scripts: "src/scripts/**/*.js",
	styles: "src/styles/**/*.scss"
}

const Dest = "dist"

gulp.task("styles",() =>{
	return gulp.src(Paths.styles)
			.pipe(plumber(function(err){ 
				console.log(err);
				this.emit("end") 
			}))
			.pipe(autoprefixer())
			.pipe(sass({outputStyle:"compressed"}))
			.pipe(gulp.dest(Dest))
			.pipe(livereload());
})		

gulp.task("scripts",() => {
	return gulp.src(Paths.scripts)
		 	   .pipe(babel({presets: ["es2015"]}))
		 	   .pipe(uglify())
			   .pipe(concat("main.js"))
			   .pipe(gulp.dest(Dest))
			   .pipe(livereload())
})

gulp.task("watch", () => {
	
	require("./server");

	livereload.listen();

	gulp.watch(Paths.scripts, ["scripts"])

	gulp.watch(Paths.styles, ["styles"])
})

gulp.task("deploy", () => gulp.src("dist/*").pipe(ghPages()));