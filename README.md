# 🇸🇪 HMC Spara kerning | 🇬🇧 HMC Save kerning

🇸🇪 Ett skript för Indesign som sparar manuell kerning av ett bokstavspar i GREP-format.  
Bra för risiga typsnitt och speciellt för textning av serier.

🇬🇧 A script for Indesign that saves manual kerning of a letterpair as a GREP-style.  
Useful for sloppy fonts and especially for lettering comics.

<img width="1050" height="740" alt="HomeMadeComics-Hero-SaveKerning" src="https://github.com/user-attachments/assets/9dee20e3-341c-4fa4-967e-15edac6fe6b7" />

## 🇸🇪 Så varför inte bara korrigera fonten?

- Kräver mer kunnande.
- Kräver annan programvara.
- Leder lätt till versionsstrul.
- Licensen tillåter det kanske inte.
- Svårt att iterera.

## 🇬🇧 So why not just fix the font?

- Requires more expertise.
- Requires additional software.
- Easily leads to version conflicts.
- The license might not allow it.
- Hard to iterate on.

## 🇸🇪 Då funkar HMC Spara kerning bäst
- Med typsnitt som har samma versala tecken på både versalen och gemenens plats i typsnittet. Exempelvis gamla `Anime Ace` och `WhizBang`.
- Med typsnitt som har _olika_ versala tecken på versalen och gemenens plats i typsnittet. Exempelvis moderna typsnitt från Blambot eller Comicraft
- Med vanliga typsnitt men du använder bara versalerna. Som `Comic Sans`.

**Scriptet lägger till ett GREP som ser ut såhär: `[vV](?=[aA])`.**  
Alltså både versalen och gemenen av det markerade tecknen får teckenformatet.  
Skriptet är alltså INTE bra för mer normala behov med vanliga typsnitt med versaler och gemener blandat.

## 🇬🇧 HMC Save Kerning works best
- With fonts that have the same uppercase glyphs in both the uppercase and lowercase slots. For example, older `Anime Ace` and `WhizBang`.
- With fonts that have _different_ uppercase glyphs in the uppercase and lowercase slots. For example, modern fonts from Blambot or Comicraft.
- With regular fonts, but you only use uppercase letters. Like `Comic Sans`. 

**The script adds a GREP that looks like this: `[vV](?=[aA])`.**  
This means both the uppercase and lowercase versions of the selected character receive the character style.  
The script is therefore NOT suitable for more typical needs with standard fonts that mix uppercase and lowercase letters.
