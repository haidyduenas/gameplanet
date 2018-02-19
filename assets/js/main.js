var mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var comentarios = [
          {
						user:"Juan Carlos Gutierrez",
					 	coment:"Muy buen juego se lo recomiento a todos los amantes de los juegos shooter",
                        fecha:(new Date()).getDate()+" de "+mes[(new Date()).getMonth()]+" - "+(new Date()).getHours()+":"+(new Date()).getMinutes()
					},
					{
						user:"Eduardo Salazar",
					 	coment:"Un buen servicio. Pero esta ves no me mandaron el código para rastrear mi pedido pero es mui buen servicio.",
                        fecha:(new Date(86400000)).getDate()+" de "+mes[(new Date(86400000)).getMonth()]+" - "+(new Date(86400000)).getHours()+":"+(new Date(864020)).getMinutes()
					},
					{
						user:"Oscar Navarrete",
					 	coment:"buen servicio y los productos llegaron en excelente estado y a tiempo, muy recomendable",
                        fecha:(new Date(810020)).getDate()+" de "+mes[(new Date(810020)).getMonth()]+" - "+(new Date(810020)).getHours()+":"+(new Date(810020)).getMinutes()
					},
					{
						user:"Miguel Ochoa ",
					 	coment:"El juego aun tiene el codigo para descargar la saga completa??. Quisiera saber para hacer mi pedido de inmediato",
                        fecha:(new Date(2470330)).getDate()+" de "+mes[(new Date(2470330)).getMonth()]+" - "+(new Date(2470330)).getHours()+":"+(new Date(2470330)).getMinutes()
					},
          {
                        user:"Ruben Herrera",
                        coment:"Los juegos llegan a tiempo, muy recomendado el pedido por deilvery. Quisiera hacer un pedido",
                        fecha:(new Date(8640003)).getDate()+" de "+mes[(new Date(8640003)).getMonth()]+" - "+(new Date(8640003)).getHours()+":"+(new Date(8640003)).getMinutes()
          }
				  ];

function ponerComentarios(){
    var row = $("<div class='row borde-right'><h2 class='amarillo'> Comentarios de nuestros clientes</h2></div>");
    console.log(row);
    var col1 = $("<div class='col-md-6' ></div>");
    for(var i=0; i <comentarios.length/2;i++){        
        var comen = $("<div class='coment media borde-right'><div class='media-left'><img src='assets/img/avatar.png' alt=''></div><div class='media-body'><p>"+comentarios[i].coment+"</p><i><h6>"+comentarios[i].user+" escribió el "+comentarios[i].fecha+"</h6></i></div></div>");
        col1.append(comen);
    }
    row.append(col1);
    var col2 = $("<div class='col-md-6' ></div>");
    for(var i=parseInt(comentarios.length/2); i <comentarios.length;i++){        
        var comen = $("<div class='coment media borde-right'><div class='media-left'><img src='assets/img/avatar.png' alt=''></div><div class='media-body'><p>"+comentarios[i].coment+"</p><i><h6>"+comentarios[i].user+" escribió el "+comentarios[i].fecha+"</h6></i></div></div>");
        col2.append(comen);
    }
    row.append(col2);
    $("#comentarios").append(row);

    var row = $("<div class='row separar'></div>");
    var col = $("<div class='col-md-12 text-center separar'><button type='button' class='btn btn-amarillo'>Ver más Comentarios</button></div>");
    row.append(col);
    $("#comentarios").append(row);
    
}
ponerComentarios();
/* Desallando la calificacion con estrella */
$(function() {

    var rating = 1.6;

    $(".counter").text(rating);

    $("#rateYo1").on("rateyo.init", function() {
        console.log("rateyo.init");
    });

    $("#rateYo1").rateYo({
            rating: rating,
            numStars: 5,
            precision: 2,
            starWidth: "64px",
            spacing: "5px",
            rtl: true,
            multiColor: {

                startColor: "#000000",
                endColor: "#ffffff"
            },
            onInit: function() {

                console.log("On Init");
            },
            onSet: function() {

                console.log("On Set");
            }
        }).on("rateyo.set", function() {
            console.log("rateyo.set");
        })
        .on("rateyo.change", function() {
            console.log("rateyo.change");
        });

    $(".rateyo").rateYo();

    $(".rateyo-readonly-widg").rateYo({

        rating: rating,
        numStars: 5,
        precision: 2,
        minValue: 1,
        maxValue: 5
    }).on("rateyo.change", function(e, data) {

        console.log(data.rating);
    });
});

/*Haidy*/
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/*Fin Haidy*/
