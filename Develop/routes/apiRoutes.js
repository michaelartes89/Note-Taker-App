//Load Data

let dbJSON = require("../db/db")

// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    
    // ---------------------------------------------------------------------------
  
    app.get("/api/notes", function(req, res) {
      res.json(dbJSON);
      
    });
      // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.

  
    app.post("/api/notes", function(req, res) {
      dbJSON.push(res.req.body);
      res.end("yes");

    });

    //Delete Items
  
  
    app.delete("/api/notes/:note", function(req, res) {
        let newDbJSON = [];
        const thisNoteID = req.params.note;
        const noteToDelete = dbJSON.map(note => {
           if (note.id !== thisNoteID) {
              newDbJSON.push(note);
           }
        });
  
        dbJSON = newDbJSON;
  
        res.end();
      });
   
};