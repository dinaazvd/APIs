# 🎓 REST API Services - Laboratório Acadêmico

Repositório desenvolvido **para fins acadêmicos e educacionais**, servindo como ambiente de experimentação, estudo de arquitetura de software e implementação de microsserviços e rotas RESTful em **Node.js**.

O objetivo deste projeto é demonstrar a aplicação de padrões de desenvolvimento back-end, boas práticas em JavaScript moderno (ES6+) e consumo de dados via requisições HTTP em formato JSON.

---

## 🎯 Objetivos de Aprendizagem

- Estruturação de APIs seguindo os princípios de arquitetura em camadas (Rotas, Controladores e Serviços).
- Manipulação e sanitização de dados no lado do servidor.
- Validação defensiva de requisições (`Request Body` e `Query Params`).
- Tratamento global de erros e padronização de códigos de status HTTP (`200`, `400`, `404`, `500`).
- Aplicação de algoritmos clássicos, operações assíncronas e utilitários de negócio em ambiente de servidor.

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**
- **Node.js**: Ambiente de execução assíncrono e orientado a eventos.
- **Express.js**: Framework para roteamento e gerenciamento de endpoints HTTP.
- **Git & GitHub**: Versionamento e colaboração de código.

---

## 📂 Estrutura do Repositório

```text
├── src/
│   ├── controllers/      # Camada que recebe as requisições e envia respostas
│   ├── routes/           # Mapeamento dos endpoints e métodos HTTP
│   ├── services/         # Regras de negócio, cálculos e lógica pura
│   ├── app.js            # Configuração de middlewares e rotas do Express
│   └── server.js         # Ponto de entrada e inicialização da porta do servidor
├── .gitignore            # Itens ignorados no versionamento (ex: node_modules/)
├── package.json          # Metadados e dependências do projeto
└── README.md             # Documentação técnica e acadêmica
