<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>Cadastro de Usuário</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="${pageContext.request.contextPath}/resources/css/styles.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container mt-5">
      <h1 class="mb-4">Formulário de Cadastro</h1>
      <form method="POST" action="cadastrar">
        <div class="row g-3">
          <div class="col-md-6">
            <label for="nome" class="form-label">Nome</label>
            <input
              type="text"
              class="form-control"
              id="nome"
              name="nome"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="sobrenome" class="form-label">Sobrenome</label>
            <input
              type="text"
              class="form-control"
              id="sobrenome"
              name="sobrenome"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="senha" class="form-label">Senha</label>
            <input
              type="password"
              class="form-control"
              id="senha"
              name="senha"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="cep" class="form-label">CEP</label>
            <input
              type="text"
              class="form-control"
              id="cep"
              name="cep"
              required
            />
          </div>
          <div class="col-md-8">
            <label for="rua" class="form-label">Rua</label>
            <input
              type="text"
              class="form-control"
              id="rua"
              name="rua"
              required
            />
          </div>
          <div class="col-12 mt-4">
            <button type="submit" class="btn btn-primary w-100">
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  </body>
</html>
