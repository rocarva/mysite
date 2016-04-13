'use strict';
module.export = function (gulp,$){
	gulp.task('bower',function(){
		return $.bower({cwd:'./'})
			.pipe(gulp.dest('./vendor/'))
	});
};
