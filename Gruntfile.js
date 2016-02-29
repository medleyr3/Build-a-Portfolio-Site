/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 500,
            suffix: '_medium_1x',
            quality: 30
          },
		  {
            /* Change these */
            width: 1000,
            suffix: '_medium_2x',
            quality: 30
          },
		  {
            /* Change these */
            width: 750,
            suffix: '_large_1x',
            quality: 30
          },
		  {
            /* Change these */
            width: 1500,
            suffix: '_large_2x',
            quality: 30
          }
		  ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images_process/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images_process'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images_process']
        },
      },
    },
	
	copy: {
  main: {
    files: [
      // includes files within path
//      {expand: true, src: ['images/*'], dest: 'images_final/', filter: 'isFile'},

      // includes files within path and its sub-directories
     // {expand: true, src: ['path/**'], dest: 'dest/'},

      // makes all src relative to cwd
     // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

      // flattens results to a single level
      {expand: true, flatten: true, src: ['images_process/**'], dest: 'images/', filter: 'isFile'},
    ],
  },
},

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images','copy','clean']);

};
