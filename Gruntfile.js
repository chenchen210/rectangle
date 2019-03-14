module.exports = function(grunt) {
  grunt.initConfig({
    htmlhint: {
      html: {
        options: {
                    htmlhintrc: '.htmlhintrc'   
            
        },
        src: ['*.html'] 
      }          
    },
    
    csslint: {
         options: {
               csslintrc: '.csslintrc'
         },
         src: ['rectangle.css']
    },
  
    eslint: {
        options: {
                configFile: '.eslintrc.json'
        },
        target: ['rectangle.js']  
    }
  });
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.registerTask('default', ['htmlhint']);
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.registerTask('default', ['csslint']);
    grunt.loadNpmTasks('grunt-eslint');
    grunt.registerTask('default', ['eslint']);

};
