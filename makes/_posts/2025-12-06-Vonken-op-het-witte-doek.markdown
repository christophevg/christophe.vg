---
title: Vonken op het witte doek
header:
  teaser: /makes/images/thumb/vonk/vonk.png
  image: /makes/images/header/vonk.png
tags:
  - lasercutting
  - airbrushing
  - fun
  - wip
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

## Next: Tracen

...
