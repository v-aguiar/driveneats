# projeto3-driveneats

## Requerimentos
--> VERSIONAMENTO
- [X]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub
- [ ]  Faça commits a cada funcionalidade implementada

--> LAYOUT
- [ ]  Aplicar layout para mobile, seguindo imagens fornecida (não é necessário implementar um layout para desktop)
- [ ]  O topo e o botão de fechar pedido devem ter posicionamento fixo e não rolar com a barra de rolagem
- [ ]  Você pode usar imagens e textos aleatórios para ilustrar a página, porém varie o preço em cada item da mesma categoria
- [ ]  As fontes utilizadas são: [Righteous] (nome do restaurante e títulos das categorias) e [Roboto] (demais textos)
- [ ]  Para fazer as sombras presentes em alguns elementos, pesquise sobre como aplicar sombras em CSS e brinque com os valores até ficar parecido com as imagens do layout
- [ ]  Para fazer os produtos rolarem horizontalmente, utilize `overflow-x: scroll`. No modo desktop um scroll é exibido, mas no modo celular não.

--> SELEÇÃO DE ITENS
- [ ]  Ao clicar sobre um item, o mesmo deve ser marcado como selecionado, seguindo layout da tela 3
- [ ]  Ao clicar em um item, caso já exista um item selecionado na mesma categoria, este deve ser desmarcado e o novo item clicado deve ser o novo selecionado
- [ ]  Ao clicar em um item já marcado, **não** é necessário desmarcá-lo

--> BOTÃO DE FINALIZAR PEDIDO
- [ ]  Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.
- [ ]  Quando o usuário tiver selecionado os itens das 3 categorias, o botão deve mudar para o estado de habilitado, seguindo layout da tela 5

--> ENVIO DO PEDIDO
- [ ]  Ao finalizar o pedido, o usuário deverá ser encaminhado para o **WhatsApp Web**, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida
    
    **Dica**: Para criar um link que envia uma mensagem via WhatsApp, veja essa página de ajuda do WhatsApp: [https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat?lang=pt](https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat?lang=pt)
    
    **Dica 2**: Para preparar a mensagem para o formato que o WhatsApp espera, pesquise por uma função chamada `encodeURIComponent(minhaString)`
    
- [ ]  Essa mensagem deverá seguir este formato:
    
    ```css
    Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27.70
    ```
    
    **Dica**: para formatar um número decimal no formato 27.70, pesquise por `toFixed`

--> CORREÇÃO DO PROJETO
- Para facilitar a correção do projeto, adicione estes atributos nos elementos HTML:

  - [ ] Grupos de opções de comida
      
      Os diferentes grupos de opções de comida devem ser identificados.
      
      - No elemento que contém todos os pratos (a primeira seção) adicione o atributo `data-identifier="dishes"`
          - Que elemento é esse?
              
              É o elemento com as opções de prato: (imagem no notion)
              
              O elemento que contém cada um destes "Frango Yin Yang" deve receber o atributo.
              
      - No elemento que contém todas as bebidas (a segunda seção), adicione o atributo `data-identifier="drinks"`
          - Que elemento é esse?
              
              É o elemento que contém as opções de bebida: (imagem no notion)
              
              O elemento que contém cada um destes "Coquinha gelada" deve receber o atributo.
              
      - No elemento que contém todas as sobremesas (a terceira seção), adicione o atributo `data-identifier="desserts"`
          - Que elemento é esse?
              
              É o elemento que contém as opções de sobremesa: (imagem no notion)
              
              O elemento que contém cada um destes "Pudim" deve receber o atributo.
              
  - [ ] Opções de comida
      - Em cada um dos elementos que é uma opção de comida (prato, bebida ou sobremesa) adicione o atributo `data-identifier="food-option"`
          - Que elementos são esses?
              
              São todos os elementos de comida, que seguem este layout: (imagem no notion)
              
      - Adicione também o atributo `data-identifier="food-title"` no nome da opção de comida
          - Que elemento é esse?
              
              É o elemento que exibe o título da comida dentro da caixinha de comida. (imagem no notion)

      - Por fim, adiciona o atributo `data-identifier="food-price"` no preço da opção de comida
          - Que elemento é esse?
              
              É o elemento que contém o preço da comida: (imagem no notion)
              
      - ⚠️ **Atenção!** O preço **deve** conter "R$", separado por um espaço e vírgula para separar os centavos!
          - Exemplos de casos
              
              ### Casos válidos
              
              ```html
              R$ 10,90
              R$ 4,33
              ```
              
              ### Casos inválidos
              
              ```html
              R$10,90
              R$ 10.90
              10,90
              10.90
              10,9
              R$ 10,9
              R$ 10.9
              R$ 10, 90
              R$ 10 ,90
              R$ 10 , 90
              ```
              
              Esta lista não é exaustiva, mas serve de exemplos de formatos que **não são válidos**. Por via de regra, se não segue o formato dado nos casos válidos, será considerado incorreto.
              
  - [ ] Botão de fechar pedido
      
      O botão de fechar pedido **deve ter o mesmo texto especificado no layout do Figma escrito.** Isto inclui o “Fechar pedido” e “Selecione os 3 itens para fechar o pedido”.
      
  - [ ] Bônus 1: Peça nome e endereço
      
      Ao pedir nome e endereço, devem ser pedidos com `prompt`. Qualquer outra forma irá falhar. 
      
  - [ ] Bônus 2: Confirme os dados antes de finalizar o pedido
      - Adicione o atributo `data-identifier="confirmation-dialog"` no elemento que contém as informações de confirmação.
          - Que elemento é esse?
              
              É a caixa verde com os itens selecionados e seus respectivos preços, além do total (imagem no notion)
              
      - **⚠️ Atenção!** Os preços devem ser escritos da mesma forma! Nos itens, sem o "R$". Já no total, com "R$" e espaço, além de usar vírgula em todos.
      - ⚠️ Atenção! Todos os textos
          - Confirme seu pedido
          - TOTAL
          - Tudo certo, pode pedir!
          - Cancelar
          
          devem ser escritos **da mesma maneira**
          

  Por fim, a página HTML do projeto deve se chamar `index.html` e deve estar na raíz do projeto.


--> BÔNUS
- [ ] Bônus 1: Peça o nome e endereço
    
    Ao clicar em finalizar pedido, lance dois `prompt` para o usuário solicitando seu nome e endereço. Essas informações devem então serem adicionadas na mensagem final que é enviada por WhatsApp nesse formato:
    
    ```
    Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27.70
    
    Nome: Fulano
    Endereço: Rua...
    ```
    
- [ ] Bônus 2: Confirme os dados antes de finalizar o pedido
    
    Ao clicar em "Finalizar pedido", em vez de ir para o WhatsApp direto, primeiro revise a compra seguindo a tela Bônus disponível no Figma.
