# Diana

**Sumário**
- [Propostas escolhidas](#propostas-escolhidas)
  - [GEAP](#geap)
  - [Mynt](#mynt)
  - [Titanium](#titanium)
- [Visão Geral do Projeto](#visão-geral-do-projeto)
  - [Objetivo](#objetivo)
  - [A Solução](#a-solução)
  - [Proposta de Valor](#proposta-de-valor)
- [Tecnologias](#tecnologias)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Métricas](#métricas)
  - [de tecnologia](#de-tecnologia)
  - [de negócios](#de-negócios)
- [Implementações futuras](#implementações-futuras)

# Propostas escolhidas

## GEAP

A GEAP busca promover o desenvolvimento sustentável e combater as mudanças climáticas por meio do incentivo a soluções inovadoras que utilizem a tecnologia blockchain para transformar o mercado de ativos sustentáveis e ter um impacto positivo no meio ambiente. O objetivo é integrar a plataforma "Bolsa Verde" com outras bolsas de ativos sustentáveis baseadas em blockchain, focando em aspectos essenciais que demonstrem o potencial de expansão futura e contribuam para um futuro mais verde e próspero para o planeta e seus habitantes.

## MYNT

O objetivo é inspirar os participantes a criar soluções inovadoras centradas na stablecoin BTG Dol, melhorando sua acessibilidade, liquidez e promovendo um ecossistema próspero. A transacionalidade baseada em blockchain é vista como a melhor forma de lidar com ativos financeiros, porém, muitos indivíduos e empresas têm dificuldades para acessar esses ativos, tornando as transações um desafio. Os temas propostos incluem pagamentos contínuos de BTG Dol, soluções de carteira/portal e soluções de investimento como investimentos On/Off-chain, Liquidity Pools e Staking. O objetivo é abordar esses desafios e incentivar a exploração de novas tecnologias e aplicativos usando o BTG Dol.

## Titanium

Com a evolução das inteligências artificiais, como Chat-GPT e LLaMA AI, há uma oportunidade de desenvolver um sistema de análise e monitoramento financeiro usando dados quantitativos e algoritmos. A aplicação de inteligência artificial em finanças seria possível dessa forma.

# Visão geral do projeto

## Objetivo

Como empresa, seu objetivo é expandir seus negócios. 

Como humano, você quer garantir que o ecossistema permaneça saudável para as próximas gerações.

A nossa solução quer ajudá-lo a fazer as duas coisas. 
  
**Uma economia sustentável e positiva para a natureza**

Metade do PIB mundial - cerca de US$ 44 trilhões - é altamente ou moderadamente dependente da natureza. E a natureza também está intrinsecamente ligada ao clima. Em reconhecimento a essa dependência, os líderes do G7 anunciaram em 2021 que "nosso mundo não deve apenas se tornar net-zero, mas também positivo para a natureza, para o benefício das pessoas e do planeta". Além de contribuir para alcançar as metas globais de clima e biodiversidade.

## A Solução 

A "Diana" é uma plataforma disruptiva de negociação de crédito de carbono que utiliza stablecoins, mais especificamente a BTGDol. Ela une o mundo dos créditos de carbono com as stablecoins, proporcionando uma oportunidade de investimento que traz benefícios tanto para os usuários quanto para o meio ambiente.

Por meio de tecnologias avançadas e uma interface intuitiva, nossa plataforma permite que os usuários comprem e vendam créditos de carbono, sendo que tais transações são realizadas com o auxílio da BTGDol, promovendo uma maior segurança e transparência. Além disso, a plataforma conta com uma poderosa inteligência artificial que analisa os dados do mercado e as preferências dos usuários para sugerir as melhores opções de investimento de acordo com seu perfil e objetivos.

Por fim, a plataforma contribui para a construção de um futuro mais sustentável e responsável, além de ser uma plataforma de marketplace para agregar valor as empresas, criando ações de investimentos sustentáveis, unindo blockchain, as stablecoins e o mercado de crédito de carbono em um só lugar.

## Proposta de Valor 

- Acesso a um mercado global de ativos sustentáveis: Com a plataforma de negociação de créditos de carbono, as empresas Mynt, Geap e Titanium Asset podem acessar um mercado global de ativos sustentáveis, tornando mais fácil a procura de investimentos em projetos/empresas que ajudem a reduzir sua pegada de carbono e atingir seus objetivos de sustentabilidade.

- Transações transparentes e seguras: A plataforma utiliza blockchain e stablecoins para garantir que as transações sejam transparentes e seguras, reduzindo o risco de fraude e proporcionando tranquilidade para as empresas que estão investindo em ativos sustentáveis.

- Economia de custos: A plataforma de negociação de créditos de carbono elimina a necessidade de intermediários tradicionais, como corretores e bancos, reduzindo os custos e fornecendo uma opção de investimento mais acessível para as empresas.

- Impacto positivo no meio ambiente: A plataforma de negociação de créditos de carbono tem um impacto positivo no meio ambiente, ao incentivar investimentos em projetos sustentáveis e ajudar as empresas a reduzir suas emissões de carbono, o que pode melhorar sua imagem e reputação perante seus clientes e a sociedade em geral.

- Suporte de inteligência artificial: A inclusão de um chatbot com a API do ChatGPT permite que as empresas tenham acesso a conselhos de investimento personalizados baseados em sua estratégia de negócios e objetivos de sustentabilidade, o que pode ajudá-las a tomar decisões mais informadas sobre seus investimentos.

# Tecnologias

## Tecnologias utilizadas
- React JS
- Node 
- MySQL
- AWS
- Vercel 

## Arquitetura da solução
A solução consiste em três principais componentes: um smart contract na blockchain, um backend de gerenciamento de transações e um frontend para usuários interagirem com a solução.

O smart contract na blockchain é responsável por garantir que as transações de crédito de carbono e stablecoin sejam válidas e registradas de forma segura e transparente. Ele contém regras de negócios para a transferência de créditos de carbono e stablecoins, validação de saldos e prevenção de duplo gasto. Ele também fornece uma interface de programação (API) para que o backend possa interagir com ele.

O backend de gerenciamento de transações é responsável por conectar o smart contract com outras partes da solução, como bancos de dados, serviços de pagamento e provedores de identidade. Ele recebe solicitações do frontend, valida informações de usuário e transação, e se comunica com o smart contract para efetivar a transação. Ele também armazena informações de transações e usuários em um banco de dados para fins de auditoria e relatórios.

O frontend da solução é construído com React e CSS e permite que os usuários interajam com a solução de forma intuitiva e fácil. Ele se conecta com o backend para enviar solicitações de transação, visualizar informações de transação e saldo, e gerenciar suas contas. Ele inclui recursos de autenticação e segurança para garantir que apenas usuários autorizados possam acessar a solução.

![img](https://github.com/gio-rodrigues0/SheChain/blob/main/Apresenta%C3%A7%C3%A3o%20Hackaton.png)

# Implementações fu
