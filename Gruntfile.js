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
          "docs/css/main.css": "docs/scss/main.scss"
        }
      }
    },
    watch: {
      scripts: {
        files: ["docs/scss/*.scss"],
        tasks: ["sass"],
        options: {
          spawn: false
        }
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ["docs/css/*.css", "docs/*.html"]
        },
        options: {
          watchTask: true,
          server: "./docs"
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
