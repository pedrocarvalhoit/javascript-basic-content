Precisaremos criar uma biblioteca que acesse arquivos Markdown do computador e busque, dentro deles, links.

Antes de chegarmos à parte dos links, porém, vamos começar fazendo o JavaScript acessar um arquivo, que está em algum lugar do computador, e importar esse conteúdo. Esse é um problema relativamente comum e, para resolvê-lo, vamos aplicar uma biblioteca que já existe. O nome dela é FS (File System).

Vamos voltar ao arquivo "index.js" e deletar os console.log utilizados na última aula. Vamos manter apenas a linha de importação da biblioteca Chalk, porque ainda a utilizaremos para assinalar e diferenciar os retornos do nosso terminal. Vamos descê-la para a segunda linha, porque na primeira importaremos a biblioteca FS.
