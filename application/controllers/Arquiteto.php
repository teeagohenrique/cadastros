<?php
// defined('BASEPATH') OR exit('No direct script access allowed');

class Arquiteto extends CI_Controller {

	public function cadastrar()
	{
		

		$this->load->view('header');
		$this->load->view('arquiteto/inserir');
		$this->load->view('footer');
		
	}

/*	public function cadastrado()
	{
	$this->load->view('arquiteto/cadastrado');
}*/
public function cadastrado()
{

	
	$dados['nomeArq'] = $this->input->post('nome1');
	echo '<pre>';
	$dados['sobrenomeArq'] = $this->input->post('sobrenome1');
	echo '<pre>';
	$dados['emailArq'] = $this->input->post('email1');
	echo '<pre>';
	$dados['cidadeArq'] = $this->input->post('cidade1');
	echo '<pre>';
	$dados['bairroArq'] = $this->input->post('bairro1');
	echo '<pre>';
	$dados['estadoArq'] = $this->input->post('estado1');


	$this->load->view('arquiteto/cadastrado', $dados);



	// print_r("nome: ".$this->input->post('nome1'));
	// 
	// print_r("Sobrenome: ".$this->input->post('sobrenome1'));
	// echo '<pre>';
	// print_r("E-mail: ".$this->input->post('email1'));
	// echo '<pre>';
	// print_r("Cidade: ".$this->input->post('cidade1'));
	// echo '<pre>';
	// print_r("Bairro: ".$this->input->post('bairro1'));
	// echo '<pre>';
	// print_r("Estado: ".$this->input->post('estado1'));

	// die;
	
}

public function consultar()
{

	$this->load->view('header');
	$this->load->view('arquiteto/consultar');
	$this->load->view('footer');
	
}


public function consultado()
{

	print_r("Id: ".$this->input->post('idCons1'));
	echo '<pre>';	
	print_r("Nome: ".$this->input->post('nomeCons1'));
	echo '<pre>';
	print_r("Cidade: ".$this->input->post('bairroCons1'));
	echo '<pre>';
	print_r("E-mail: ".$this->input->post('emailCons1'));


	die;
}


}
