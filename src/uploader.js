var recursive = require('recursive-readdir');
var Curl = require( "node-libcurl" ).Curl;
var url = require("url");

module.exports = function(argv){
  var options;

  options = require('dreamopt')(
      ["Usage: uploader path URL",
      "Arguments:",
      "  <path>    Path to the files to upload #required",
      "  <url>     URL of the AEM instance #required",
      "General options:",
      "  -v, --verbose           Output progress info"
      ],
      argv);

    if (options.verbose) {
        process.stderr.write(JSON.stringify(options, null, 2) + "\n");
    }

    var aem = url.parse(options.url);
    recursive(options.path, function (err, files) {
      // Files is an array of filename
      files.forEach(function(file, index, arr){
        console.log(file);
      });
    });

};
