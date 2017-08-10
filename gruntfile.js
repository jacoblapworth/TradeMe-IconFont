module.exports = function(grunt) {

  grunt.initConfig({
    // export icons as svg from sketch
    sketch_export: {
      icons: {
        options: {
          type: 'slices',
          formats: [
            'svg'
          ],
          overwrite: true
        },
        src: 'src/sketch/*.sketch',
        dest: 'build/icons'
      }
    },
    // optimise svg
    svgmin: {
      options: {
        plugins: [{
          mergePaths: true
        }]
      },
      dist: {
        files: 'build/icons/*.svg'
      }
    },
    // sort svg sizes
    copy: {
      Regular24: {
        files: [
          {
            expand: true,
            cwd: 'build/icons/',
            src: ['*.svg', '!*-16.svg'],
            dest: 'build/icons/24/',
            rename: function(dest, src) {
              return dest + src.replace(/-16$/, ""); + '.svg';
            }
          }
        ]
      },
      Small16: {
        files: [
          {
            expand: true,
            cwd: 'build/icons/',
            src: ['*-16.svg'],
            dest: 'build/icons/16/',
            rename: function(dest, src) {
              return dest + src.replace(/\-16/, ""); + '.svg';
            }
          }
        ]
      }
    },
    // build font files
    webfont: {
      // iconfont for Sketch App toolkit
      sketchtoolkit_regular: {
        src: 'build/icons/24/*.svg',
        dest: 'build/sketch-toolkit',
        options: {
          font: 'TangramIcons-Regular24',
          types: 'ttf',
          fontHeight: 960,
          descent: 0,
          ligatures: true,
          stylesheets: [],
          htmlDemo: false,
          codepointsFile: 'src/codepoints',
          customOutputs: [{
            template: 'src/templates/codepoints',
            dest: 'build'
          }]
        }
      },
      sketchtoolkit_small: {
        src: 'build/icons/16/*.svg',
        dest: 'build/sketch-toolkit',
        options: {
          font: 'TangramIcons-Small-16',
          types: 'ttf',
          fontHeight: 960,
          descent: 0,
          ligatures: true,
          stylesheets: [],
          htmlDemo: false,
          codepointsFile: 'src/codepoints'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sketch');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-webfont');

  // Default task(s).
  grunt.registerTask('default', ['sketch_export', 'svgmin', 'copy', 'webfont']);

};
