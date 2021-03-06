{
    "source_available_wms": {
        "content": "<p>Fügen Sie hier vorhandene WMS-Dienste hinzu um diese als Quelle für den MapProxy zu verwenden. Nach dem Hinzufügen können Sie die Layer und die URL per Drag & Drop hinzufügen.</p>Über die <strong>Weltkugel</strong> haben Sie die Möglichkeit sich den Dienst anzuschauen."
    },
    "sources_name": {
        "content": "Geben Sie hier den Namen der Quelle ein. Der Name dient später zur Identifikation."
    },
    "sources_url":{
        "content": "Über die URL wird der Dienst abgefragt. Diese können Sie per Hand eingeben oder per Drag & Drop aus der Seitenleiste hinzufügen."
    },
    "sources_layers": {
        "content": "Definieren Sie hier die Layer die abgerufen werden sollen. Die Layer werden in der unten angegebenen Reihenfolge – von unten nach oben – abgefragt."
    },
    "sources_manual_add_layers": {
        "content": "Fügen Sie Layer manuell hinzu. \n Dies ist zum Beispiel notwendig wenn der Original-WMS kein Capabilities-Dokument ausliefert."
    },
    "sources_supported_formats": {
        "content": "Unterstützt Ihre Sources nur ein bestimmtes Bildformat? Dann können Sie dieses hier einstellen. Falls keine Einstellung vorgenommen wird, wird das Format des Caches verwendet."
    },
    "sources_add_wms": {
        "content": "Fügen Sie hier die URL Ihres Quell-Dienstes ein. Das System fragt das Capabilities-Dokument ab und zeigt Ihnen die vorhandenen Informationen an. Layer und WMS-URL können Sie dann per Drag & Drop in die Source ziehen."
    },
    "sources_coverage": {
        "content": "Über die Angabe eines Coverages können Sie die Quelle auf einen bestimmten Bereich begrenzen. Geben Sie eine BoundingBox ein oder Zeichnen Sie ein Polygon in der Karte."
    },
    "sources_supported_srs": {
        "content": "Unterstützt die Quelle das benötigte Koordinatensystem nicht, können Sie hier gezielt einstellen welches Koordinatensystem angefragt werden soll. In vielen Fällen ist dies aber nicht notwendig. Ist kein Koordinatensystem ausgewählt wird das im Cache definierte verwendet."
    },
    "min_max_res": {
        "content": "Ab welchem Maßstab oder ab welcher Auflösung gelten die die Einstellungen? Sie können bei der Eingabe zwischen Maßstab und Auflösung, sowie zwischen Grad und Meter auswählen."
    },
    "max_scale": {
        "content": "Kleinster Maßstab z.B. 1:500.000"
    },
    "min_scale": {
        "content": "Größter Maßstab z.B. 1:100"
    },
    "max_res": {
        "content": "Größte Auflösung der Daten"
    },
    "min_res": {
        "content": "Kleinste Auflösung der Daten"
    },
    "sources_add_srs_manual": {
        "content": "Fügen Sie hier Koordinatensysteme hinzu. Bitte geben Sie den EPSG-Code an. Zum Beispiel: EPSG:31467"
    },
    "grids_default_list": {
        "content": "<p>MapProxy stellt Ihnen einige Standard-Grids zur Verfügung. Diese können Sie direkt in den Caches verwenden.</p> Die Standard-Grids können nicht bearbeitet werden. Wenn Sie Einstellungen ändern möchten können Sie die Grids kopieren und entsprechend anpassen."
    },
    "grid_name": {
        "content": "Geben Sie einen eindeutigen Namen für das Grids ein."
    },
    "grid_srs": {
        "content": "Wählen Sie das Koordinatensystem des Grids aus. Ist das benötigte Koordinatensystem nicht in der Liste vorhanden, können Sie dieses in den Projekteinstellungen hinzufügen."
    },
    "grid_bbox": {
        "content": "Geben Sie die BoundingBox an in welchem Bereich das Grid gültig sein soll"
    },
    "grid_bbox_srs": {
        "content": "Die BoundingBox können Sie in dem gewünschten SRS angeben."
    },
    "grid_origin": {
        "content": "<p>Standardmässig ist der Kachelnullpunkt des Gitters unten links ausgerichtet. Für den WMTS Standard transformiert MapProxy diese nach oben links. Für benutzerdefinierte Grids kann die Einstellungen zudem noch angepasst werden.</p> SW / LL definiert den Kachelnullpunkt unten links. NW / UL oben links vom Gitter."
    },
    "cache_name": {
        "content": "Geben Sie den Namen des Caches ein. Dieser dient später zur eindeutigen Identifikation. Bitte beachten Sie das ein Cache nicht den selben Namen tragen kann wie eine Source."
    },
    "cache_sources": {
        "content": "Fügen Sie per Drag&Drop Sources oder Caches hinzu."
    },
    "cache_grids": {
        "content": "Definieren Sie die Grids die verwendet werden sollen. Sie können diese per Drag & Drop von rechts in das Feld ziehen."
    },
    "cache_image_format": {
        "content": "Über den Parameter 'Format' können sie das Bildformat für die Daten im Cache einstellen. Standardmässig verwendet MapProxy das PNG-Format."
    },
    "cache_request_format": {
        "content": "Definieren Sie hier in welchem Bildformat die Daten für den Cache angefragt werden soll. Standardmässig wird das unter Format des Caches verwendet. Häufig muss diese Option daher nicht genutzt werden. "
    },
    "cache_sources_list": {
        "content": "Ziehen Sie die gewünschte Sources per Drag & Drop in den Bereich <em>Sources</em> im ausgewählten Cache."
    },
    "cache_caches_list": {
        "content": "Auch Caches können als Quelle für Caches verwendet werden. Ziehen Sie den gewünschten Cache in den Bereich Sources"
    },
    "cache_grids_list": {
        "content": "Wählen Sie das passende Grid für Ihren Cache aus. Falls Grids im Nachhinein verändert werden, muss der Cache unter Umständen gelöscht werden. Nutzen Sie daher, wenn möglich, nur fertige Grids."
    },
    "layers_list": {
        "content": "Hier finden Sie eine Übersicht über Ihre Layer. Die Reihenfolge der Layer kann per Drag&Drop verändert werden."
    },
    "layer_name": {
        "content": "Geben Sie einen eindeutigen Namen für den Layer ein."
    },
    "layer_title": {
        "content": "Der Titel des Layers wird im Capabilities-Dokument angezeigt und dient im GIS zur Identifikation. Wählen Sie hier daher eine möglichst sprechende Beschreibung."
    },
    "layer_sources": {
        "content": "Als Quellen für den Layer können Sie Caches oder Sources verwenden. Die Quellen werden von unten nach oben von MapProxy abgefragt."
    },
    "layer_caches_list": {
        "content": "Ziehen Sie den gewünschten Cache in den Bereich Sources zum Layer."
    },
    "layer_sources_list": {
        "content": "Sie können auch ungecachte Dienste in einem Layer verwenden. Ziehen Sie den gewünschten Dienst per Drag & Drop in den Bereich <em>Sources</em>."
    },
    "services_demo": {
        "content": "<p>Der MapProxy-Demodienst ermöglicht es Ihnen die MapProxy Konfiguration zu testen. Hier finden Sie die Möglichkeit den Dienst in unterschiedlichen Koordinatensystem und Formaten abzurufen.</p>Für den Produktivbetrieb empfehlen wir den Dienst zu deaktivieren."
    },
    "services_kml": {
        "content": "Nach dem Aktivieren der KML Option können Sie den Dienst über die KML-Schnittstelle abrufen. Der Dienst kann dann zum Beispiel in Google Earth eingebunden werden."
    },
    "services_tms": {
        "content": "Der Tile Map Serivce (TMS) ist ein OSGeo-Standard, der die Karten in Kachelform bereitstellt. Der Dienst eignet sich besonders gut für Webanwendungen."
    },
    "services_wms": {
        "content": "Über den Web Map Service (WMS) können Sie die Dienste zum Beispiel in Desktop-GIS einbinden."
    },
    "services_wmts": {
        "content": "Der WMTS-Standard ist der OGC Kachelstandard. Er wird von einigen Desktop- und Web-Systemen unterstützt."
    },
    "service_wms_srs": {
        "content": "Wählen Sie die Koordinatensysteme aus die der MapProxy WMS anbieten soll. Ist das benötigte Koordinatensystem nicht in der Liste vorhanden können Sie dieses in den Projekteinstellungen hinzufügen."
    },
    "service_wms_metadata": {
        "content": "<p>Die Metadaten des WMS Dienstes werden im Capabilities-Dokument angegeben. Diese Informationen dienen dem Nutzer als zusätzliche Information.</p> Die Daten sind optional und können auch freigelassen werden."
    },
    "globals_cache": {
        "content": "Definieren Sie die globalen Cache-Optionen von MapProxy."
    },
    "globals_cache_meta_size": {
        "content": "<p>MapProxy fragt mehrere Kacheln in einer Anfrage ab. Über die Metasize können Sie angeben wie viele Kacheln in einer Anfrage abgerufen werden. Standardmässig wird eine Metasize von 4x4 verwendet.</p> Bei einer Metasize mit den Werten 4 x 4 fragt MapProxy 16 Kacheln in einer Anfrage ab. Bei einer Kachelgröße von 256x256 Pixeln wird also eine Anfrage von 1024x1024 Pixeln an den WMS gesendet."
    },
    "globals_cache_meta_buffer": {
        "content": "<p>Um das Problem mit abgeschnittenen Beschriftungen an Kachelgrenzen zu verbessern verfügt MapProxy über einen so genannten Metabuffer.</p> MapProxy vergrößert mit dem Metabuffer die Anfragen in jede Richtung um die angegebene Pixelanzahl. Standardmässig wird ein Metabuffer von 200 Pixeln verwendet."
    },
    "globals_image": {
        "content": "Legen Sie hier die Optionen für die von MapProxy generierten Bilder fest."
    },
    "globals_image_resampling_method": {
        "content": "<p>Die Resampling Methode wird verwendet wenn Bilder transformiert oder skaliert werden.</p> Die Option <em>Nearest</e> ist die schnellste und <em>Bicubic</em> die langsamste. Optisch bekommen Sie das beste Resultat wenn Sie <em>Bilinear</em> oder <em>Bicubic</em> auswählen. Die Option <em>Bicubic</em> erhöht den Kontrast und sollte daher für Vektordaten genutzt werden."
    },
    "globals_image_paletted": {
        "content": "Über diese Option können Sie zwischen 8bit und 24bit PNG Bilder wählen. Standardmässig sind 8bit PNG Bilder aktiviert. Deaktivieren Sie <em>paletted</em> wenn Sie 24bit PNG Bilder benötigen."
    },
    "default_config_dpi": {
        "content": "<p>Der DPI Wert wird für die Berechnung verwendet. Hier sollte der selbe Wert eingestellt werden der auch vom Client oder dem Server genutzt wird. Häufige Werte sind 72 oder 96dpi. </p>Standardmässig werden 91dpi – der Wert des OGC WMS in der Version 1.3.0 – verwendet."
    },
     "default_config_srs": {
        "content": "Die hier angegebenen Koordinatensysteme stehen in den Auswahllisten in der Anwendung zur Verfügung."
    },
     "default_config_add_srs": {
        "content": "Fügen Sie hier Koordinatensysteme für die Auswahl hinzu. Das Format muss wie folgt angegeben sein, z.B. EPSG:25833"
    }
}