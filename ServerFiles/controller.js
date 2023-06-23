const path = require('path')
// okay so this os gonna be were all the stuff is made 
module.exports = {
    
addPage: (PageFolderName,PageName,EndPoint , application) => {
    /* If the page name follows the format PageName.js, PageName.css, PageName.html
    this will connnect and EndPoint For you  */ 
    application.get(`/${EndPoint}`, (req, res) => {
        res.sendFile(path.join(__dirname, `${PageFolderName}/${PageName}.html`))
     });
     application.get(`/${EndPoint}js`, (req, res) => {
        res.sendFile(path.join(__dirname, `${PageFolderName}/${PageName}.js`))
  
     });
     application.get(`/${EndPoint}css`, (req, res) => {
        res.sendFile(path.join(__dirname, `${PageFolderName}/${PageName}.css`))
     });
    
    
}
}