- Requisitos Funcionais
    1. O sistema deve permitir a inclusão, alteração e remoção de hóspedes do hotel, contendo os campos: nome, endereço, cidade onde mora, estado, país, telefone, e-mail, documento de identificação (RG ou CPF para brasileiros e passaporte para estrangeiros), data de nascimento e nome dos pais.
    2. O sistema deve permitir a inclusão, alteração e remoção dos itens de consumo, classificados por
    diversas categorias (frigobar, restaurantes e lavanderia), com os seguintes campos: código do item, descrição e preço de venda.
    3. O sistema deve permitir a inclusão, alteração e remoção de funcionários do hotel com os
    seguintes campos: nome, endereço, cidade, estado, telefone e data de nascimento.
    4. O sistema deve permitir a inclusão, alteração e remoção dos tipos de acomodação oferecidos
    pelo hotel, com os seguintes atributos: código do tipo de acomodação, descrição do tipo de
    acomodação, quantidade total de unidades desse tipo de acomodação desse hotel, preço da
    diária, número de pessoas adultas e número de crianças, que esse tipo de acomodação
    comporta.
    5. O sistema deve permitir a inclusão, alteração e remoção das acomodações existentes no resort,
    com os seguintes campos: número da acomodação, andar na qual a acomodação se encontra e
    código do tipo de acomodação. Para cada tipo de acomodação, pode existir diversas
    acomodações com número diferentes e localizadas em diversos andares do resort.
    6. Sistema deve permitir o processamento da reserva de acomodação. Cada reserva possui os
    seguintes atributos: data e hora de chegada do hóspede, data e hora de saída do hóspede,
    identificação do hóspede principal (previamente cadastrado), tipo de acomodação desejada,
    nomes e idades dos acompanhantes, valor da diária, taxa de multa a ser cobrada em caso de
    desistência de última hora (a menos de 12 horas do início previsto de entrada), os dados do
    cartão de crédito do hóspede e desconto concedido (opcional). A reserva somente deve ser
    concretizada se existirem vagas suficientes para atendê-la. Caso contrário, deverá ser mostrada
    uma mensagem alertando que não há disponibilidade de acomodações para o período indicado.
    A remoção de reserva somente é permitida sem maiores encargos até 12 horas antes do início
    previsto para estadia no hotel. Após esse período, a remoção da reserva deve alertar o
    funcionário do hotel de que deve ser cobrada a taxa de multa estabelecida durante a reserva.
    7. O sistema deve permitir o processamento da entrada de hóspede no hotel, com os seguintes
    atributos: data e hora de chegada do hóspede, data e hora prevista para saída do hóspede,
    identificação do hóspede principal (previamente cadastrado), número da acomodação utilizada,
    nomes e idades dos acompanhantes, valor da diária, funcionário responsável pelo recebimento
    do hóspede e desconto concedido (opcional). Se tiver sido feita a reserva prévia da
    acomodação, então, durante a entrada do hóspede, informa-se seu nome e o sistema recupera
    automaticamente os dados da reserva, que podem ser alterados, se necessário.
    8. O sistema deve permitir a inclusão, alteração e remoção de consumo do hóspede. Durante a
    estadia no hotel, diariamente um funcionário do hotel faz a coleta de informações no frigobar
    para informar ao sistema os itens consumidos. Além disso, pedidos feitos ao restaurante e
    serviços requisitados à lavanderia são instantaneamente comunicados ao sistema. Cada
    consumo do hóspede possui os seguintes atributos: data do consumo, nome do funcionário
    responsável, número da acomodação, código dos itens consumidos, quantidades consumidas e
    valor unitário.
    9. O sistema deve permitir o processamento da saída de hóspede do hotel, com os seguintes
    campos: número da acomodação utilizada, data e hora de saída do hóspede, número de diárias
    cobradas, valor de cada diária, valor dos gastos com telefonemas, e desconto concedido
    (opcional). O sistema deve automaticamente totalizar os gastos de consumo do hóspede, que
    foram previamente cadastrados, mostrando os subtotais por categoria (frigobar, restaurante e lavanderia). O sistema deve também apresentar na tela o total a pagar, que é a soma das
    diárias, acrescentando-se consumos e os telefonemas e subtraindo-se o desconto, se houver.
    10. O sistema deve permitir as seguintes opções de pagamento da estadia no hotel: 1) à vista (em
    dinheiro, cheque ou cartão de crédito); 2) faturado em 30 dias.
    11. O sistema deve permitir a quitação de uma fatura paga pelo hóspede, contendo as seguintes
    informações: número da fatura, data de vencimento, data de pagamento, valor total pago, juros
    e multa.
    12. O sistema deve permitir a impressão de uma listagem dos hóspedes que estão no hotel no
    momento, contendo o nome do hóspede principal, nome dos acompanhantes, data de entrada,
    data prevista para saída e número da acomodação.
    13. O sistema deve permitir a impressão de uma listagem das reservas efetuadas para a data atual,
    contendo o nome do hóspede principal, telefone para contato, tipo de acomodação e data
    prevista para saída.
    14. O sistema deve permitir a impressão de um comprovante de saída do hóspede, contendo o
    nome do hóspede, documento, datas e horários de entrada e saída, número total de diárias,
    valor total das diárias, valor total do consumo do hóspede, valor total dos telefonemas, valor do
    desconto e total a pagar. Nesse mesmo comprovante deve ser mostrada uma lista com os
    produtos consumidos, contendo a data do consumo, descrição do item de consumo, quantidade
    consumida, preço unitário e preço total. Ainda nesse comprovante deve constar a forma de
    pagamento e deve ser reservado um espaço para assinatura do hóspede.
    15. O sistema deve permitir ao hóspede imprimir um histórico de suas estadias no hotel. Para tal o
    hóspede deve ter sido previamente cadastrado e deve portar um código de identificação e uma
    senha. Esse histórico deve conter uma linha para cada estadia do hóspede, contendo as datas
    de entrada e saída e os totais pagos em cada ocasião.
    16. O sistema deve permitir a consulta on-line da ocupação das acomodações num certo período.
    Uma acomodação está ocupada se existem hóspedes utilizando-a no momento. Uma
    acomodação está disponível se não está ocupada no período e o número de reservas para tal
    tipo de acomodação no período é inferior ao número total de acomodações existentes para tal
    tipo. Essa consulta deve mostrar uma linha para cada tipo de acomodação oferecida, constando,
    em cada uma dessas linhas, o código do tipo de acomodação, a descrição do tipo de
    acomodação, o número de acomodações existentes, o número de acomodações ocupadas, o
    número de acomodações reservadas e o número de acomodações disponíveis.
    17. O sistema deve permitir a impressão de um relatório resumindo o faturamento do hotel no
    período (por exemplo, semanal ou quinzenal), contendo, para cada dia do período, um resumo
    das estadias pagas nesse dia, com sete colunas: diárias, frigobar, restaurante,
    lavanderia, telefonemas, descontos e total.
    18. O sistema deve permitir a impressão diária das faturas a serem enviadas aos hóspedes que
    optaram pelo faturamento de suas contas. A fatura contém o nome e endereço completo do
    hóspede, o período de estadia, o total de diárias, o total com demais gastos, o valor do
    desconto, o total líquido a pagar e a data de vencimento.
    19. O sistema deve permitir a impressão de um relatório contendo as faturas em atraso no período
    (por exemplo, semanal ou quinzenal), contendo, para cada dia do período, o nome do hóspede,
    a data de vencimento e o valor devido pelo hóspede.
    20. O cliente poderá fazer uma serva on-line após o cadastro no sistema.
- Requisitos Não Funcionais
    1. Confiabilidade
        1. O sistema deve ter capacidade para recuperar os dados perdidos da última operação que
        realizou em caso de falha.
        2. O sistema deve fornecer facilidades para a realização de backups dos arquivos do sistema.
        3. O sistema deve possuir senhas de acesso e identificação para diferentes tipos de usuários:
        administrador do sistema, funcionários do hotel.
    2. Eficiência
        1. O sistema deve responder a consultas on-line em menos de 5 segundos.
        2. O sistema deve iniciar a impressão de relatórios solicitados dentro de no máximo 20
        segundos após sua requisição.
    3. Portabilidade
        1. O sistema deve ser executado em computadores Intel 16GHz ou superior, com sistema
        operacional Windows 11 ou acima.
        2. O sistema deve ser capaz de armazenar os dados em base de dados Postgree ou MySql
    4. Usabilidade
        1. O sistema deve fazer uso de uma interface intuitiva para permitir a utilização por leigos.