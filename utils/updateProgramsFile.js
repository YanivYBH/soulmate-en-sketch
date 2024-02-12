// utils/updateProgramsFile.js

const fs = require('fs');
const path = require('path');

/**
 * Adds a list of programs to the existing JSON file.
 * 
 * @param {Array} newPrograms - Array of new programs to add.
 */
function addProgramsToFile(newPrograms) {
  // Define the path to your JSON file
  const filePath = path.join(process.cwd(), 'data', 'programs.json');

  // Ensure the directory exists (create if not)
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Read the current programs from the file, if it exists
  let existingPrograms = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    existingPrograms = JSON.parse(fileContent);
  }

  // Combine the existing programs with the new programs
  const updatedPrograms = [...existingPrograms, ...newPrograms];

  // Write the updated list back to the file
  fs.writeFileSync(filePath, JSON.stringify(updatedPrograms, null, 2), 'utf8');
}

module.exports = addProgramsToFile;
