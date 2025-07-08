var style_danos_comunidades_somente_ponto_4 = function(feature, resolution){
    var dano = selectedDano;
    var value = feature.get(dano);
    var fillColor = 'rgba(200,200,200,0.5)'; // cor padrão

    if (value === 'Sim') {
        fillColor = 'rgba(0,150,0,0.9)';
    } else if (value === 'Não') {
        fillColor = 'rgba(200,0,0,0.9)';
    }

    return [new ol.style.Style({
        image: new ol.style.Circle({
            radius: 6,
            fill: new ol.style.Fill({ color: fillColor }),
            stroke: new ol.style.Stroke({ color: 'black', width: 1 })
        })
    })];
};
