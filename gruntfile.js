module.exports = function (grunt) {

  grunt.initConfig({
    // sort icon sizes
    copy: {
      Regular24: {
        files: [
          {
            expand: true,
            cwd: 'lib/build/svg/',
            src: ['*.svg', '!*-16.svg'],
            dest: 'build/icons/24/',
            rename: function (dest, src) {
              return dest + src.replace(/-16$/, ""); + '.svg';
            }
          }
        ]
      },
      Small16: {
        files: [
          {
            expand: true,
            cwd: 'lib/build/svg/',
            src: ['*-16.svg'],
            dest: 'build/icons/16/',
            rename: function (dest, src) {
              return dest + src.replace(/\-16/, ""); + '.svg';
            }
          }
        ]
      }
    },
    // build font files
    webfont: {
      // iconfont for design toolkit
      designtoolkit_regular: {
        src: 'build/icons/24/*.svg',
        dest: 'build/design-toolkit',
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
      designtoolkit_small: {
        src: 'build/icons/16/*.svg',
        dest: 'build/design-toolkit',
        options: {
          font: 'TangramIcons-Small16',
          types: 'ttf',
          fontHeight: 960,
          descent: 0,
          ligatures: true,
          stylesheets: [],
          htmlDemo: false,
          codepointsFile: 'src/codepoints'
        }
      }
    },
    // package build files for release
    compress: {
      sketchtoolkit: {
        options: {
          archive: 'dist/tangram_icons-design.zip'
        },
        files: [{
          expand: true,
          cwd: 'build/design-toolkit/',
          src: ['**/*'],
          dest: ''
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-compress');

  // Default task(s).
  grunt.registerTask('default', [
    'copy',
    'webfont', 
    'compress']);

};
