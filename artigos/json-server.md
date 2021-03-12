# JSON Server

### Testar a comunicação com a API, e agora? 😱😱

- Calma, não precisa se assustar!😉  
  Se você assim como eu já se deparou muitas vezes com a necessidade de testar a comunicação e requisições de uma aplicação com uma **API**, mas não quer "perder" tempo criando-a, o JSON Server é uma ótima escolha para solucionar esse problema.

### Mas o que é o JSON Server?

- O JSON Server é uma biblioteca criada principalmente para auxiliar os _desenvolvedores front-end_ a criar uma **REST API** em questões de segundos, ou seja, você terá um _back-end + CRUD_ funcionando sem precisar digitar varias linhas de código.

### Parece mágica! Como isso é possivel?

- Não é mágicas, é simplesmente o poder da programação!  
  Ao instalar o **JSON Server** no seu projeto, você estará evitando a criação de uma _API_ do zero, restando apenas utilizar ela para fazer suas **requisições**.

### Tá bom, como faço para instalar e usar esse tal de JSON Server?

- Antes de tudo é necessario que você tenha instalado algum gerenciador de pacote, seja o _npm, yarn ou outro_ de sua preferencia, usarei como exempro o **npm**;
- Está com o _diretorio raiz_ do seu projeto aberto em alguma _IDE_ ou no _terminal_;
- Executar o seguinte comando para baixar o JSON Server:
  - `npm install -g json-server`
- Ainda no _diretorio raiz_, criar um arquivo com o nome **db.json**, esse arquivo é padrão do JSON Server que irá monitorar e utilizar como _base de dados_.
- Inserir alguns _dados_ manualmente no arquivo *db.json* para testes:  
``{"usuarios": [{"id": 1, "name": "Marcos Santos", "age": 27}]}``  
- Após ter instalado e criado o arquivo de base de dados com alguns dados, basta executar o servidor com o seguinte comando no terminal:
  - `json-server --watch db.json`
- O endereço padrão do JSON Server é *http://localhost:3000/*, e o *end point* para acesso de informação, será o criado na db.json, logo teremos *http://localhost:3000/usuarios*.
- Agora já é possivel utilizar as requisições HTTP(GET, POST, PUT e DELETE) nesse end point.




   
   
