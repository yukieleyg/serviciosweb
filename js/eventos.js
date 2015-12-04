var inicioApp = function (){

	var Altas = function(){
		$("#secAltaAlumnos").show("slow");
	}
	$("#altas").on("click",Altas);
}
$(document).on("ready",inicioApp);