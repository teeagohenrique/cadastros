function converterDataUS(data)
{

	var isMobile = $("#isMobile").val();

	if(isMobile > 0)
	{

		return data;

	}
	else
	{
		var res = data.split("/");
		return res[2]+'-'+res[1]+'-'+res[0];
	}

}

function converterDataBR(data)
{

	var res = data.split("-");

	return res[2]+'/'+res[1]+'/'+res[0];

}

function converterDataHoraBR(data)
{

      if(data != "")
      {
        retorna = data.substring(8,10)+"/"+ data.substring(5,7)+"/"+ data.substring(0,4)+" "+ data.substring(11,13)+":"+ data.substring(14,16)+":"+ data.substring(17,19);
      }
      else
      {
        retorna = false;
      }

      return retorna;

}


// Funcao que faz o texto ficar em uppercase
function upperText() 
{

	// Para tratar o colar
	$("input[type=text]").bind('paste', function(e) {

		var el = $(this);
			setTimeout(function() {
		var text = $(el).val();
			el.val(text.toUpperCase());
		}, 100);

	});

	// Para tratar quando é digitado
	$("input[type=text]").keypress(function() {

		if($(this).attr('data-valor') == 'captcha')
		{

		}
		else
		{

			var el = $(this);
				setTimeout(function() {
			var text = $(el).val();
				el.val(text.toUpperCase());
			}, 100);

		}

	});

} 

// Verificar se a Data é Valida
function isValidDate(dateString)
{
    // First check for the pattern
    var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

    if(!regex_date.test(dateString))
    {
        return false;
    }

    // Parse the date parts to integers
    var parts = dateString.split("-");
    var day   = parseInt(parts[2], 10);
    var month = parseInt(parts[1], 10);
    var year  = parseInt(parts[0], 10);

    // Check the ranges of month and year
    if(year < 1900 || year > 3000 || month == 0 || month > 12)
    {
        return false;
    }

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    {
        monthLength[1] = 29;
    }

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
}

// Trim - Remover Espaçoes
function myTrim(x) 
{
    return x.replace(/^\s+|\s+$/gm,'');
}

function ltrim(stringToTrim) {
  return stringToTrim.replace(/^\s+/,"");
}

function rtrim(stringToTrim) {
  return stringToTrim.replace(/\s+$/,"");
}


// Aceitar Apenas Numeros
function somenteNumero(e)
{
    var tecla = (window.event)?event.keyCode:e.which;
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0) return true;
	else  return false;
    }
}

function somenteNumerosLetras(e)
{

    var tecla = (window.event) ? event.keyCode : e.which;

    if((tecla == 8) || (tecla > 47 && tecla < 58) || (tecla > 64 && tecla < 91) || (tecla > 96 && tecla < 123))
    {

        return true;

    }
    else
    {

        return false;

    }

}

function somenteNumerosLetrasPontos(e)
{

    var tecla = (window.event) ? event.keyCode : e.which;

    if((tecla == 8) || (tecla > 47 && tecla < 58) || (tecla > 64 && tecla < 91) || (tecla > 96 && tecla < 123) || (tecla >42 && tecla < 45) || (tecla > 45 && tecla < 48) || tecla == 32)
    {

        return true;

    }
    else
    {

        return false;

    }

}

function apenasLetras(evt) {

    evt = (evt) ? evt : event;
    
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
    
        ((evt.which) ? evt.which : 0));
    
    if (charCode > 32 && (charCode < 65 || charCode > 90) &&
        
        (charCode < 97 || charCode > 122)) {
        
        // alert("Somente letras são aceitas nesse campo.");
        
        return false;
    
    }
    
    return true;

}

function somenteNumeroVirgula(e, campo)
{

  var tecla = (window.event)?event.keyCode:e.which;

  if($(''+campo+'').val() == '' && (tecla == 44))
  {

    return false;

  }

  if(tecla == 44 && $(''+campo+'').val().indexOf(',') >= 1) { return false; }

  if((tecla>47 && tecla<58) || tecla == 44) return true;
    else{
      if (tecla==8 || tecla==0 || tecla == 44) return true;
  else  return false;
    }
}



function str_pad(input, pad_length, pad_string, pad_type) {
  //  discuss at: http://phpjs.org/functions/str_pad/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Michael White (http://getsprink.com)
  //    input by: Marco van Oort
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT');
  //   returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
  //   example 2: str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH');
  //   returns 2: '------Kevin van Zonneveld-----'

  var half = '',
    pad_to_go;

  var str_pad_repeater = function(s, len) {
    var collect = '',
      i;

    while (collect.length < len) {
      collect += s;
    }
    collect = collect.substr(0, len);

    return collect;
  };

  input      += '';
  pad_string  = pad_string !== undefined ? pad_string : ' ';;

  if (pad_type !== 'STR_PAD_LEFT' && pad_type !== 'STR_PAD_RIGHT' && pad_type !== 'STR_PAD_BOTH') {
    pad_type = 'STR_PAD_RIGHT';
  }
  if ((pad_to_go = pad_length - input.length) > 0) {
    if (pad_type === 'STR_PAD_LEFT') {
      input = str_pad_repeater(pad_string, pad_to_go) + input;
    } else if (pad_type === 'STR_PAD_RIGHT') {
      input = input + str_pad_repeater(pad_string, pad_to_go);
    } else if (pad_type === 'STR_PAD_BOTH') {
      half  = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
      input = half + input + half;
      input = input.substr(0, pad_length);
    }
  }

  return input;
}


function removeAcentuacao(valor)
{
  valor = valor.replace(/[\\|]/g, "");
  valor = valor.replace(/[<>!#$¨&*_={}?;:|*"~^´`¨æÆø£Øƒª¿®½¼ßµþýÝ£§¹²³£¢¬ÞƑ@()%']/g, "");
  valor = valor.replace(/[\[\]]/g, "");
  valor = valor.replace(/[ÁáàÀäÄâÂãÃ]/g, "A");
  valor = valor.replace(/[ÉéèÈëËêÊ]/g, "E");
  valor = valor.replace(/[ÍíìÌïÏîÎ]/g, "I");
  valor = valor.replace(/[ÓóòÒöÖôÔõÕ]/g, "O");
  valor = valor.replace(/[ÚúùÙüÜûÛ]/g, "U");
  valor = valor.replace(/[Çç]/g, "C");
  
  return valor;

}
function removeAcentuacaoCodigo(valor)
{
  valor = valor.replace(/[\\|]/g, "");
  valor = valor.replace(/[//|]/g, "");
  valor = valor.replace(/[<>!#$¨&*_={}?;:|*"~^´`¨æÆø£Øƒª¿®½¼ßµþýÝ£§¹²³£¢¬ÞƑ@()%']/g, "");
  valor = valor.replace(/[\[\]]/g, "");
  valor = valor.replace(/[/[/]]/g, "");
  valor = valor.replace(/[ÁáàÀäÄâÂãÃ]/g, "A");
  valor = valor.replace(/[ÉéèÈëËêÊ]/g, "E");
  valor = valor.replace(/[ÍíìÌïÏîÎ]/g, "I");
  valor = valor.replace(/[ÓóòÒöÖôÔõÕ]/g, "O");
  valor = valor.replace(/[ÚúùÙüÜûÛ]/g, "U");
  valor = valor.replace(/[Çç]/g, "C");
  
  return valor;

}

function removeAcentuacaoOBS(valor)
{

  valor = valor.replace(/[\\|]/g, "");
  valor = valor.replace(/[<>!#$¨&*_={}?;|*"~^´`¨æÆø£Øƒª¿®½¼ßµþýÝ£§¹²³£¢¬ÞƑ@()%']/g, "");
  valor = valor.replace(/[\[\]]/g, "");
  valor = valor.replace(/[ÁáàÀäÄâÂãÃ]/g, "A");
  valor = valor.replace(/[ÉéèÈëËêÊ]/g, "E");
  valor = valor.replace(/[ÍíìÌïÏîÎ]/g, "I");
  valor = valor.replace(/[ÓóòÒöÖôÔõÕ]/g, "O");
  valor = valor.replace(/[ÚúùÙüÜûÛ]/g, "U");
  valor = valor.replace(/[Çç]/g, "C");
  
  return valor;

}

function removeAcentuacaoEmail(valor)
{

  valor = valor.replace(/[\\|]/g, "");
  valor = valor.replace(/[<>!#$¨&*={}?;:|*"~^´`¨æÆø£Øƒª¿®½¼ßµþýÝ£§¹²³£¢¬ÞƑ()%']/g, "");
  valor = valor.replace(/[\[\]]/g, "");
  valor = valor.replace(/[ÁáàÀäÄâÂãÃ]/g, "A");
  valor = valor.replace(/[ÉéèÈëËêÊ]/g, "E");
  valor = valor.replace(/[ÍíìÌïÏîÎ]/g, "I");
  valor = valor.replace(/[ÓóòÒöÖôÔõÕ]/g, "O");
  valor = valor.replace(/[ÚúùÙüÜûÛ]/g, "U");
  valor = valor.replace(/[Çç]/g, "C");
  
  return valor;

}

function tratarData(mobile, dataInicio, dataFim)
{

  if(vazio(dataInicio) || vazio(dataFim))
  {
    
    $("#modal-mensagem").modal();
    $(".modal-body").html("As datas precisam ser preenchidas");
    return false;
  }

  if(vazio(mobile))
  {

    if(!isValidDate(converterDataUS(dataInicio)) || !isValidDate(converterDataUS(dataFim)))
    {
      $("#modal-mensagem").modal();
      $(".modal-body").html("Data Inválida.");        
      return false;
    }

    if(new Date(converterDataUS(dataInicio)) > new Date(converterDataUS(dataFim)))
    {
      $("#modal-mensagem").modal();
      $(".modal-body").html("Data Inicial não pode ser maior que a Data Final.");                
      return false;
    }

  }
  else
  {

    if(!isValidDate(dataInicio) || !isValidDate(dataFim))
    {
      $("#msg-modal-data").html("Data Inválida");
      $("#modal-data").modal();
      return false;
    }

    if(new Date(dataInicio) > new Date(dataFim))
    {
      $("#msg-modal-data").html("Data Inicial não pode ser maior que a Data Final");
      $("#modal-data").modal(); 
      return false;
    }

  }

  return true;

}

function vazio(v)
{
    
    if( v==null || v==0 || v=='' || v=="" || v == undefined)
    {
        
        return true;
        
    } 
    else 
    {
        
        return false;
        
    }
    
}

function convercaoValorFloat(valor)
{

    valor = valor.replace(/[\.]/g, "");
    valor = valor.replace(/[\,]/g, ".");;
    valor = parseFloat(valor);
    return valor;

}

function formatarNumero(number, places, symbol, thousand, decimal) 
{

    number = number || 0;
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "R$ ";
    //thousand = thousand || ",";
                thousand = vazio(thousand) ? "" : thousand || ",";
                decimal  = decimal || ".";
            var negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");

}  

function number_format(number, places, symbol, thousand, decimal) 
{

    number = number || 0;
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "";
    //thousand = thousand || ",";
                thousand = vazio(thousand) ? "" : thousand || ",";
                decimal  = decimal || ".";
            var negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");

}  

 function dataCorrenteFormatada(){
    var data = new Date();
    var dia  = data.getDate();;
    if (dia.toString().length == 1)
                  dia = "0"+dia;
              var mes = data.getMonth()+1;1;
    if (mes.toString().length == 1)
                  mes = "0"+mes;
              var ano = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}


function infoModal(titulo,body)
{
  //ABRIR O CARREGAR MODAL GENERICO QUE RECEBE O TITULO E O CORPO DA MENSAGEM.
  $("#conteudoInfo").html('Carregando...');

  $("#info-modal").modal();

  $("#titulo-modal").html(titulo);
  
  var html  = '';
      html += body;

  $("#conteudoInfo").html(html);

}

function modal(titulo, msg)
{

  $("#modalAlerta").modal();
  $("#headModal").css({'color': 'red', 'text-align': 'center', 'font-size': '30px'}).html(titulo);
  $("#bodyModal").css({'color': 'black', 'text-align': 'center'}).html(msg);
  $(".modal-footer").css({'text-align': 'center'});

}


/*
function verificarData(txt)
{

  // Validar dia

  var dia = 31;
  var mes = 12;
  var ano = 2500;

  var tecla = (window.event)?event.keyCode:e.which;

  while(txt.substr(0, 1))
  {

    if(tecla == 49 || tecla == 50 || tecla == 51) { return true; }
    else { return false; }

  } 
  

}*/

// Verificar se a Data é Valida
function verificarData(obj, classe)
{

  if(vazio(obj.value))
  {

    return false;

  }

  var regex_date = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

  if(!regex_date.test(obj.value))
  {

      obj.value = '';
    
      obj.focus();
    
      $(classe).datepicker('hide');
    
      infoModal('Alerta!', 'Data Inválida!');
    
      return false;
      
  }
  
}


function validaNumeroVirgulaMenos(obj)
{
  var lista = ['1','2','3','4','5','6','7','8','9','0',',','-'];

  if(lista.indexOf(obj) >= 0)
  {
    return true;
  }
  else
  {
    return false;
  }

}


function detectar_mobile() {
  var check = false; //wrapper no check
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function converterDataSQLparaBR(data)
{

      if(data != "")
      {
        retorna = data.substring(8,10)+"/"+ data.substring(5,7)+"/"+ data.substring(0,4);
      }
      else
      {
        retorna = false;
      }

      return retorna;

}

function removeCaracteresCPFCNPJ(cpfCnpj)
{
  cpfCnpj = cpfCnpj.replace(/[\.]/g, "");
  cpfCnpj = cpfCnpj.replace(/[\/]/g, "");
  cpfCnpj = cpfCnpj.replace(/[\-]/g, "");

  return cpfCnpj;

}


function validaPlaca(placa)
{
  const regexPlaca = /^[a-zA-Z]{3}[-]{1}[0-9]{4}$/;

  if(regexPlaca.test(placa))
  {
   return true;
  } 
  else 
  {
   return false;
  }
}

function verificaOrigemProduto(origemProduto) 
{
  if(origemProduto != undefined && origemProduto != null)
  {
      origemProduto = origemProduto.trim();

      if(origemProduto == "0" || origemProduto == "1" || origemProduto == "2" || origemProduto == "3" || origemProduto == "4" || origemProduto == "5" || origemProduto == "6" || origemProduto == "7" || origemProduto == "8")
      {
        return true;
      }
      else
      {
        return false;
      }

    }
  else
  {
    return false;
  }   

}


function verificaCSOSN(csosn) 
{
  if(csosn != undefined && csosn != null)
  {
      csosn = csosn.trim();

      if(csosn == "101" || csosn == "102" || csosn == "103" || csosn == "201" || csosn == "202" || csosn == "203" || csosn == "300" || csosn == "400" || csosn == "500" || csosn == "900")
      {
        return true;
      }
      else
      {
        return false;
      }

  }
  else
  {
    return false;
  }

}

function verificaCST(cst) 
{
  if(cst != undefined && cst != null)
  {
    
    cst = cst.trim();

    if(cst == "00" || cst == "10" || cst == "20" || cst == "30" || cst == "40" || cst == "41" || cst == "50" || cst == "51" || cst == "60" || cst == "70" || cst == "90")
    {
      return true;
    }
    else
    {
      return false;
    }

  }
  else
  {
    return false;
  }


 
}

function removeAcentuacaoWithOutPerc(valor)
{
  valor = valor.replace(/[\\|]/g, "");
  valor = valor.replace(/[<>!#$¨&*_={}?;:|*"~^´`¨æÆø£Øƒª¿®½¼ßµþýÝ£§¹²³£¢¬ÞƑ@']/g, "");
  valor = valor.replace(/[\[\]]/g, "");
  valor = valor.replace(/[ÁáàÀäÄâÂãÃ]/g, "A");
  valor = valor.replace(/[ÉéèÈëËêÊ]/g, "E");
  valor = valor.replace(/[ÍíìÌïÏîÎ]/g, "I");
  valor = valor.replace(/[ÓóòÒöÖôÔõÕ]/g, "O");
  valor = valor.replace(/[ÚúùÙüÜûÛ]/g, "U");
  valor = valor.replace(/[Çç]/g, "C");
  
  return valor;

}

function trimJS(string)
{

  return (!isEmpty(string) ? $.trim(string) : '');

}

function isEmpty(v)
{
  
  return ( v==null ||  v==false || v==undefined || v==0 || v=='');
  
}

function converterValorFloat(valor)
{
	 
	if(isEmpty(valor))
	{
		return 0;
	}
	
	valor = valor.replace(/[\.]/g, "");
	valor = valor.replace(/[\,]/g, ".");
	valor = parseFloat(valor);
	return valor;

}
