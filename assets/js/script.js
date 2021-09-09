
$(document).ready(function() {

		/*
	$("input, textarea").on('input', function(evt) {
		
		var input = $(this);
		
		var start = input[0].selectionStart;
		
		$(this).val(function (_, val) {
			return val.toUpperCase();
		});
		
		input[0].selectionStart = input[0].selectionEnd = start;
		
	});
			*/
	/**************************
		Evento para bloquear o enter
	***************************/	
/*
	$(document).on('keypress','form#formCliente',function(event) {
		
		if(event.keyCode == 13) 
		{
			
			if($("#clienteCPF_CNPJ").is(":focus"))
			{

				var cpf_cnpj = ($("#clienteCPF_CNPJ").val());
			
				getCliente(cpf_cnpj);
			
			}
			
			if($("#clienteCEP").is(":focus"))
			{

				var cep = ($("#clienteCEP").val());
			
				getCEP(cep);				
			
			}
			
			event.preventDefault();
			
			return false;
			
		}
   
	});
	
	$("#procurarCPF_CNPJ").on('click',function(){

		var cpf_cnpj = ($("#clienteCPF_CNPJ").val());
		
		getCliente(cpf_cnpj);
		
	});
	
	
	// Consultar CEP
	$("#consultarCEP").click(function(){
	
		var cep = $("#clienteCEP").val();
	
		getCEP(cep);
		
	});
	
	*/
    $('#data_inicio, #data_fim').datepicker({
		format  : "dd/mm/yyyy",
		language: "pt-BR"
    }).on('changeDate', function(ev){
		$(this).datepicker('hide');
	});
/*
	$('#formContato').one('submit', function(){
		$("#enviarEmailBt").attr('disabled','disabled');
	});
	
	$('#contatoDDD').mask('00');
	$('#contatoFone').mask('0000-0000');
*/	
	/*
	// TELA DE CADASTRO DO CLIENTE
	
	$('[data-toggle="popover"]').popover()	
	$("#carregandoCPF_CNPJ").hide();
	$("#carregandoCEP").hide();
	$('#clienteCPF_CNPJ').mask('000.000.000-00', {placeholder: "___.___.___-__"});
	$('#clienteCEP').mask('00000-000', {placeholder: "_____-___"});
	
	$('#clienteNumero').mask('00000');
	
	$('#clienteUF_RG').mask('00', {'translation': {0: {pattern: /[A-Za-z]/}}});
	$('#clienteUF').mask('00', {'translation': {0: {pattern: /[A-Za-z]/}}});
	$('#clienteTelefone').mask('(00)0000-0000', {placeholder: "(__)____-____"});
	$('#clienteCelular').mask('(00)000000000', {placeholder: "(__)_________"});
	$('#clienteDatanascimento').mask('00/00/0000', {placeholder: "__/__/____"});
	
	$('#pjRS').hide();
	
	$("#pessoaJuridica, #pessoaJuridicaMobile").click(function(){

		limparCamposCadastroCliente();	
		
		$("#clienteNome").attr('maxlength', 80);
		
		$("#pessoaFJ").val('0');
		
		$("#pessoaFisica, #pessoaFisicaMobile").removeAttr("disabled");
		$("#pessoaJuridica, #pessoaJuridicaMobile").attr("disabled", "disabled");
	
		$(".changeName").html("NOME FANTASIA");
		
		$(".changeCPF_CNPJ").html("CNPJ");
		$('#clienteCPF_CNPJ').mask('00.000.000/0000-00', {placeholder: "__.___.___/____-__"});
		
		$("#pjRS").show();
		$("#pfDataNascimento").hide();
		$("#pfSexo").hide();
		$("#pfCelular").hide();
		$("#pfOE").hide();
		$("#pfUF_RG").hide();
		$(".changeRG_IE").html("INSCRIÇÃO ESTADUAL");
		$("#divRG_IE").removeClass('col-sm-2');
		$("#divRG_IE").addClass('col-sm-3');
		
		
	});
	
	$("#pessoaFisica, #pessoaFisicaMobile").click(function(){

		limparCamposCadastroCliente();

		$("#clienteNome").attr('maxlength', 40);
		
		$("#pessoaFJ").val('1');
		
		$("#pessoaJuridica, #pessoaJuridicaMobile").removeAttr("disabled");
		$("#pessoaFisica, #pessoaFisicaMobile").attr("disabled", "disabled");
	
		$(".changeName").html("NOME");
		
		//$('#clienteCPF_CNPJ').val("");
		$(".changeCPF_CNPJ").html("CPF");
		$('#clienteCPF_CNPJ').mask('000.000.000-00', {placeholder: "___.___.___-__"});
		
		$("#pjRS").hide();
		$("#pfDataNascimento").show();
		$("#pfSexo").show();
		$("#pfCelular").show();
		$("#pfOE").show();
		$("#pfUF_RG").show();		
		$(".changeRG_IE").html("RG");
		$("#divRG_IE").removeClass('col-sm-3');
		$("#divRG_IE").addClass('col-sm-2');		
		
	});	
	
	// Irá verificar se a pagina de clientes será um alteração ou não
	if($("#parametroCpfCnpj").val().length > 0)
	{
		if($("#parametroCpfCnpj").val().length == 14)
		{
			
			$("#clienteCPF_CNPJ").val($("#parametroCpfCnpj").val());
			
			parametros();
			
			$("#pessoaJuridica, #pessoaJuridicaMobile").removeAttr("disabled");
			$("#pessoaFisica, #pessoaFisicaMobile").attr("disabled", "disabled");
		
			$(".changeName").html("NOME");
			
			//$('#clienteCPF_CNPJ').val("");
			$(".changeCPF_CNPJ").html("CPF");
			$('#clienteCPF_CNPJ').mask('000.000.000-00', {placeholder: "___.___.___-__"});
			
			$("#pjRS").hide();
			$("#pfDataNascimento").show();
			$("#pfSexo").show();
			$("#pfCelular").show();
			$("#pfOE").show();
			$("#pfUF_RG").show();		
			$(".changeRG_IE").html("RG");
			$("#divRG_IE").removeClass('col-sm-3');
			$("#divRG_IE").addClass('col-sm-2');			
			
			$("#procurarCPF_CNPJ").hide();
			$("#carregandoCPF_CNPJ").show();		
			
			var cpf_cnpj = $("#clienteCPF_CNPJ").val();

		}
		else
		{
			
			$("#clienteCPF_CNPJ").val($("#parametroCpfCnpj").val());
			
			parametros();
			
			$("#pessoaFisica, #pessoaFisicaMobile").removeAttr("disabled");
			$("#pessoaJuridica, #pessoaJuridicaMobile").attr("disabled", "disabled");
		
			$(".changeName").html("NOME FANTASIA");
			
			//$('#clienteCPF_CNPJ').val("");
			$(".changeCPF_CNPJ").html("CNPJ");
			$('#clienteCPF_CNPJ').mask('00.000.000/0000-00', {placeholder: "__.___.___/____-__"});
			
			$("#pjRS").show();
			$("#pfDataNascimento").hide();
			$("#pfSexo").hide();
			$("#pfCelular").hide();
			$("#pfOE").hide();
			$("#pfUF_RG").hide();
			$(".changeRG_IE").html("INSCRIÇÃO ESTADUAL");
			$("#divRG_IE").removeClass('col-sm-2');
			$("#divRG_IE").addClass('col-sm-3');
						
			var cpf_cnpj = $("#clienteCPF_CNPJ").val();
			
		}
		
		getCliente(cpf_cnpj);
		
		return false;		
		
		
	}
	/*
	***************************************************************************************************
	*/
	/*
	if(($("#pessoaFJ").val()) > 0)
	{

		parametros();
		
		$("#pessoaJuridica, #pessoaJuridicaMobile").removeAttr("disabled");
		$("#pessoaFisica, #pessoaFisicaMobile").attr("disabled", "disabled");
	
		$(".changeName").html("NOME");
		
		//$('#clienteCPF_CNPJ').val("");
		$(".changeCPF_CNPJ").html("CPF");
		$('#clienteCPF_CNPJ').mask('000.000.000-00', {placeholder: "___.___.___-__"});
		
		$("#pjRS").hide();
		$("#pfDataNascimento").show();
		$("#pfSexo").show();
		$("#pfCelular").show();
		$("#pfOE").show();
		$("#pfUF_RG").show();		
		$(".changeRG_IE").html("RG");
		$("#divRG_IE").removeClass('col-sm-3');
		$("#divRG_IE").addClass('col-sm-2');
		
	}
	else
	{
	
		parametros();
		
		$("#pessoaFisica, #pessoaFisicaMobile").removeAttr("disabled");
		$("#pessoaJuridica, #pessoaJuridicaMobile").attr("disabled", "disabled");
	
		$(".changeName").html("NOME FANTASIA");
		
		//$('#clienteCPF_CNPJ').val("");
		$(".changeCPF_CNPJ").html("CNPJ");
		$('#clienteCPF_CNPJ').mask('00.000.000/0000-00', {placeholder: "__.___.___/____-__"});
		
		$("#pjRS").show();
		$("#pfDataNascimento").hide();
		$("#pfSexo").hide();
		$("#pfCelular").hide();
		$("#pfOE").hide();
		$("#pfUF_RG").hide();
		$(".changeRG_IE").html("INSCRIÇÃO ESTADUAL");
		$("#divRG_IE").removeClass('col-sm-2');
		$("#divRG_IE").addClass('col-sm-3');
		
	}
	*/

	/*
		Validar os campos - Quantidade de caracteres
	

	if(($("#pessoaFJ").val()) > 0)
	{
		$("#clienteNome").attr('maxlength', 40);
	}	
	else
	{
		$("#clienteNome").attr('maxlength', 80);
	}	
	*/
	
	$('.m-ix').unbind('keyup change input paste').bind('keyup change input paste',function(e){
		var $this     = $(this);
		var val       = $this.val();
		var valLength = val.length;
		var maxCount  = $this.attr('maxlength');
		if(valLength>maxCount){
			$this.val($this.val().substring(0,maxCount));
		}
	}); 	
	
	
	
	
});
/*
function parametros()
{
	
	if($("#parametro").val() > 0)
	{
		$(".requiredNome").html('*');
		$(".requiredCpfCnpj").html('*');
		$(".requiredRazaoSocial").html('*');
		$(".requiredLogradouro").html('*');
		$(".requiredNumero").html('*');
		$(".requiredBairro").html('*');
		$(".requiredCidade").html('*');
		$(".requiredUF").html('*');
		$(".requiredTelefone").html('*');
	}
	else
	{
		$(".requiredNome").html('*');
		$(".requiredCpfCnpj").html('*');
		$(".requiredRazaoSocial").html('*');
	}		
	
}

function limparCamposCadastroCliente()
{
	
	$('#clienteCPF_CNPJ').val("");
	$('#clienteNome').val("");
	$('#clienteRG_IE').val("");
	$('#clienteOE').val("");
	$('#clienteUF_RG').val("");
	$('#clienteRS').val("");
	$('#clienteCEP').val("");
	$('#clienteLogradouro').val("");
	$('#clienteNumero').val("");
	$('#clienteComplemento').val("");
	$('#clienteBairro').val("");
	$('#clienteCidade').val("");
	$('#clienteUF').val("");
	$('#clientePais').val("");
	$('#clienteTelefone').val("");
	$('#clienteRamal').val("");
	$('#clienteCelular').val("");
	$('#clienteDatanascimento').val("");
	$(':radio').prop('checked', false);
	$('#clienteObservacao').val("");
		
}

function getCliente(cpf_cnpj)
{
	
	$("#carregandoCPF_CNPJ").show();
	$("#procurarCPF_CNPJ").hide();	
	
	if(TestaCPF_CNPJ(cpf_cnpj))
	{
		
		$.ajax({
			dataType: "json",
			type    : "GET",
			url     : base_url+'app/view/retornoInfoCliente.php',
			data    : {cpf_cnpj: cpf_cnpj},

			success: function (data) {
				console.log(data);

				$("#clienteNome").val(data.nome);
				$("#clienteRS").val(data.jurRazaoSocial);
				$("#clienteRG_IE").val(data.rgInscEst);
				$("#clienteOE").val(data.fisRgOrgao);
				$("#clienteUF_RG").val(data.fisRgEstado);
				$("#clienteDatanascimento").val(data.fisDataNasc);
				$("input[name=clienteSexo][value='"+data.fisSexo+"']").prop("checked",true);
				$("#clienteLogradouro").val(data.endLogradouro);
				$("#clienteNumero").val(data.endNumero);
				$("#clienteComplemento").val(data.endComplemento);
				$("#clienteBairro").val(data.endBairro);
				$("#clienteCidade").val(data.endCidade);
				$("#clienteUF").val(data.endEstado);
				$("div#clientePais select").val(data.endPais);
				$("#clienteCEP").val(data.endCep);
				$("#clienteTelefone").val(data.endFone);
				$("#clienteRamal").val(data.endRamal);
				$("#clienteCelular").val(data.celular);
				$("#clienteObservacao").val(data.obs);
			
				$("#carregandoCPF_CNPJ").hide();
				$("#procurarCPF_CNPJ").show();
							
			}
		});	
		
	}
	else
	{
		
		alert('CPF OU CNPJ INVALIDO');
		
		$("#carregandoCPF_CNPJ").hide();
		$("#procurarCPF_CNPJ").show();			
		
		
	}	
	

	
}

function getCEP(cep)
{

	$("#consultarCEP").hide();
	$("#carregandoCEP").show();	
	
	$.getScript("http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep=" + cep, function() {

		if (resultadoCEP["resultado"] == '1') {

			console.log(resultadoCEP);
			
			$("#clienteBairro").val(unescape(resultadoCEP["bairro"]));				
			$("#clienteCidade").val(unescape(resultadoCEP["cidade"]));				
			$("#clienteLogradouro").val(unescape(resultadoCEP["tipo_logradouro"]) + " " + unescape(resultadoCEP["logradouro"].substr(0,44)));				
			$("#clienteUF").val(unescape(resultadoCEP["uf"]));				

		}
		else
		{
			
			alert("CEP NÃO ENCONTRADO");
	
		}
		
		$("#consultarCEP").show();
		
		$("#carregandoCEP").hide();					
		
	});
	
}

function TestaCPF_CNPJ(strCPF_CNPJ) 
{
    
	if(strCPF_CNPJ.length == 14)
	{
		
		var Soma;
		var Resto;
		Soma   = 0;
		strCPF = strCPF_CNPJ.replace(/[\.-]/g, "");

		if (strCPF == "00000000000")
		return false;
		
		for (i=1; i<=9; i++)
		Soma  = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
		Resto = (Soma * 10) % 11;
		if ((Resto == 10) || (Resto == 11)) 
		Resto = 0;
		if (Resto != parseInt(strCPF.substring(9, 10)) )
		return false;
		Soma = 0;
		for (i = 1; i <= 10; i++)
		   Soma  = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
		   Resto = (Soma * 10) % 11;
		if ((Resto == 10) || (Resto == 11)) 
		Resto = 0;
		if (Resto != parseInt(strCPF.substring(10, 11) ) )
			return false;
		return true;
	}
	else
	{
	
		cnpj = strCPF_CNPJ.replace(/[^\d]+/g,'');
		
		if(cnpj == '') return false;
		 
		if (cnpj.length != 14)
			return false;
	 
		// Elimina CNPJs invalidos conhecidos
		if (cnpj == "00000000000000" || 
			cnpj == "11111111111111" || 
			cnpj == "22222222222222" || 
			cnpj == "33333333333333" || 
			cnpj == "44444444444444" || 
			cnpj == "55555555555555" || 
			cnpj == "66666666666666" || 
			cnpj == "77777777777777" || 
			cnpj == "88888888888888" || 
			cnpj == "99999999999999")
			return false;
			 
		// Valida DVs
		tamanho = cnpj.length - 2
		numeros = cnpj.substring(0,tamanho);
		digitos = cnpj.substring(tamanho);
		soma    = 0;
		pos     = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(0))
			return false;
			 
		tamanho = tamanho + 1;
		numeros = cnpj.substring(0,tamanho);
		soma    = 0;
		pos     = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(1))
			  return false;
			   
		return true;		
		
		
	}
	
}*/
