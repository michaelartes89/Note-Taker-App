// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
    //connecting the CSS file
    app.get("/assets/css/styles.css", function(request, response) {
        response.sendFile(
           path.join(__dirname, "../public/assets/css/styles.css")
        );
     });
  
     // connecting the JS file 
     app.get("/assets/js/index.js", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
     });
  

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
  });


};
