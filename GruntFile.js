module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      coffeescript: {
        files: ['**/*.coffee'],
        tasks: ['coffee']
      },
      handlebars: {
        files: ["scripts/templates/universal_share_bar.handlebars", "scripts/templates/universal_share_bar_horizontal.handlebars"],
        tasks: ['handlebars']
      },
      sass: {
        files: ['stylesheets/widgets.scss'], // 'destination' : 'source'
        tasks: ['sass']
      }
    },
    clean: {
      build: ['base', 'result.js']
    },
    coffee: {
      glob_to_multiple: {
        expand: true,
        cwd: 'scripts/coffeescripts',
        src: ['**/*.coffee'],
        dest: 'scripts/javascripts',
        ext: '.js'
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: ".",
          mainConfigFile: "scripts/javascripts/main.js",
          name: "scripts/javascripts/main",
          out: "base/main-optimized.js",
          paths: {
            jquery: "empty:",
            underscore: "empty:",
            backbone: "empty:"
          }
        }
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: "UniversalShareBar.Templates"
        },
        files: {
          "scripts/javascripts/templates/universal_share_bar.js":  ["scripts/templates/universal_share_bar.handlebars", "scripts/templates/universal_share_bar_horizontal.handlebars"]
        }
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        files: {                         // Dictionary of files
          'styles/widgets.css': 'stylesheets/widgets.scss' // 'destination' : 'source'
        }
      },
      dev: {                             // Another target
        options: {                       // Target options
          style: 'expanded'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: './',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');




  grunt.registerTask('default', ['clean', 'coffee', 'handlebars', 'requirejs', 'sass']);

};