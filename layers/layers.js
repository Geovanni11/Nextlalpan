var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_MUNICIPIODENEXTLALPAN_1 = new ol.format.GeoJSON();
var features_MUNICIPIODENEXTLALPAN_1 = format_MUNICIPIODENEXTLALPAN_1.readFeatures(json_MUNICIPIODENEXTLALPAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIODENEXTLALPAN_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_MUNICIPIODENEXTLALPAN_1.addFeatures(features_MUNICIPIODENEXTLALPAN_1);var lyr_MUNICIPIODENEXTLALPAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIODENEXTLALPAN_1, 
                style: style_MUNICIPIODENEXTLALPAN_1,
                title: '<img src="styles/legend/MUNICIPIODENEXTLALPAN_1.png" /> MUNICIPIO DE NEXTLALPAN'
            });var format_USOSDESUELO_2 = new ol.format.GeoJSON();
var features_USOSDESUELO_2 = format_USOSDESUELO_2.readFeatures(json_USOSDESUELO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USOSDESUELO_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_USOSDESUELO_2.addFeatures(features_USOSDESUELO_2);var lyr_USOSDESUELO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_USOSDESUELO_2, 
                style: style_USOSDESUELO_2,
    title: 'USOS DE SUELO:<br />\
    <img src="styles/legend/USOSDESUELO_2_0.png" /> H100A     HABITACIONAL<br />\
    <img src="styles/legend/USOSDESUELO_2_1.png" /> H200A     HABITACIONAL<br />\
    <img src="styles/legend/USOSDESUELO_2_2.png" /> H250A     HABITACIONAL<br />\
    <img src="styles/legend/USOSDESUELO_2_3.png" /> H300A     HABITACIONAL <br />\
    <img src="styles/legend/USOSDESUELO_2_4.png" /> H500A     HABITACIONAL<br />\
    <img src="styles/legend/USOSDESUELO_2_5.png" /> H833A     HABITACIONAL<br />\
    <img src="styles/legend/USOSDESUELO_2_6.png" /> CU.A - CEDIS     CENTRO URBANO<br />\
    <img src="styles/legend/USOSDESUELO_2_7.png" /> CU200A     CENTRO URBANO<br />\
    <img src="styles/legend/USOSDESUELO_2_8.png" /> CU300A     CENTRO URBANO<br />\
    <img src="styles/legend/USOSDESUELO_2_9.png" /> E     EQUIPAMIENTO <br />\
    <img src="styles/legend/USOSDESUELO_2_10.png" /> E-AC<br />\
    <img src="styles/legend/USOSDESUELO_2_11.png" /> E-CT<br />\
    <img src="styles/legend/USOSDESUELO_2_12.png" /> IG-LIyS     INDUSTRIA GRANDE<br />\
    <img src="styles/legend/USOSDESUELO_2_13.png" /> I-M-N     INDUSTRIA MEDIA NO CONTAMINANTE<br />\
    <img src="styles/legend/USOSDESUELO_2_14.png" /> P.A.R.     PIROTECNIA DE ALTO RIESGO<br />\
    <img src="styles/legend/USOSDESUELO_2_15.png" /> AG-AP     AGRICOLA MEDIANA PRODUCTIVIDAD <br />\
    <img src="styles/legend/USOSDESUELO_2_16.png" /> AG-MP     AGRICOLA ALTA PRODUCTIVIDAD <br />\
    <img src="styles/legend/USOSDESUELO_2_17.png" /> N-PAS     PASTIZAL<br />\
    <img src="styles/legend/USOSDESUELO_2_18.png" /> O-I     OBRAS DE INFRAESTRUCTURA <br />'
        });var format_MANZANAS_3 = new ol.format.GeoJSON();
var features_MANZANAS_3 = format_MANZANAS_3.readFeatures(json_MANZANAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_MANZANAS_3.addFeatures(features_MANZANAS_3);var lyr_MANZANAS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MANZANAS_3, 
                style: style_MANZANAS_3,
                title: '<img src="styles/legend/MANZANAS_3.png" /> MANZANAS'
            });var format_CALLES_4 = new ol.format.GeoJSON();
var features_CALLES_4 = format_CALLES_4.readFeatures(json_CALLES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CALLES_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CALLES_4.addFeatures(features_CALLES_4);var lyr_CALLES_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CALLES_4, 
                style: style_CALLES_4,
                title: '<img src="styles/legend/CALLES_4.png" /> CALLES'
            });var format_VIALIDADES_5 = new ol.format.GeoJSON();
var features_VIALIDADES_5 = format_VIALIDADES_5.readFeatures(json_VIALIDADES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIALIDADES_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_VIALIDADES_5.addFeatures(features_VIALIDADES_5);var lyr_VIALIDADES_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIALIDADES_5, 
                style: style_VIALIDADES_5,
    title: 'VIALIDADES: <br />\
    <img src="styles/legend/VIALIDADES_5_0.png" /> VIALIDAD PRIMARIA <br />\
    <img src="styles/legend/VIALIDADES_5_1.png" /> VIALIDAD SECUNDARIA <br />\
    <img src="styles/legend/VIALIDADES_5_2.png" /> VIALIDAD LOCAL <br />'
        });var format_VIALIDADREGIONAL_6 = new ol.format.GeoJSON();
var features_VIALIDADREGIONAL_6 = format_VIALIDADREGIONAL_6.readFeatures(json_VIALIDADREGIONAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIALIDADREGIONAL_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_VIALIDADREGIONAL_6.addFeatures(features_VIALIDADREGIONAL_6);var lyr_VIALIDADREGIONAL_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIALIDADREGIONAL_6, 
                style: style_VIALIDADREGIONAL_6,
                title: '<img src="styles/legend/VIALIDADREGIONAL_6.png" /> VIALIDAD REGIONAL'
            });var format_VIAFERREA_7 = new ol.format.GeoJSON();
var features_VIAFERREA_7 = format_VIAFERREA_7.readFeatures(json_VIAFERREA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIAFERREA_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_VIAFERREA_7.addFeatures(features_VIAFERREA_7);var lyr_VIAFERREA_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIAFERREA_7, 
                style: style_VIAFERREA_7,
                title: '<img src="styles/legend/VIAFERREA_7.png" /> VIA FERREA'
            });var format_CANALDERIEGO_8 = new ol.format.GeoJSON();
var features_CANALDERIEGO_8 = format_CANALDERIEGO_8.readFeatures(json_CANALDERIEGO_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CANALDERIEGO_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CANALDERIEGO_8.addFeatures(features_CANALDERIEGO_8);var lyr_CANALDERIEGO_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CANALDERIEGO_8, 
                style: style_CANALDERIEGO_8,
    title: 'CANAL DE RIEGO:<br />\
    <img src="styles/legend/CANALDERIEGO_8_0.png" /> CANAL CASTERA<br />\
    <img src="styles/legend/CANALDERIEGO_8_1.png" /> CANAL DE AGUA DE RIEGO<br />\
    <img src="styles/legend/CANALDERIEGO_8_2.png" /> <br />'
        });var format_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9 = new ol.format.GeoJSON();
var features_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9 = format_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9.readFeatures(json_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9.addFeatures(features_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9);var lyr_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9, 
                style: style_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9,
                title: '<img src="styles/legend/ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9.png" /> ANP SANTUARIO DEL AGUA DE LA LAGUNA DE ZUMPANGO'
            });var format_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10 = new ol.format.GeoJSON();
var features_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10 = format_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10.readFeatures(json_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10.addFeatures(features_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10);var lyr_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10, 
                style: style_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10,
                title: '<img src="styles/legend/CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10.png" /> CR.E     CORREDOR_ECOLÓGICO A 25 METROS DE CADA LADO DEL CANAL '
            });var format_LINEADEPOZOS_11 = new ol.format.GeoJSON();
var features_LINEADEPOZOS_11 = format_LINEADEPOZOS_11.readFeatures(json_LINEADEPOZOS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LINEADEPOZOS_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LINEADEPOZOS_11.addFeatures(features_LINEADEPOZOS_11);var lyr_LINEADEPOZOS_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LINEADEPOZOS_11, 
                style: style_LINEADEPOZOS_11,
                title: '<img src="styles/legend/LINEADEPOZOS_11.png" /> LINEA DE POZOS'
            });var format_BATERIASDEAGUA_12 = new ol.format.GeoJSON();
var features_BATERIASDEAGUA_12 = format_BATERIASDEAGUA_12.readFeatures(json_BATERIASDEAGUA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATERIASDEAGUA_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_BATERIASDEAGUA_12.addFeatures(features_BATERIASDEAGUA_12);var lyr_BATERIASDEAGUA_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATERIASDEAGUA_12, 
                style: style_BATERIASDEAGUA_12,
                title: '<img src="styles/legend/BATERIASDEAGUA_12.png" /> BATERIAS DE AGUA'
            });var format_CRU200ACORREDORURBANO_13 = new ol.format.GeoJSON();
var features_CRU200ACORREDORURBANO_13 = format_CRU200ACORREDORURBANO_13.readFeatures(json_CRU200ACORREDORURBANO_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRU200ACORREDORURBANO_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CRU200ACORREDORURBANO_13.addFeatures(features_CRU200ACORREDORURBANO_13);var lyr_CRU200ACORREDORURBANO_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRU200ACORREDORURBANO_13, 
                style: style_CRU200ACORREDORURBANO_13,
                title: '<img src="styles/legend/CRU200ACORREDORURBANO_13.png" /> CRU.200.A     CORREDOR URBANO'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MUNICIPIODENEXTLALPAN_1.setVisible(true);lyr_USOSDESUELO_2.setVisible(true);lyr_MANZANAS_3.setVisible(true);lyr_CALLES_4.setVisible(true);lyr_VIALIDADES_5.setVisible(true);lyr_VIALIDADREGIONAL_6.setVisible(true);lyr_VIAFERREA_7.setVisible(true);lyr_CANALDERIEGO_8.setVisible(true);lyr_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9.setVisible(true);lyr_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10.setVisible(true);lyr_LINEADEPOZOS_11.setVisible(true);lyr_BATERIASDEAGUA_12.setVisible(true);lyr_CRU200ACORREDORURBANO_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MUNICIPIODENEXTLALPAN_1,lyr_USOSDESUELO_2,lyr_MANZANAS_3,lyr_CALLES_4,lyr_VIALIDADES_5,lyr_VIALIDADREGIONAL_6,lyr_VIAFERREA_7,lyr_CANALDERIEGO_8,lyr_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9,lyr_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10,lyr_LINEADEPOZOS_11,lyr_BATERIASDEAGUA_12,lyr_CRU200ACORREDORURBANO_13];
lyr_MUNICIPIODENEXTLALPAN_1.set('fieldAliases', {'AdMapKey': 'AdMapKey', 'MUNICIPI_2': 'MUNICIPI_2', 'Area': 'Area', 'AdMapKey1': 'AdMapKey1', });
lyr_USOSDESUELO_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AdMapKey': 'AdMapKey', 'LAYER': 'LAYER', 'Id': 'Id', 'CLAVE': 'CLAVE', 'CLAVE_EQ_P': 'CLAVE_EQ_P', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MANZANAS_3.set('fieldAliases', {'LAYER': 'LAYER', });
lyr_CALLES_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEOGRAFICO': 'GEOGRAFICO', 'CODIGO': 'CODIGO', 'CALI_REPR': 'CALI_REPR', 'CARTA': 'CARTA', 'IDENTIFICA': 'IDENTIFICA', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'Shape_Leng': 'Shape_Leng', });
lyr_VIALIDADES_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEOGRAFICO': 'GEOGRAFICO', 'CODIGO': 'CODIGO', 'CALI_REPR': 'CALI_REPR', 'CARTA': 'CARTA', 'IDENTIFICA': 'IDENTIFICA', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'Shape_Leng': 'Shape_Leng', });
lyr_VIALIDADREGIONAL_6.set('fieldAliases', {'GEOGRAFICO': 'GEOGRAFICO', 'NUMERO': 'NUMERO', 'NUME_CARR': 'NUME_CARR', 'CONDICION': 'CONDICION', 'ADMINIST': 'ADMINIST', 'TIPO': 'TIPO', 'DERE_TRAN': 'DERE_TRAN', 'JURISDICCI': 'JURISDICCI', 'CODIGO': 'CODIGO', 'CARTA': 'CARTA', 'CALI_REPR': 'CALI_REPR', 'IDENTIFICA': 'IDENTIFICA', });
lyr_VIAFERREA_7.set('fieldAliases', {'TIPO': 'TIPO', 'CONDICION': 'CONDICION', 'CALI_REPR': 'CALI_REPR', 'ESTADO': 'ESTADO', 'OID_1': 'OID_1', });
lyr_CANALDERIEGO_8.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_LINEADEPOZOS_11.set('fieldAliases', {'Id': 'Id', });
lyr_BATERIASDEAGUA_12.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_CRU200ACORREDORURBANO_13.set('fieldAliases', {'AdMapKey': 'AdMapKey', 'LAYER': 'LAYER', });
lyr_MUNICIPIODENEXTLALPAN_1.set('fieldImages', {'AdMapKey': 'Hidden', 'MUNICIPI_2': 'Hidden', 'Area': 'Hidden', 'AdMapKey1': 'Hidden', });
lyr_USOSDESUELO_2.set('fieldImages', {'OBJECTID': 'Hidden', 'AdMapKey': 'Hidden', 'LAYER': 'Hidden', 'Id': 'Hidden', 'CLAVE': 'Hidden', 'CLAVE_EQ_P': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_MANZANAS_3.set('fieldImages', {'LAYER': 'Hidden', });
lyr_CALLES_4.set('fieldImages', {'OBJECTID': 'Hidden', 'GEOGRAFICO': 'Hidden', 'CODIGO': 'Hidden', 'CALI_REPR': 'Hidden', 'CARTA': 'Hidden', 'IDENTIFICA': 'Hidden', 'NOMBRE': 'Hidden', 'TIPO': 'Hidden', 'Shape_Leng': 'Hidden', });
lyr_VIALIDADES_5.set('fieldImages', {'OBJECTID': 'Hidden', 'GEOGRAFICO': 'Hidden', 'CODIGO': 'Hidden', 'CALI_REPR': 'Hidden', 'CARTA': 'Hidden', 'IDENTIFICA': 'Hidden', 'NOMBRE': 'Hidden', 'TIPO': 'Hidden', 'Shape_Leng': 'Hidden', });
lyr_VIALIDADREGIONAL_6.set('fieldImages', {'GEOGRAFICO': 'Hidden', 'NUMERO': 'Hidden', 'NUME_CARR': 'Hidden', 'CONDICION': 'Hidden', 'ADMINIST': 'Hidden', 'TIPO': 'Hidden', 'DERE_TRAN': 'Hidden', 'JURISDICCI': 'Hidden', 'CODIGO': 'Hidden', 'CARTA': 'Hidden', 'CALI_REPR': 'Hidden', 'IDENTIFICA': 'Hidden', });
lyr_VIAFERREA_7.set('fieldImages', {'TIPO': 'Hidden', 'CONDICION': 'Hidden', 'CALI_REPR': 'Hidden', 'ESTADO': 'Hidden', 'OID_1': 'Hidden', });
lyr_CANALDERIEGO_8.set('fieldImages', {'OID_': 'Hidden', 'Name': 'Hidden', 'SymbolID': 'Hidden', 'AltMode': 'Hidden', 'Base': 'Hidden', 'Clamped': 'Hidden', 'Extruded': 'Hidden', 'Snippet': 'Hidden', 'PopupInfo': 'Hidden', 'Shape_Leng': 'Hidden', });
lyr_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9.set('fieldImages', {'OID_': 'Hidden', 'Name': 'Hidden', 'FolderPath': 'Hidden', 'SymbolID': 'Hidden', 'AltMode': 'Hidden', 'Base': 'Hidden', 'Clamped': 'Hidden', 'Extruded': 'Hidden', 'Snippet': 'Hidden', 'PopupInfo': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10.set('fieldImages', {'OID_': 'Hidden', 'Name': 'Hidden', 'SymbolID': 'Hidden', 'AltMode': 'Hidden', 'Base': 'Hidden', 'Clamped': 'Hidden', 'Extruded': 'Hidden', 'Snippet': 'Hidden', 'PopupInfo': 'Hidden', 'Shape_Leng': 'Hidden', 'BUFF_DIST': 'Hidden', 'ORIG_FID': 'Hidden', });
lyr_LINEADEPOZOS_11.set('fieldImages', {'Id': 'Hidden', });
lyr_BATERIASDEAGUA_12.set('fieldImages', {'OID_': 'Hidden', 'Name': 'Hidden', 'FolderPath': 'Hidden', 'SymbolID': 'Hidden', 'AltMode': 'Hidden', 'Base': 'Hidden', 'Snippet': 'Hidden', 'PopupInfo': 'Hidden', 'HasLabel': 'Hidden', 'LabelID': 'Hidden', });
lyr_CRU200ACORREDORURBANO_13.set('fieldImages', {'AdMapKey': 'Hidden', 'LAYER': 'TextEdit', });
lyr_MUNICIPIODENEXTLALPAN_1.set('fieldLabels', {});
lyr_USOSDESUELO_2.set('fieldLabels', {'CLAVE_EQ_P': 'no label', });
lyr_MANZANAS_3.set('fieldLabels', {});
lyr_CALLES_4.set('fieldLabels', {});
lyr_VIALIDADES_5.set('fieldLabels', {});
lyr_VIALIDADREGIONAL_6.set('fieldLabels', {});
lyr_VIAFERREA_7.set('fieldLabels', {});
lyr_CANALDERIEGO_8.set('fieldLabels', {});
lyr_ANPSANTUARIODELAGUADELALAGUNADEZUMPANGO_9.set('fieldLabels', {});
lyr_CRECORREDOR_ECOLGICOA25METROSDECADALADODELCANAL_10.set('fieldLabels', {});
lyr_LINEADEPOZOS_11.set('fieldLabels', {});
lyr_BATERIASDEAGUA_12.set('fieldLabels', {});
lyr_CRU200ACORREDORURBANO_13.set('fieldLabels', {'LAYER': 'no label', });
lyr_CRU200ACORREDORURBANO_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});