# Política de privacidade — Shinji Video Download

Site estático que publica a política de privacidade da extensão Shinji Video Download. A página está em [`index.html`](index.html), em português do Brasil, sem dependências, build ou variáveis de ambiente.

## Desenvolvimento local

Na pasta do repositório, execute com Python 3:

```sh
python3 -m http.server 4192 --bind 127.0.0.1
```

Abra <http://127.0.0.1:4192/>. Confira a leitura em telas grandes e pequenas e o link de contato. No ambiente em nuvem, reutilize o checkout existente; não é necessário criar um worktree.

## Validação e publicação controlada

Execute `npm test` com Node.js 22+ para verificar links, acessibilidade básica e transparência das permissões.
O teste é estático: não comprova o comportamento da extensão em execução, nem substitui a revisão de privacidade.

**Não há implantação autorizada neste repositório.** Não criar projetos ou deployments na Vercel.
Antes de publicar a política em qualquer hospedagem, confirmar domínio, autorização, URL de prévia,
conteúdo revisado contra a versão da extensão e estratégia de rollback.
O nome do repositório não comprova que a política esteja disponível publicamente.
