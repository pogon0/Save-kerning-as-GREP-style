/*
+------------------------------------------------------+
| Spara kerning är ett skript för Indesign som sparar  |
| manuell kerning som GREP-format. Bra för risiga      |
| typsnitt och speciellt för textning av serier.       |
|                                                      |
|        HMC Save kerning • VERSION 1.0-beta           |
|        Ola Forssblad • homemadecomics.org            |    
|                                                      |
| Save Kerning is an Indesign script that saves manual |
| kerning in GREP format. Useful for sloppy fonts and  |
| especially for lettering comics.                     |
+------------------------------------------------------+
*/

var doc = app.activeDocument;
var sel = app.selection;

// Kontrollera markeringen
if (sel.length !== 1 || !(sel[0] instanceof Text)) {
  alert("Markera exakt två tecken.");
} else {
  var text = sel[0];
  if (text.characters.length !== 2) {
    alert("Markera exakt två tecken.");
    exit();
  }

  var char1 = text.characters[0];
  var char2 = text.characters[1];

  // -------------------------------
  // FELHANTERING: läs kerning med try/catch
  var kerningValue;
  try {
    kerningValue = char1.kerningValue;
  } catch (e) {
    alert("De markerade tecknen har ingen manuell kerning.");
    exit();
  }

  // Extra säkerhet: om kerning är 0 eller ogiltigt
  if (kerningValue === 0 || kerningValue === null || isNaN(kerningValue)) {
    alert("De markerade tecknen har ingen manuell kerning.");
    exit();
  }
  // -------------------------------

  // Namn på teckenformat baserat på kerningvärde
  var charStyleName = "Kerning " + kerningValue;
  var charStyle;

  try {
    charStyle = doc.characterStyles.itemByName(charStyleName);
    if (!charStyle.isValid) throw "Not Found";
  } catch (e) {
    charStyle = doc.characterStyles.add({
      name: charStyleName,
    });
  }

  charStyle.tracking = kerningValue;

  var paraStyle = char1.appliedParagraphStyle;
  var grepStyle;

  // Skapa GREP-formatet
  try {
    grepStyle = paraStyle.nestedGrepStyles.add();
    grepStyle.appliedCharacterStyle = charStyle;

    // Både första och andra tecknet får VERSALER och gemener.
    var firstChar = char1.contents;
    var secondChar = char2.contents;

    var grepFirstChar =
      "[" + firstChar.toLowerCase() + firstChar.toUpperCase() + "]";
    var grepSecondChar =
      "[" + secondChar.toLowerCase() + secondChar.toUpperCase() + "]";

    grepStyle.grepExpression = grepFirstChar + "(?=" + grepSecondChar + ")";
  } catch (e) {
    alert("Kunde inte lägga till GREP-format.");
  }

  // Nollställ den manuella kerningen
  char1.kerningValue = 0;

  alert(
    "Kerning sparad till teckenformat och kopplat till GREP-format. Manuell kerning nollställd."
  );
}
