
<<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/css/estilo.css">
	<link rel="stylesheet" type="text/css" href="<?php echo base_url()?>assets/css/bootstrap/bootstrap.css">
	


	<title>teste Cadastrar Consultar</title>
</head>
<body>
	<header class="cabecalho">
		<h1>Consultas & Cadastros.</h1>
	</header>
	<main class="principal">
		<div class="conteudo">
			<nav class="modulos">
				<div class="modulo verde">
					<h3>Arquiteto</h3>
					<ul>
						<li><a href="<?php echo base_url()?>arquitetoCadastrar">Cadastrar</a></li>
						<li><a href="<?php echo base_url()?>arquitetoConsultar">Consultar</a></li>
					</ul>
				</div>
				<div class="modulo vermelho">
							<h3>Projeto</h3>
					<ul>
						<li><a href="<?php echo base_url()?>projetoCadastrar">Cadastrar</a></li>
						<li><a href="<?php echo base_url()?>projetoConsultar">Consultar</a></li>
					</ul>
				</div>
				<div class="modulo laranja">
							<h3>Edifício</h3>
					<ul>
						<li><a href="<?php echo base_url()?>edificiosCadastrar">Cadastrar</a></li>
						<li><a href="<?php echo base_url()?>edificiosConsultar">Consultar</a></li>
					</ul>
				</div>
			</nav>
		</div>
		
	</main>
	<footer class="rodape">
		CDS Sistema. © <?=date('Y'); ?> 
	</footer>	

</body>
</html>


