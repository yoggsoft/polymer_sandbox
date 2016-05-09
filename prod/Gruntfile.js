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
    }, 

    /*
    sass Task 
    */
    sass: {
      dev : {
        options : {
          style: 'expanded',
          sourcemap:'none'
        },
        files : {
          '../deploy/css/style.min.css' : 'sass/style.scss'
        }
      },
      dist : {
        options : {
          style: 'compressed',
          sourcemap:'none'
        },
        files : {
          '../deploy/css/style.min.css' : 'sass/style.scss'
        }
      }
    },

    /*
    Watch Task 
    */
    watch: {
      css:{
        files:'sass/*.scss',
        tasks: ['sass']
      },
      html:{
        files:'*.html',
        tasks: ['htmlmin']
      },
      js:{
        files:'js/*.js',
        tasks: ['uglify']
      }
    }


  });

  // Load the plugin that provides the "watch" task.
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['watch']);

};