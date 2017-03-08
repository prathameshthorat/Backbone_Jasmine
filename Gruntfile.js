module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      test: {
        port: 8000,
        middleware: function(connect) {
          return [
            mountFolder(connect, 'app')
          ];
        }
      }
    },

    watch: {
      files: ['/**/*.js', 'test/SpecRunner.js'],
      tasks: 'exec'
    },

    exec: {
      jasmine: {
        command: 'phantomjs',
        stdout: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect:test', 'exec', 'watch']);

}