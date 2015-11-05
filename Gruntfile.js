module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    browserSync: {
      bsFiles: {
        src: ['**/*.css','**/*.js','**/*.html']
      },
      options: {
        server: {
          baseDir: "./"
        }
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //
  grunt.loadNpmTasks('grunt-browser-sync');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);


};
