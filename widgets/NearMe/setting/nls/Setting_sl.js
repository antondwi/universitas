// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Milje",acronym:"mi"},kilometers:{displayText:"Kilometri",acronym:"km"},feet:{displayText:"\u010cevlji",acronym:"ft"},meters:{displayText:"Metri",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"Nastavitve vira iskanja",searchSourceSettingTitle:"Nastavitve vira iskanja",searchSourceSettingTitleHintText:"Dodaj in konfiguriraj geokodirne storitve ali geoobjektne sloje kot vire iskanja. Ti viri dolo\u010dajo, kaj je mogo\u010de iskati znotraj iskalnega polja",
addSearchSourceLabel:"Dodajte vir iskanja",featureLayerLabel:"Geoobjektni sloj",geocoderLabel:"Geokodirnik",nameTitle:"Ime",generalSettingLabel:"Splo\u0161na nastavitev",allPlaceholderLabel:"Nadomestno besedilo za iskanje:",allPlaceholderHintText:"Namig: Vnesite besedilo, ki bo prikazano kot nadomestno besedilo med iskanjem po vseh slojih in geokodirniku",generalSettingCheckboxLabel:"Poka\u017ei pojavno okno za najdeni geoobjekt ali lokacijo",countryCode:"\u0160ifre dr\u017eave ali regije",countryCodeEg:"npr. ",
countryCodeHint:"\u010ce to vrednost pustite prazno, bo iskanje potekalo po vseh dr\u017eavah in regijah",questionMark:"?",searchInCurrentMapExtent:"I\u0161\u010di samo v trenutnem obsegu karte",zoomScale:"Pove\u010dava merila",locatorUrl:"URL geokodirnika",locatorName:"Ime geokodirnika",locatorExample:"Primer",locatorWarning:"Ta razli\u010dica geokodirnih storitev ni podprta. Pripomo\u010dek podpira razli\u010dico geokodirne storitve 10.0 in novej\u0161o.",locatorTips:"Predlogi niso na voljo, ker geokodirna storitev ne podpira predlagane zmo\u017enosti.",
layerSource:"Vir sloja",setLayerSource:"Nastavi vir sloja",setGeocoderURL:"Nastavi URL geokodirnika",searchLayerTips:"Predlogi niso na voljo, ker geoobjektna storitev ne podpira mo\u017enosti \u0161tevil\u010denja strani.",placeholder:"Nadomestno besedilo",searchFields:"Iskalna polja",displayField:"Prika\u017ei polje",exactMatch:"Natan\u010dno ujemanje",maxSuggestions:"Maksimalno predlogov",maxResults:"Maksimalno rezultatov",enableLocalSearch:"Omogo\u010di lokalno iskanje",minScale:"Minimalno merilo",
minScaleHint:"Ko je merilo karte ve\u010dje od tega merila, bo uporabljeno lokalno iskanje",radius:"Polmer",radiusHint:"Dolo\u010da polmer obmo\u010dja okrog trenutnega sredi\u0161\u010da karte, ki je uporabljeno za pove\u010danje \u0161tevila kandidatov za geokodiranje. Tako so najprej prikazani kandidati, ki so najbli\u017eje lokaciji",meters:"Metri",setSearchFields:"Nastavi iskalna polja",set:"Nastavi",fieldName:"Ime",invalidUrlTip:"URL ${URL} ni veljaven ali dostopen."},searchSetting:{searchSettingTabTitle:"Nastavitve iskanja",
defaultBufferDistanceLabel:"Nastavi privzeto razdaljo obrisa",maxResultCountLabel:"Omejitev \u0161tevila rezultatov",maxResultCountHintLabel:"Namig: Nastavite maksimalno \u0161tevilo vidnih rezultatov. Vrednost 1 bo vrnila najbli\u017eji geoobjekt",maxBufferDistanceLabel:"Nastavi maksimalno razdaljo obrisa",bufferDistanceUnitLabel:"Enote razdalje obrisa",defaultBufferHintLabel:"Namig: Nastavite privzeto vrednost drsnika obrisa",maxBufferHintLabel:"Namig: Nastavite maksimalno vrednost drsnika obrisa",
bufferUnitLabel:"Namig: Dolo\u010dite enoto za ustvarjanje obrisa",selectGraphicLocationSymbol:"Simbol naslova ali lokacije",graphicLocationSymbolHintText:"Namig: Simbol za iskane naslove ali lokacije klika",addressLocationPolygonHintText:"Namig: Simbol za iskane poligonske sloje",popupTitleForPolygon:"Izberite poligon za izbrano lokacijo naslova",popupTitleForPolyline:"Izberite linijo za lokacijo naslova",addressLocationPolylineHintText:"Namig: Simbol za iskani polilinijski sloj",fontColorLabel:"Izberite barvo pisave za rezultate iskanja",
fontColorHintText:"Namig: Barva pisave rezultatov iskanja",zoomToSelectedFeature:"Pribli\u017eaj izbranemu geoobjektu",zoomToSelectedFeatureHintText:"Namig: Pribli\u017eaj izbranemu geoobjektu namesto obrisu",intersectSearchLocation:"Prika\u017ei poligone, ki se sekajo",intersectSearchLocationHintText:"Namig: Vrne poligone na lokacijah iskanja namesto poligonov znotraj obrisa",enableProximitySearch:"Omogo\u010di iskanje bli\u017eine",enableProximitySearchHintText:"Namig: Omogo\u010dite zmo\u017enost iskanja lokacij v bli\u017eini izbranega rezultata",
bufferVisibilityLabel:"Nastavi vidnost obrisa",bufferVisibilityHintText:"Namig: Obris bo prikazan na karti",bufferColorLabel:"Nastavite simbol obrisa",bufferColorHintText:"Namig: Izberite barvo in prosojnost obrisa",searchLayerResultLabel:"Izri\u0161i samo izbrane rezultate slojev",searchLayerResultHint:"Namig: Na karti se bodo izrisali samo izbrani sloji iz iskalnih rezultatov",showToolToSelectLabel:"Nastavite gumb lokacije",showToolToSelectHintText:"Namig: Ponudi gumb za nastavitev lokacije na karti v izogib vsakokratnem klikanju in nastavljanju lokacije na karti",
geoDesicParamLabel:"Uporabi geodetski obris",geoDesicParamHintText:"Namig: Uporabi geodetski obris namesto evklidskega obrisa (planarni)"},layerSelector:{selectLayerLabel:"Izberi sloje iskanja",layerSelectionHint:"Namig: Uporabi gumb Nastavi za izbiro slojev",addLayerButton:"Nastavi"},routeSetting:{routeSettingTabTitle:"Nastavitve navodil za pot",routeServiceUrl:"Storitev usmerjanja",buttonSet:"Nastavi",routeServiceUrlHintText:"Namig: Kliknite \u00bbNastavi\u00ab za brskanje in izberite storitev usmerjanja",
directionLengthUnit:"Enote dol\u017eine v navodilih za pot",unitsForRouteHintText:"Namig: Uporablja se za prikaz enot za pot",selectRouteSymbol:"Izberite simbol za prikaz poti",routeSymbolHintText:"Namig: Uporablja se za prikaz simbola linije poti",routingDisabledMsg:"Da omogo\u010dite navodila za pot, se v nastavitvah aplikacije prepri\u010dajte, da je usmerjanje omogo\u010deno."},symbologySetting:{symbologySettingTabTitle:"Nastavitve simbologije",addSymbologyBtnLabel:"Dodaj nove simbole",layerNameTitle:"Ime sloja",
fieldTitle:"Polje",valuesTitle:"Vrednosti",symbolTitle:"Simbol",actionsTitle:"Dejanja",invalidConfigMsg:"Podvoji polje : ${fieldName} za sloj : ${layerName}"},filterSetting:{filterSettingTabTitle:"Nastavitve filtra",addTaskTip:"Izbranim iskalnim slojem dodajte enega ali ve\u010d filtrov in za vsakega konfigurirajte parametre.",enableMapFilter:"Odstranite prednastavljeni filter sloja s karte.",newFilter:"Nov filter",filterExpression:"Izraz fitra",layerDefaultSymbolTip:"Uporabi privzeti simbol sloja",
uploadImage:"Nalo\u017ei sliko",selectLayerTip:"Izberite sloj.",setTitleTip:"Nastavite naslov.",noTasksTip:"Filtri niso konfigurirani. Kliknite \u00bb${newFilter}\u00ab za dodajanje novega.",collapseFiltersTip:"Strni izraze filtra (\u010de obstajajo), ko je pripomo\u010dek odprt",groupFiltersTip:"Skupini filtre po slojih",infoTab:"Informacije",expressionsTab:"Izrazi",optionsTab:"Mo\u017enosti",autoApplyWhenWidgetOpen:"Ko je pripomo\u010dek odprt, uporabi ta filter"},networkServiceChooser:{arcgislabel:"Dodaj iz ArcGIS Online",
serviceURLabel:"Dodaj URL storitve",routeURL:"URL poti",validateRouteURL:"Potrdi",exampleText:"Primer",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Navedite veljavno usmerjevalno storitev.",rateLimitExceeded:"Zgornja meja omejitve prese\u017eena. Poskusite znova pozneje.",errorInvokingService:"Uporabni\u0161ko ime ali geslo ni pravilno."},errorStrings:{bufferErrorString:"Vnesite veljavno \u0161tevilsko vrednost.",
selectLayerErrorString:"Izberite sloje za iskanje.",invalidDefaultValue:"Privzeta razdalja obrisa ne sme biti prazna. Navedite razdaljo obrisa.",invalidMaximumValue:"Maksimalna razdalja obrisa ne sme biti prazna. Navedite razdaljo obrisa.",defaultValueLessThanMax:"Navedite privzeto razdaljo obrisa znotraj maksimalne omejitve",defaultBufferValueGreaterThanOne:"Privzeta razdalja obrisa ne sme biti manj kot 0",maximumBufferValueGreaterThanOne:"Navedite maksimalno razdaljo obrisa, ve\u010djo od 0",invalidMaximumResultCountValue:"Navedite veljavno vrednost za maksimalno \u0161tevilo rezultatov",
invalidSearchSources:"Neveljavne nastavitve iskanja vira"},symbolPickerPreviewText:"Predogled:",_localized:{}}});