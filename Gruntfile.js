module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 555,
            suffix: '_low',
            quality: 30
          }, {
            width: 555,
            suffix: '_med',
            quality: 50
          }, {
            width: 555,
            suffix: '_high',
            quality: 100
          }]
          /*  width: 1140,
            suffix: '_large_1x',
            quality: 50
          },{
            width: 500,
            suffix: '_small',
            quality: 30
          },{
            width: 1000,
            suffix: '_medium',
            quality: 30
          },{
            width: 2280,
            suffix: '_large_2x',
            quality: 50
          }]*/
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
