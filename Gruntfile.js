module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  var connect = require('connect');
  var serveStatic = require('serve-static');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        files: {
          'tmp/custom.css': 'src/custom.less'
        }
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      less: {
        files: ['src/*.less'],
        tasks: ['less:dev']
      }
    }
  })

  grunt.registerTask('server', function () {
    connect()
      .use('/lib', serveStatic('node_modules'))
      .use('/style', serveStatic('tmp'))
      .use('/', serveStatic('src'))
      .listen(8888);
  });


  grunt.registerTask('run', ['server', 'watch'])
}
