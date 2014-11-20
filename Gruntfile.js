var grunt = require("grunt");

grunt.loadNpmTasks("grunt-contrib-jshint");
grunt.loadNpmTasks("grunt-contrib-less");
grunt.loadNpmTasks("grunt-contrib-watch");
grunt.loadNpmTasks("grunt-browser-sync");
grunt.loadNpmTasks('grunt-contrib-copy');

grunt.initConfig({
	jshint: {
		all: {
			src: ["Gruntfile.js", "public/js/**/*.js"],
			options: {
				jshintrc: true
			}
		}
	},
	less: {
		development: {
			options: {
				paths: ["public/less"],
				sourceMap: true,
				sourceMapFilename: "public/css/style.css.map",
				sourceMapRootpath: "/"
			},
			files: {
				"public/css/style.css": "public/less/style.less"
			}
		}
	},
	copy: {
		vendor: {
			files: [
			  { expand: true,
					cwd: "node_modules/font-awesome/",
					src: ["css/**", "fonts/**"],
					dest: "public/vendor/",
					filter: "isFile" }
			]
		}
	},
	watch: {
		scripts: {
			files: ["public/less/**/*.less"],
			tasks: ["less"],
			options: {
				spawn: false
			}
		}
	},
	browserSync: {
		dev: {
			bsFiles: {
				src: "public/css/*.css"
			},
			options: {
				port: 3001,
				watchTask: true
			}
		}
	}
});

grunt.registerTask("default", ["browserSync", "watch"]);

grunt.registerTask("build", ["copy", "less"]);

