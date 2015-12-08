var inicioApp = function (){

	var Altas = function(){
		$("#secAltaAlumnos").show("slow");
	}

	var GuardarAltaAlumno = function(){
		var ncontrol 	= $("#txtNumCont").val();
		var nombres 	= $("#txtNombres").val();
		var apellidop 	= $("#txtApellidoPat").val();
		var apellidom 	= $("#txtApellidoMat").val();
		var carrera 	= $("#txtClaveCarrera").val();
		var semestre 	= $("#txtSemestre").val();
		var promedio 	= $("#txtPromedio").val();
		var estatus 	= $("#txtEstatus").val();
		var parametros 	= "orden=GuardarAltaAlumno"+
							"&ncontrol="+ncontrol+
							"&nombres="+nombres+
							"&apellidop="+apellidop+
							"&apellidom="+apellidom+
							"&carrera="+carrera+
							"&semestre="+semestre+
							"&estatus="+estatus;
	$.ajax({
		cache: false,
		type: "POST",
		dataType: "json",
		url: "php/funciones.php",
		data: parametros,
		success: function(response){
			if(response.respuesta)
			{
				alert("Registro guardado");
			}
			else
			{
				alert("No se puede evaluar");
			}
		},
		error: function(xhr, ajaxOptions, thrownError){
			console.log("Error de conexion");

		}

	});


	}

	$("#btnGuardar").on("submit",GuardarAltaAlumno);
	$("#btnAltas").on("click",Altas);
}
//Al estar listo 
$(document).on("ready",inicioApp);