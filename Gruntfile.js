module.exports = function(grunt) {
  // Project configuration.
  const sass = require("node-sass");

  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          "src/css/main.css": "src/scss/main.scss"
        }
      }
    },
    watch: {
      scripts: {
        files: ["src/scss/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ["src/css/*.css", "src/*.html"]
        },
        options: {
          watchTask: true,
          server: "./src"
        }
      }
    }
  });
  // Load the plugins tasks
  grunt.loadNpmTasks("grunt-sass");
  // Default task(s).
  // grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.registerTask("default", ["browserSync", "watch"]);
};
