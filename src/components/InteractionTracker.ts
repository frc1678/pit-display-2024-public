/**
 * Called in all navigation locations to track when various buttons or navigation items are pressed
 * @param navtype - the type of navigation that is happening (ex. 'switchModel', 'pageSwitch')
 * @param action - the specific action being tracked; button pressed, scrolling, etc. (ex. 'drivetrain', 'ProgrammingOutline')
*/ 
export function trackActions(navtype: String, action: String) {
    const fs = require('fs'); // imports fs for file system access
    const timestamp = new Date().toLocaleString(); // Get current timestamp
    const date = new Date();
    const month = date.getMonth()+1; // Months are zero-indexed (January is 0)
    const day = date.getDate();
    const filePath = `./pitDisplayInteractionLogs_${month}_${day}`; // Creates a new file if it doesn't find a file with that name
    // Writes to the file
    fs.appendFile(`${filePath}`, `${timestamp}, ${navtype}, ${action} \n`, (err:String) => {if (err) throw err;})
    //console.log(`${timestamp}, ${navtype}, ${action}`); // Log to console for testing 
}
