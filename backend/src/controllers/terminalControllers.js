// Import access to database tables
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all terminals from the database
    const terminals = await tables.terminal.readAll();

    // Respond with the terminals in JSON format
    res.status(200).json(terminals);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// // The R of BREAD - Read operation
// const read = async (req, res, next) => {
//   try {
//     // Fetch a specific terminal from the database based on the provided ID
//     const terminal = await tables.terminal.read(req.params.id);

//     // If the terminal is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the terminal in JSON format
//     if (terminal == null) {
//       res.sendStatus(404);
//     } else {
//       res.status(200).json(terminal);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
// const add = async (req, res, next) => {
//   // Extract the terminal data from the request body
//   const terminal = req.body;

//   try {
//     // Insert the terminal into the database
//     const insertId = await tables.terminal.create(terminal);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted terminal
//     res.status(201).json({ insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  // read,
  // edit,
  // add,
  // destroy,
};
