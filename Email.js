function sendEmail(myEmail) {
    var dataS = SpreadsheetApp.getActiveSpreadsheet()
    var sheet = dataS.getSheetByName("Customers"); 
    // READ DATA
    var email = Session.getActiveUser().getEmail() //
    // etc. add any other variable you want to include
    
    // The message is written in HTML, so you can use any HTML you like to change font size, face, color or even add images
    var message = "Dear " + email + ", <br> Thank you for your stay at </br> <br>  <img src='https://i.ibb.co/NSvS4ZB/the-rong-restaurant.png'> <br/> <br> Have a wonderful day! </br> " 
    //  <br/> is a line break, so this ends the line then adds a blank line
    var myMessage = "Brian, " + email + " Someone just bought " + ", </br> </br>"   
    
    //  <br/> is a line break, so this ends the line then adds a blank line
    // You can insert varables by using the variable and join with "+" like above
    // repeat lines like below to "write" your email
    //message = message + "You owe us money!<br/><br/>"
    
    
    var subject = "Invoice" // enter the subject line of the email
    var mysubject = "A Customer Has Made a Purchase"
    
    // This is code that 
    var advancedArgs = {htmlBody:message};
    var veryadvancedArgs = {htmlBody:message}; 
    MailApp.sendEmail(email, subject, message , advancedArgs);
    MailApp.sendEmail(myEmail, mysubject, myMessage , veryadvancedArgs);

}
