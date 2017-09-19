---
title: Novid Kiosk
header:
  teaser: /embedded/images/thumb/novid-kiosk.jpeg
  image: /embedded/images/header/novid-kiosk.jpeg
tags:
  - professional
  - portfolio
---

Tijdens de 2016 editie van Fri3d Camp, ontstond het idee bij de CEO van Novid om een eigen online content-management platform te laten ontwikkelen als vervanging voor de dure media players waar zij tot op dat moment moesten op  vertrouwen.

Na enkele proof-of-concepts met sub-Ghz communicatie en Google ChromeOS werd in de lente van 2017 dan het startschot gegeven voor de ontwikkeling van de Novid Kiosk op basis van het Raspberry Pi 3 embedded platform.

De business case voor deze onderneming was overduidelijk: een klassieke media player kost al snel &euro;300, en daar moet meestal nog een jaarlijkse abonnementskost bijgeteld worden. Een Raspberry Pi 3, inclusief behuizing en stroomvoorziening komt ongeveer op &euro;50, met nog redelijke kortingen bij aankoop van grotere aantallen. Met verschillende honderden kiosken in het vooruitzicht, was een eenmalige investering om een eigen ontwikkeling te starten een zeer interessante piste.

## Novid Kiosk Platform

De eerste versie van het Novid Kiosk Platform prototype bestaat uit vier delen: 

1. De **Novid Kiosk**
2. Een **Kiosk Manager**
3. **Dropbox** integratie
4. De **Novid Cloud**

![Novid Kiosk Platform](/embedded/images/full/novid-kiosk-platform.jpeg)

### De Novid Kiosk

De Novid Kiosk vormt natuurlijk de essentie van de oplossing: het is dé media player die met alle schermen die Novid aanbiedt kan verbonden worden via een HDMI kabel.

Een eerste zeer belangrijke eigenschap van de kiosk is dat deze volledig autonoom kan werken. Dit aspect is ingebouwd vanaf het embryonale begin, waar de software zichzelf volledig vanaf een blanke, standaard Rasberry Pi opbouwt tot een volledig operationele online kiosk.

In een situatie waar vele honderden kiosken weldra de schermen van Novid zullen aansturen, is het onmogelijk om al deze systemen manueel te installeren en configureren.

### De Kiosk Manager

Eens een kiosk online komt kan deze in eerste plaats verder geconfigureerd worden via de Kiosk Manager. Deze manager kan alle aspecten van de kiosk aanpassen, en dit voor één specifieke kiosk, of meerdere tegelijkertijd.

Aan de hand van de Kiosk Manager kan in hoofdzaak een toekomstige configuratie van het draadloze netwerk waar de kiosk operationeel zal zijn, voorzien worden.

### Dropbox integratie

Want eens de kiosk op zijn plek staat en verbonden is met het netwerk van een klant, is het aanpassen van wat de kiosk op het scherm toont echt kinderspel. Door eenvoudigweg de gewenste inhoud naar een map in een Dropbox te slepen, zal deze automatisch via het internet gedeeld worden met de kiosk, die vervolgens deze inhoud zal weergeven.

Dit maakt het beheer van een kiosk voor Novid zeer eenvoudig, zelfs als deze zich op een verre locatie bevindt, waar zij verder geen toegang toe hebben.

Naar klanten toe, kan Novid tevens deze map delen, waardoor de klant zelf op deze zeer eenvoudige manier de inhoud van zijn scherm kan beheren.

### De Novid Cloud

Tot slot kunnen alle kiosken ook verder beheerd worden via de Novid Cloud. Daar waar de Kiosk Manager direct communiceert met de kiosken, zullen operationele kiosken te raden gaan bij de Novid Cloud om eventuele aanpassingen aan hun configuratie op te halen, en om informatie over hun werking te rapporteren. Op die manier kan Novid zijn kiosken ten allen tijde in groot detail opvolgen.

{% include for-hire.html %}
