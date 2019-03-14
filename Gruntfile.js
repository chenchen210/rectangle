module.exports = function (grunt) {
  grunt.initConfig({
          cssmin: {  
              options: {
                  mergeIntoShorthands: false,
                  roundingPrecision: -1
              },
              target: {
                  files: {
                    'dist/rectangle.css': ['./retangle.css']
                  }   
              }
          }, 

          htmlmin: {
               options: {
                    collapseWhitespace: true,
                    preserveLineBreaks: false
              },
              files: {
                    src: './index.html',
                    dest: 'dist/index.html'
              }
          },

          uglify: {
               release: {
                     files: {
                          'dist/rectangle.js': ['./rectangle.js'],
                          'dist/calc.js':['./calc.js']
                      }          
               }
           }
                      
  });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['cssmin']); 

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['htmlmin']); 


    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']); 
};
