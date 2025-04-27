# Board de Tarefas

Um aplicativo interativo para criar, gerenciar e marcar tarefas como concluídas, utilizando tecnologias como JavaScript e `localStorage` para persistência de dados. O projeto possui um design responsivo e estilização cuidadosa para garantir uma boa experiência do usuário.

---

## Funcionalidades

- **Adicionar Tarefas:** Insira o nome e a etiqueta de uma tarefa e salve-a na lista.
- **Persistência de Dados:** As tarefas são armazenadas no `localStorage` para serem recuperadas mesmo após recarregar a página.
- **Marcar como Concluído:** As tarefas podem ser marcadas como concluídas. Isso atualiza o estilo visual (sublinhado e cor) e reflete no contador de tarefas concluídas.
- **Design Responsivo:** O botão "Concluir" muda de estilo com base no estado da tarefa, exibindo um ícone quando concluída.

---

## Estrutura do Projeto

### HTML
- Estrutura principal com elementos como `form`, `input` e `ul` para manipulação e exibição de tarefas.
- Contém seções como:
  - **Formulário de Criação:** Para adicionar novas tarefas.
  - **Lista de Tarefas:** Exibe as tarefas criadas.
  - **Rodapé:** Mostra o contador de tarefas concluídas.

### CSS
- **Estilo Geral:** Fundo claro (#F5F9FF) com centralização e espaçamento confortável para leitura e interação.
- **Design Responsivo:** Com `media queries`, o layout se adapta para telas menores, reorganizando a disposição dos elementos.
- **Botões e Campos de Entrada:** Estilizados para clareza e usabilidade.

### JavaScript
- Manipula a criação, exibição, atualização e exclusão de tarefas.
- Salva e recupera dados do `localStorage` para garantir persistência de tarefas.
- Atualiza dinamicamente o contador de tarefas concluídas e o estilo dos botões.

---

## Como Usar

1. Clone este repositório:

[git clone](https://github.com/ademarjmjr/RID179725_Desafio03.git)

2. Abra o arquivo `index.html` no navegador para visualizar o projeto.

3. **Adicionar uma Tarefa:**
- Digite a descrição e a etiqueta da tarefa nos campos apropriados.
- Clique no botão "+" para salvá-la.
- A tarefa será exibida na lista e armazenada no `localStorage`.

4. **Marcar uma Tarefa como Concluída:**
- Clique no botão "Concluir" ao lado da tarefa.
- O botão será atualizado para um ícone e o texto da tarefa será riscado.

5. **Salvar e Recuperar Tarefas:**
- As tarefas são salvas em `localStorage` e recuperadas automaticamente ao recarregar a página.

---

## Tecnologias Utilizadas

- **HTML5:** Para a estrutura da página.
- **CSS3:** Para estilização.
- **JavaScript:** Para manipulação do DOM, persistência no `localStorage` e controle de eventos.
- **LocalStorage:** Para armazenamento e recuperação de tarefas no navegador.

---

## Design e Estilização

### Detalhes de Estilo

- **Corpo da Página:** Centralizado com uso de `flexbox`, garantindo alinhamento e espaçamento.
- **Componentes:** Bordas arredondadas, cores sutis e espaçamentos internos para uma experiência agradável.
- **Responsividade:** Os elementos se ajustam para melhorar a experiência em dispositivos móveis.

---

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

---

Contato
Se você tiver dúvidas, sugestões ou quiser contribuir com o projeto, entre em contato comigo:
E-mail: WhatsApp: 69 9 9304-1891
GitHub: [Ademar José Martins Junior](https://github.com/ademarjmjr)


