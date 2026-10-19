# Política de privacidade — Shinji Video Download

Site estático que publica a política de privacidade da extensão [Shinji Video Download](https://github.com/shinji-pk/live). A página está em [`index.html`](index.html), em português do Brasil, sem dependências, build ou variáveis de ambiente.

## Desenvolvimento local

Na pasta do repositório, execute com Python 3:

```sh
python3 -m http.server 4192 --bind 127.0.0.1
```

Abra <http://127.0.0.1:4192/>. Confira a leitura em telas grandes e pequenas e o link de contato. No ambiente em nuvem, reutilize o checkout existente; não é necessário criar um worktree.

## Publicação na Vercel

Importe este repositório, selecione o preset **Other**, mantenha a raiz do projeto na pasta do repositório e desative o comando de build. Sirva o diretório raiz, que já contém `index.html`. Não há etapa de instalação.

A URL pública deve ser copiada dos domínios do projeto na Vercel e cadastrada na página da extensão na loja. O nome do repositório, por si só, não confirma uma implantação ou domínio ativo.
