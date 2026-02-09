---
title: Vonken op het witte doek
header:
  teaser: /makes/images/thumb/vonk/vonk.png
  image: /makes/images/header/vonk.png
tags:
  - lasercutting
  - airbrushing
  - fun
folder: vonk
thumbs:
  files:
    procedure-stap-1:
      kind: png
    procedure-stap-2:
      kind: png
    procedure-stap-3:
      kind: png
    procedure-cutout:
      kind: png
    procedure-stap-4:
      kind: png
    procedure-stap-5:
      kind: png
    procedure-stap-6a:
      kind: png
    procedure-stap-6b:
      kind: png
    procedure-stap-6c:
      kind: png
images:
  files:
    donkergrijs-before:
      kind: png
    donkergrijs-after:
      kind: png
---

In 2025 heb ik me opnieuw ingeschreven voor een opleiding aan de kunstacademie: grafisch ontwerp en illustratietechnieken. Als ik voor mezelf geen morele verplichting inbouw om aanwezig te zijn op donderdagavond, komen er altijd wel tal van andere "belangrijkere" dingen tussen en verdwijnt een beetje creatieve tijd op een wip en een gauw onder de mat. Zelfs met een opleiding als goede reden, blijft het nog een hele uitdaging, echter toch lukt het me om de meeste van m'n opdrachten tot een goed einde te brengen.

Één van die opdrachten was het maken van een origineel werk voor een expo in februari 2026. Het thema was "vonk". Binnen dat thema heb ik gekozen om een groot werk te maken dat als een opstelling in de ruimte écht aanwezig zal zijn.

## Het idee

Ik heb mijn vonk gevonden in een andere passie: films. Ik wil op witte doeken, negen iconische vonken van het witte doek uitwerken. Mijn witte doeken zijn lichtdoorlatende stroken witte stof, ongeveer 65cm breed en 2 à 3m lang. De randen zijn afgewerkt als de perforatie van een filmrol en ongeveer halverwege komt een in 3 grijstinten, met stencils geairbrushte stillering van een echte vonk tussen twee personages uit een iconische film. Die negen filmrolletjes worden vervolgens als een soort doolhof, waar je tussendoor kan/mag/moet lopen, opgehangen in de ruimte van de expo.

Yep, het kon weer niet eenvoudiger 😇

## De selectie

Stap één was het zoeken van die iconische moment uit de filmgeschiedenis. De lijst was snel gevonden:

{% include thumbs show="brokeback-mountain,my-girl,dirty-dancing,romeo-and-juliet,ghost,spiderman,gone-with-the-wind,the-notebook,interview-with-the-vampire,titanic,jerry-maguire,you-ve-got-mail,la-la-land" %}

13 iconische scenes tussen acteurs die niemand onberoerd hebben gelaten. Echter, ik had negen in gedachten en negen zou sowieso ook al een heel werkje zijn om klaar te krijgen. Dus moesten er om te beginnen al 4 sneuvelen.

Om de keuze wel op basis van de beoogde vormgeving te maken, had ik eerst al een snelle omzetting gedaan naar het kleuren-pallet dat ik voor ogen had: een witte achtergrond, zwart en twee tinten grijs. Met een "contactsheet" liet ik mijn collega cursisten stemmen op hun favoriete vijf vonken:

{% include image name="contact" kind="png" %}

De vonken die ik op die manier dan uiteindelijk ga uitwerken zijn:

1. Spiderman
2. Dirty Dancing
3. Titanic
4. Gone with the Wind
5. Ghost
6. La La Land
7. My Girl
8. Brokeback Mountain
9. Interview with the Vampire

## De stillering

Photoshop was al een goeie hulp geweest bij de eerste snelle omzetting naar m'n kleuren-pallet, echter die omzetting was nog lang niet goed genoeg om er drie stencils van te maken. Die procedure vroeg toch een namiddag prutsen om goed te krijgen.

### Stap 0: Maak een nieuw canvas aan

Ik heb gekozen voor een A3 formaat, want dat is ongeveer de echte grootte dat ik de stencils ga lasercutten. Dat dit dan ongeveer een 65cm breed resultaat zal opleveren is geheel toevallig en heeft echt niets te maken met 65mm brede filmrolletjes 😇

### Stap 1: Importeer de originele foto
{% include thumbs show="procedure-stap-1" %}

De eerste stap is eenvoudig: importeer de originele foto, e.g. sleep hem gewoon op het canvas en maximaliseer de grootte op het canvas. (Enter "bevestigt" blijkbaar de plaatsing 😉)

### Stap 2: Verwijder achtergrond
{% include thumbs show="procedure-stap-2" %}

Stap 2 kan snel gedaan zijn, soms ook niet. Met een bitmap foto op het canvas, biedt Photoshop al snel aan om de achtergrond te verwijderen. Omdat mét achtergrond de omzetting naar 2 grijstinten dikwijls er echt niet goed komt uit te zien, mag het algoritme z'n ding doen.

Dat is meestal best oké, echter soms worden stukken niet herkend als achtergrond en moet je zelf nog wat bijwerken, door extra masking toe te voegen met een brush.

### Stap 3: Cutout Filter
{% include thumbs show="procedure-stap-3" %}

De eerste filter die wonderen doet had ik al eerder gebruikt, bij de snelle omzetting voor het contactsheet: de cutout filter uit de filter galerij. Deze laat al toe om een afbeelding om te zetten in een beperkte zet van kleuren en ruwere vormen.

{% include thumbs show="procedure-cutout" %}
De instelling met 3 levels levert een afbeelding op met wit en drie kleuren.

En, neen, eerst omzetten naar zwart wit en vervolgens deze filter er op toepassen leverde geen sneller of beter resultaat op.

### Stap 4: Zwart Wit
{% include thumbs show="procedure-stap-4" %}

Een omzetting naar zwart wit laat toe om nog wat te spelen met hoe de kleuren juist omgezet worden naar grijs tinten. Het is ook de enige manuele interventie in deze voor de rest volledig exacte procedure.

### Stap 5: Posterize Adjustment Layer
{% include thumbs show="procedure-stap-5" %}

Ik vermoed dat deze laatste stap eigenlijk bijna overbodig is, echter ik had het gevoel dat het nog nét dat ietsje meer deed 😇 De Posterize adjustment layer laat toe om het aantal kleuren exact nog eens te reduceren na de omzetting naar zwart wit.

### Stap 6: Splits kleuren
{% include thumbs show="procedure-stap-6a,procedure-stap-6b,procedure-stap-6c" %}
Nu de afbeelding uit vier kleuren bestaat, kunnen we zwart en grijstinten selecteren en op een aparte layer zetten.

> Werken met Photoshop betekent layers, layers, layers.
> `cmd + option + shift + e` neemt alle geselecteerde lagen samen en het resultaat komt in een nieuwe laag terecht. Dit is nodig om sommige andere filters of operaties te kunnen uitvoeren.
> `cmd + j` neemt de huidige selectie en plakt deze in een nieuwe laag
> Zo bekom je normaal gezien een propere layering:
> {% include image name="procedure-layers" kind="png" %}

## Stencils

Ik ga de stencils maken met mijn laser cutter en dikke vellen A3 (misschien A2 😇) papier. Mijn cutter heeft nood aan vector tekeningen dus ik wil de gestileerde foto voor elke kleur "tracen".

Voor dat weer een doenbaar resultaat oplevert gaan de drie uitgesplitste kleuren wel nog wat opgekuist/vereenvoudigd moeten worden.

### stap 7: Vereenvoudigen

Vereenvoudigen betekent het wegvegen van zovele mogelijk kleine artefacten en delen die er in het uiteindelijke resultaat toch niet echt toe doen. Om dit toch wat in true-Photoshop-spirit te doen en te werken met een niet-destructieve layer mask.

Er is geen echte keyboard shortcut, dus het toevoegen van een layer mask vraagt een muis/trackpad clickje.

{% include image name="layer-mask" kind="png" bottom="15px" %}

Dat doen we voor elke uitgesplitste kleur.

{% include image name="layer-masks" kind="png" bottom="15px" %}

Wanneer we nu met de brush tool op dézé layer mask met zwart schilderen, onderdrukken we de pixels van de uitgesplitste kleur.

Repeat voor elke kleur, zodat alle overbodige klein vlakjes of lijntjes weg zijn (💡 click op een afbeelding om te vergroten, switch back/forth met de pijltjes om het verschil te zien):

{% include images show="donkergrijs-before,donkergrijs-after" %}

### stap 8: Naar Illustrator

Tijd om de drie vereenvoudigde kleuren te exporteren naar Illustrator om ze te tracen.

> Tip: gebruik niet de "Quick export" functionaliteit, want die reduceert de afbeelding tot een minimale "bounding box" en dan wordt het moeilijk om de drie lagen op elkaar af te stemmen.  
> Doe wel: Maak alle de drie lagen zichtbaar en gebruik `File > Export > Export Layers to Files`, activeer `Visible Layers Only`, zet het formaat op `PNG-24`, zorg dat `Transparency` aangevinkt is, en _essentieel_ zet het vinkje bij "Trim Layers" _af_. Druk op `Run` en laat Photoshop zich een beetje amuseren 🤓

Start een A3 document in Illustrator en maak er drie lagen in aan, eentje voor elke kleur. Sleep er de kleuren één voor één elk op hun eigen laag.

Vanuit het `Properties` paneel, kies de Quick Action `Image Trace`. Kies als instelling `Shades of Grey`. Click nu nog op `Expand` om de trace effectief door te voeren. Geef de lijn een kleurtje en de zet de opvulling op onzichtbaar.

{% include image name="traced" kind="png" bottom="15px" %}

Exporteer als SVG en we zijn klaar voor de laser cutter.

## Cutting & Air Brushing

Tijd voor een eerste test op stof!

{% include thumbs show="test1-negatieven,test1-stencils" %}
Met de laser cutter zijn de drie stencils in ongeveer 20 minuten klaar voor gebruik. Ik had even zin om met de restanten nog iets te maken, echter, zoals snel zal blijken, heb ik m'n handen al vol genoeg.

{% include video id="8er8TDeiuTQ" name="vonk/test1-video" kind="jpeg" %}
Een foto zegt meer dan 1000 woorden, een video nog eens 24x zoveel? 😇

{% include image name="test1" %}

## Tussentijdse conclusie

Het resultaat van de eerste test is zonder meer een succes. Het komt veel beter tot z'n recht dan ik gedacht had en de eerste stof (van de drie die ik gekocht had) is perfect. Er zijn massa's "fouten", echter, en dat vind ik dan weer het mooie, die vallen helemaal niet op en maken het allemaal feitelijk nog veel mooier. Neen, ik ga niet verklappen welke 😉

De video toont (natuurlijk) niet het zoeken naar een manier om de drie stencils mooi uitgelijnd te krijgen op de stof. Dat sloeg best tegen en ik moet toegeven dat groter dan dit stuk stof, ±A3, ga ik niet moeten proberen met de huidige middelen die ik heb.

Tussentijdse conclusie: ik ga absoluut de 9 vonken op witte doeken maken, echter iets kleiner dan eerst gepland, niet als lange doeken van 2m, en zonder de randen van een filmrolletje na te bootsen.

Ik ga de komende dagen rustig eens nadenken hoe ik met die 9 stukken wit doek dan een andere leuke opstelling kan maken... to be continued tegen februari 😋

## Back to the Beginning

Helemaal in het begin, had ik een idee om 9 iconische film-vonk-beelden te verwerken in één werk. Naar dat initiële ben ik terug gegaan, inclusief de film-frames en de rode draad (ook inclusief een strak plan om alles op tijd klaar te krijgen):

{% include image name="ontwerp" kind="jpeg" bottom="15px" %}

En soms ontstaat iets moois als neveneffect van gewoon wat ondersteuning...

{% include image name="neveneffecten" kind="jpeg" bottom="15px" %}

{% include video id="BcqUroVvyL8" name="vonk/productie-video" kind="png" %}
En zo'n 30 uur aan productie tijd, vliegt zo voorbij in 2 minuten met een leuk muziekje 😇

En na nog eens een 4tal uur opstellen, was "Vonken op het witte doek" klaar voor de expo en kon mijn kunstwerkje echt tot leven komen wanneer bezoekers het eindelijk konden komen bekijken.

{% include image name="expo" kind="jpeg" bottom="15px" %}
