<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>Redirecionando...</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="${pageContext.request.contextPath}/resources/css/styles.css"
      rel="stylesheet"
    />
    <script>
      setTimeout(function () {
        window.location.href = "${pageContext.request.contextPath}/";
      }, 2000);
    </script>
  </head>
  <body>
    <div class="container mt-5 text-center">
      <div class="alert alert-success">
        Cadastro realizado com sucesso! Redirecionando para a página inicial...
      </div>
    </div>
  </body>
</html>
