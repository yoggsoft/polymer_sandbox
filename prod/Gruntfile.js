module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    /*
    uglify Task 
    */
    uglify: {
      options: {
        manage:false
      },
      my_target: {
        files: {
          '../deploy/js/main.min.js' : ['js/*.js'],
        }
      }
    },

    /*
    htmlmin Task 
    */
    htmlmin: {
      dist:{
        options:{
          removeComments:true,
          collapseWhitespace:true
        },
        files: {
          '../deploy/index.html' : ['index.html']
        }
      }
    }

  });


  // Load the plugin that provides the "watch" task.
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);

};