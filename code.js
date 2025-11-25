var color;
var font;
var fontSize;
var quote;

 
//changes the text in the quoteOutput
onEvent("quoteInput", "input", function( ) {
   quote = getText ("quoteInput");
  setProperty("quoteOutput", "text", quote );
  updateScreen();
});

//Changes the font the quoteOutput
onEvent("fontFamilyInput", "click", function( ) {
  updateFont();
  updateScreen();
});
//changes the background color of the quote
onEvent("colorInput", "click", function( ) {
  updateColor();
  updateScreen();
});

//changes the font size of the text in quoteOutput
onEvent("fontSizeInput", "click", function( ) {
  updateFontSize();
  updateScreen();
});

//function to change the font
function updateFont() {
   font = getText("fontFamilyInput");
  setProperty("quoteOutput", "font-family", getText("fontFamilyInput"));
}

//function to change the background color
function updateColor() {
  color = getText("colorInput");
  setProperty("quoteOutput", "background-color", getText("colorInput"));
}

//function to changes the font size
function updateFontSize() {
  fontSize = getNumber("fontSizeInput");
  setProperty("quoteOutput", "font-size", getText("fontSizeInput"));
}
//fucntion to display the 
function updateScreen () {
  if ( color == "lavedner" && font == " Ariel") {
   setText("feedbackOutput", " Great Job!");
  } else if ( color == "lightgreen" && font == "Georgia") {
    setText("feedbackOutput", "Fabuolus!");
  } else {
    setText("feedbackOutput", "Amazing!");
    
  }
   }

