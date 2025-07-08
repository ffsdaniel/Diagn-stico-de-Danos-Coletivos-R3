var style_danos_comunidades_poligonos_1 = function(feature, resolution){
    var dano = selectedDano;
    var value = feature.get(dano);
    var fillColor = 'rgba(200,200,200,0.5)'; // padrão (sem valor)

    if (value === 'Sim') {
        fillColor = 'rgba(0,150,0,0.7)'; // verde
    } else if (value === 'Não') {
        fillColor = 'rgba(200,0,0,0.7)'; // vermelho
    }

    return [new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'black', width: 1}),
        fill: new ol.style.Fill({color: fillColor})
    })];
};
