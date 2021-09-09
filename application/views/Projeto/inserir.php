
<body class="inserir">
  <header class="cabecalho">
        <h1>Cadastros.</h1>
        <nav class= "navegacao">
         <a href="<?php echo base_url()?>" class="vermelho">Voltar</a>
     </nav>
 </header>
 <main class="principal">
    <div class="conteudo">
        <div class="box">
            <form method="POST" action="<?php echo base_url()?>projetoCadastrado" id="cadastrado1">
                <fieldset>
                    <legend><h3><b>Cadastro de Projetos.</b></h3></legend>
                    <br>
                    <form class="row g-4 needs-validation" novalidate>
                      <div class="col-md-3">
                         <label for="validationCustom01" class="form-label">Primeiro nome:</label>
                         <input type="text" name='nome1' class="form-control" id="validationCustom01" placeholder="Ex: Maria " required>
                         <div class="valid-feedback">
                         </div>
                     </div>
                     <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Sobrenome:</label>
                        <input type="text" name='sobrenome1'class="form-control" id="validationCustom02" placeholder="Ex: Silva" required>
                        <div class="valid-feedback">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustomUsername" class="form-label">Endereço de E-mail:</label>
                        <div class="input-group has-validation">
                          <form class="form-inline">
                              <div class="form-group">
                                <label class="sr-only" for="exampleInputEmail3">Email address</label>
                                <input type="email" name='email1' class="form-control" id="exampleInputEmail3" placeholder="Email">
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Cidade:</label>
                    <input type="text" name='cidade1' class="form-control" id="validationCustom03" placeholder="Ex: Recife.." required>
                    <div class="invalid-feedback">
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom03" class="form-label">Bairro:</label>
                    <input type="text" name='bairro1' class="form-control" id="validationCustom03" placeholder="Ex: Boa vista.." required>
                    <div class="invalid-feedback">
                    </div>
                </div>
                <br>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Estado:</label>
                    <select class="form-select" name="estado1" id="validationCustom04" required>
                      <option selected disabled value="">estados...</option>
                      <option>AC</option><option>AL</option><option>AP</option><option>AM</option>
                      <option>BA</option><option>CE</option><option>ES</option><option>GO</option>
                      <option>MA</option><option>MT</option><option>MS</option><option>MG</option>
                      <option>PA</option><option>PB</option><option>PR</option><option>PE</option>
                      <option>PI</option><option>RJ</option><option>RN</option><option>RS</option>
                      <option>RO</option><option>RR</option><option>SC</option><option>SP</option>
                      <option>SE</option><option>TO</option><option>DF</option></option>
                  </select>
                  <div class="invalid-feedback">
                  </div>
              </div>
          </div>
          <br>
          <br>
          <br>
          <br>
          <form action="">
            <div class="col-12">

          <button class="btn btn-primary" id="botao-salvar" type="submit">Salvar</button>

            </div>
        </form>
    </form>

</div>
</div>
</form>
</fieldset>
</form>
</div>
</div>
</main>