/*
+-------------------------------------------------------------+
| Spara Kerning är ett skript för InDesign som sparar        |
| manuell kerning som ett GREP-format. Bra för risiga        |
| typsnitt och speciellt för textning av serier.             |
|                                                            |
| Save Kerning is an InDesign script that saves manual       |
| kerning in GREP format. Useful for messy fonts and         |
| especially for typesetting comics.                         |
+-------------------------------------------------------------+
*/

var doc = app.activeDocument;
var sel = app.selection;

if (sel.length !== 1 || !(sel[0] instanceof Text)) {
  alert("Markera exakt två tecken för att använda skriptet.");
} else {
  var text = sel[0];
  if (text.characters.length !== 2) {
    alert("Markera exakt två tecken för att använda skriptet.");
    exit();
  }

  var char1 = text.characters[0];
  var char2 = text.characters[1];
  var kerningValue = char1.kerningValue;

  if (isNaN(kerningValue) || kerningValue === null) {
    alert(
      "Kunde inte hämta kerningvärdet. Se till att ett manuellt kerningvärde är inställt."
    );
    exit();
  }

  var charCombination = char1.contents + char2.contents;

  if (kerningValue === 0) {
    alert("Kerningvärdet är 0. Skriptet avslutas.");
    exit();
  }

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

  try {
    grepStyle = paraStyle.nestedGrepStyles.add();
    grepStyle.appliedCharacterStyle = charStyle;
    grepStyle.grepExpression = char1.contents + "(?=" + char2.contents + ")"; // Endast första tecknet i kombinationen
  } catch (e) {
    alert("Kunde inte lägga till GREP-format.");
  }

  // Nollställ det manuella kerningvärdet
  char1.kerningValue = 0;

  alert(
    "Kerningvärdet har applicerats som teckenformat och kopplats till GREP-formatet i styckeformatet. Det manuella kerningvärdet har nollställts."
  );
}
