<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$route['default_controller'] = 'Welcome';

$route['arquitetoCadastrar'] = 'arquiteto/cadastrar';
$route['arquitetoCadastrado'] = 'arquiteto/cadastrado';
$route['arquitetoConsultar'] = 'arquiteto/consultar';
$route['arquitetoConsultado'] = 'arquiteto/consultado';

 
$route['projetoCadastrar'] = 'projeto/cadastrar';
$route['projetoCadastrado'] = 'projeto/cadastrado';
$route['projetoConsultar'] = 'projeto/consultar';
$route['projetoConsultado'] = 'projeto/consultado';


$route['edificiosCadastrar'] = 'edificios/cadastrar';
$route['edificiosCadastrado'] = 'edificios/cadastrado';
$route['edificiosConsultar'] = 'edificios/consultar';
$route['edificiosConsultado'] = 'edificios/consultado';


// $route['teste'] = 'arquiteto/teste';