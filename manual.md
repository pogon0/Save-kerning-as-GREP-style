# HMC Save kerning – Version 0.3

- Spara Kerning är ett skript för InDesign som skapar ett teckenformat  
  och GREP-format baserat på manuell kerning för två markerade tecken.  
  Bra för risiga typsnitt och speciellt för textning av serier.  
  Testa först om inte Optisk löser problemparen tillräckligt bra.

- Din text måste ha ett styckeformat.

- Behöver du ta bort något eller redigera det så hittar du alla  
  kerningpar under GREP-format i styckeformatet.

## Installation

1. Lägg filen `HMC-save-kerning_0_3.jsx`i din InDesigns skriptmapp:
   `Program → Adobe InDesign → Scripts → Scripts Panel`
2. Öppna **Scripts-panelen** i InDesign. Skriptet ska nu synas där.

## Lägg till ett snabbkommando

1. Gå till **Redigera → Kortkommandon**.
2. Välj **Skript**.
3. Leta upp `HMC-save-kerning_0_3.jsx` i listan.
4. Klicka på **Ny genväg** och välj en tangentkombination som inte används (t.ex. `Cmd+Shift+K` på Mac).
5. Klicka **OK** för att spara. Nu kan du köra skriptet med snabbkommandot.

## Så här använder du skriptet

1. Markera två tecken i texten.
2. Kör skriptet från Script-panelen (Fönster → Verktyg → Script → Dubbelklicka på skriptet) eller med ditt snabbkommando.
3. Skriptet sparar kerningen, skapar teckenformat + GREP-format och nollställer den manuella kerningen.
