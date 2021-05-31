# Terminal de Acesso

### **Deu tela preta, o que fazer?**

Nem sempre a tela preta significa algo ruim, principalmente no mundo do desenvolvimento de softwares. É necessário que os desenvolvedores perdão o medo da conhecida "tela preta" e comecem a explorar esse recurso tão útil no dia a dia!

### **Command line**

* GUI - Graphical User Interface: são os recursos visuais disponibilizados pelos sistemas, que facilita a utilização do mesmo. Por exemplo: mouse e seu cursor, ícones de programas, janelas, menus, botões, visualizador de arquivos e etc.

* CLI - Command Line Interface: interface básica para inserção de comandos operacionais para o sistema, onde todas as ações e operações realizadas pelo computador serão feitas através de comandos em formato de texto.
    * O shell ou interpretador é o responsável por converter os comandos inseridos em instruções que o kernel(controlador do hardware) consiga interpretar.

### **Sintaxe dos comandos**

Normalmente os comandos são divididos em três partes:
* Command: essa parte é obrigatória, indica qual ação deseja-se executar.
* Options(s): é responsável por mudar o comportamento da ação em execução; explica ao comando como ele deve funcionar. A maioria dos comandos oferece varias opções para serem usadas. Normalmente começa com um traço(-) e apenas uma letra, pode-se usar a combinação de mais de uma opção de uma única vez, a ordem não importa. ex.: xx -lh ou xx -l -h. É opcional.
* Argument(s): informa onde o comando vai operar; ou o caminho do arquivo ou diretório. É opcional.

### **Comandos**

Existem vários comandos que podem ser utilizados no terminal, abaixo estão alguns que são mais utilizados e conhecidos:  
* **pwd:** utilizado para mostrar o diretório atual.
* **cd:** é a abreviação de change directory, como o próprio nome indica, muda de diretório(pasta). Algumas opções podem ser utilizadas juntas com o comando 'cd':
    - (ponto) . : muda para o diretório atual; (cd .)
    - (ponto-ponto).. : muda para o diretório anterior; (cd ..)
    - (til) ~ : volta para o diretório de onde você veio. (cd ~)  
    **OBS:** caso o nome do diretório tenha espaço, pode-se utilizar a barra invertida(\) antes dos espaços, ex.: cd Nome\ Com\ Espaço. Ou pode-se colocar o nome entre aspas(""), ex.: cd "Nome Com Espaço". Deve-se evitar colocar espaços, acentos e caracteres especiais nos nomes de arquivos e diretórios.

* **ls:** lista os arquivos e pastas dentro de determinado diretório. Pode ser usado com algumas opções:
  * nome_pasta: lista os arquivos da pasta sem mudar de diretório.(ls nome_pasta)
  * -l: lista de forma mais detalhada os arquivos.(ls -l)
  * -h (human): lista de forma mais detalhada os arquivos, porem de maneira mais legível. (ls -lh)
  * -a (all): lista todos os arquivos do diretório, inclusive os ocultos. (ls -lha)
  * -R (recursive): lista os arquivos dentro das pastas do diretório. (ls -R)
  * -S (sort): lista os arquivos de forma ordenada pelo tamanho. (ls -S)
* **file:** fornece informações sobre o arquivo, além de apresentar seu tipo.(file nome_arquivo)
* **stat:** fornece informações mais detalhadas sobre o arquivo, como o dono, data de modificação, tamanho e etc.
* **mkdir:** make directory, comando utilizado para criação de diretórios.(mkdir nome_diretorio) Pode ser usado a opção:
  * -p (parent): cria o diretório pai e seus filhos. (mkdir nome_diretorio/nome_filho).
* **touch:** utilizado para alterar o registro de data e hora de arquivos ou pastas. Além de possibilitar a criação de arquivos. (touch nome_arquivo.extensao).

