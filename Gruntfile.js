module.exports = function(grunt) {

  var sassOption = 'expanded';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      plugins: {
        files: {
          'js/plugins.min.js': ['js/plugins.js']
        }
      },
      global: {
        files: {
          'js/global.min.js': ['js/global.js']
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      plugins: {
        src: ['js/plugins/*.js'],
        dest: 'js/plugins.js'
      }
    },
    jshint: {
      files: ['js/global.js'],
    },
    watch: {
      scripts: {
        files: ['js/global.js'],
        tasks: ['jshint','uglify:global']
      },
      sass: {
        files: ['scss/*.scss'],
        tasks: ['sass']
      },
      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [
              'html/*.*',
              'style.css',
              'js/global.min.js',
              'img/{,*/}*'
          ]
      }
    },
    sass: {
      dist: {                            // Target
        options: {                       // Target options
          style: sassOption
        },
        files: {                         // Dictionary of files
          'style.css': 'style.scss'
        }
      }
    },
    connect: {
        options: {
            port: 9000,
            open: true,
            livereload: 35729,
            // Change this to '0.0.0.0' to access the server from outside
            hostname: 'localhost'
        },
        server: {
          options: {
            port: 9001,
            base: './'
          }
        }
      }

  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['jshint', 'sass', 'concat', 'uglify', 'connect','watch']);

};


