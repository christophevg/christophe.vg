---
layout: archive
index: zeilen
title: Sailing According to Christophe VG
permalink: /zeilen/
grid_teaser: false
locale: nl
---

Reeds sinds vele jaren heeft de zeilmicrobe me te pakken. Na begonnen te zijn op caravelle, optimist, cadet, vaurien, 420, fireball, ... kwam ik in contact met catamaranzeilen. Het was liefde vanaf het eerste halve windse rack. Na een tweetal weken les genomen te hebben bij Bloso en vervolgens terecht gekomen te zijn op de Beachclub Duinbergen van de RBSC, was het hek van de dam. Cat-zeilen is niet alleen mijn ding, het is een verslaving die niet meer uit mijn bloed te weren is. Reeds het tweede seizoen dat ik op een cat zeilde kon ik mij de trotse eigenaar noemen van mijn eigen cat ... Waterproof, een Dart 18. Ik had er nog niet eerder aan gedacht, maar eigenlijk moet ik wel een stukje van mijn domein speciaal toewijden aan de waanzinnig leuke wereld van het zeilen. Op deze pagina's vind je verhalen van op zee en daarrond.

## Een beetje voorgeschiedenis

In 1988 ben ik overgestapt van zwaardboten naar het cat-zeilen. De start was
bijna het einde geweest van de meest indringende sportervaring uit mijn leven.
Tijdens een Bloso zeilkamp in Heist onder de leiding van een totaal
onverantwoord monitor was ik bijna overtuigd dat ik nooit meer op een cat wou
plaatsnemen. Gelukkig overhaalden mijn ouders me, die duidelijk een
verliefdheid voor de catamaran in mijn ogen hadden opgemerkt, om toch nog eens
te proberen. Zo kwam ik in contact met Bernard (ik ben doorheen de jaren zijn
familienaam vergeten). Hij had een Dart 20, een Stampede. Met Bernard heb ik
een ongelooflijke leuke periode gehad. Hij leerde mij de fijne kneepjes van
het cat-zeilen. Ik was verkocht.

Na een seizoen met Bernard, zijn fokkenmaat (ook) Bernard en Sven Janssens,
beachmaster van de beachclub in het Zoute, gezeild te hebben op de Stampede en
de "Pink Panther", Sven's Dart 18, was er stilaan geen houden meer aan.
Tijdens mijn afwezigheid gedurende de paasvakantie van 1991 besloten mijn
ouders een grote verrassing klaar te stomen. De "Pink Panther" van Sven was te
koop. Echter op het laatste moment besloot hij om hem niet te verkopen. Op dat
moment heeft Patrick De Mesmaecker toen nog van Wishbone, later Passion, de
lokale zeilshop besloten om deze gefaalde verkoop toch nog goed te maken. Het
resultaat was dat mijn ouders een Dart 18 van 1989 konden kopen aan dezelfde
voorwaarden als de "Pink Pather" verkocht zou worden. Toen ik terugkwam van
mijn Rome-reis lag er op het strand van Duinbergen een gloednieuwe Dart 18 op
mij te wachten.

Tijdens de seizoenen 90, 91, 92, 93, 94 & 98 heb ik samen met verschillende
fokkenmaten fantastische dagen doorgebracht op het wateren tussen Zeebrugge en
Vlissingen. Met Patrick Van Coolput, mijn kozijn, heb ik de eerste paar jaar
een onafscheidelijk top-duo gevormd. We konden echt het beste uit de die
kleine Dart halen, the sky was the limit, en die hebben we een paar keer van
heel dichtbij gezien. Later heb ik met Francois niet alleen een tijdje monitor
gespeeld op de zeilschool van Duinbergen, maar ook enkele fantastische
wedstrijden gezeild. Na een korte onderbreking heb ik in 98 nog genoten van
het zeilen met een kot-genoot, Mark Van Mulders ... de toekomst zag er boeiend
uit. Maar met het aanvatten van het einde van mijn studies, met een periode in
het buitenland en het begin van mijn professionele carriere bij Ubizen, vond
ik geen tijd meer om mijn cat opnieuw op het strand te leggen tot ...

## Here we go again

... 2004 !

Bij het begin van het zeilseizoen 2004 lag Waterproof opnieuw met zijn
slijtlagen in het zand van de Belgische kust. Niet langer in Duinbergen, maar
na lang zoeken, en door toedoen van Tom, de beachmaster van SYCOD, de Sand
Yacht Club Oost-Duinkerke nu in de Westhoek. Mijn "nieuwe" fokkenmaat is
opnieuw top-of-the-bill, Mark Van Mulders, met wie ik de vorige eeuw ook
afsloot. Na een afwezigheid van vijf seizoenen zal Waterproof de Belgische
kustwateren weer onveilig maken :)

## And again

... 2008 !

Na opnieuw 4 fantastische zeilseizoenen, werd het tijd om afscheid te nemen
van Waterproof. Zeilseizoen 2008 begon met een stevige investering in een
heuse Formula18 catamaran genaamd Boosui ...

## And again

... 2021 !

Boosui leverde enkele mooi zeiltochten op tot 2016. Na opnieuw een onderbreking van een kleine vijf jaar bracht onze tocht zich terug naar onze roots in Duinbergen. Nu ook met een nieuwe generatie van zeilende Van Ginnekens in aantocht.

{% include base_path %}
{% include group-by-array collection=site.posts field="categories" %}
{% assign sorted_posts = site.categories[page.index] %}
<div class="grid__wrapper">
  {% for post in sorted_posts %}
    {% if post.layout != "redirect" %}
      {% include archive-single.html type="grid" %}
    {% endif %}
  {% endfor %}
</div>
