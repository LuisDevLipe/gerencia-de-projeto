# Estrutura Analítica do Projeto (EAP/WBS)

- [EAP no formato .odt](./%28Work%20Breakdown%20Structure%29-Estrutura%20Anal%C3%ADtica%20do%20Projeto.odt)

- [EAP do Projeto no Gantt Project](./sistema-hoteleiro-green-garden.gan)

## Estrutura Analítica do Projeto (EAP) - Sistema de Gestão Hoteleira

1.0 Gerenciamento do Projeto
1.1 Planejamento e Iniciação do Projeto
1.2 Definição do Cronograma e Marcos (Milestones)
1.3 Gerenciamento de Riscos e Custos
1.4 Comunicação e Relatórios de Status
1.5 Encerramento do Projeto
2.0 Análise e Design do Sistema
2.1 Refinamento dos Requisitos Funcionais e Não Funcionais
2.2 Design da Arquitetura do Sistema
2.3 Design da Interface do Usuário (UI) e Experiência do Usuário (UX)
2.3.1 Criação de Wireframes e Protótipos das Telas
2.4 Design do Banco de Dados (PostgreSQL ou MySQL)
2.4.1 Modelagem de Dados (Entidades: Hóspedes, Funcionários, Acomodações, Reservas, Consumos, Faturas, etc.)
2.4.2 Definição de Esquemas e Relacionamentos
3.0 Desenvolvimento do Sistema
3.1 Módulo de Cadastros (Core)
3.1.1 Gerenciamento de Hóspedes (Inclusão, Alteração, Remoção)
3.1.2 Gerenciamento de Itens de Consumo (Inclusão, Alteração, Remoção, Categorização)
3.1.3 Gerenciamento de Funcionários (Inclusão, Alteração, Remoção)
3.1.4 Gerenciamento de Tipos de Acomodação (Inclusão, Alteração, Remoção)
3.1.5 Gerenciamento de Acomodações Individuais (Inclusão, Alteração, Remoção)
3.2 Módulo Operacional e de Reservas
3.2.1 Processamento de Reservas
3.2.1.1 Criação e Alteração de Reservas
3.2.1.2 Verificação de Disponibilidade em Tempo Real
3.2.1.3 Lógica de Multa por Cancelamento (< 12h)
3.2.2 Processamento de Check-in (Entrada do Hóspede)
3.2.2.1 Integração com Reservas Existentes
3.2.2.2 Lançamento de Entrada sem Reserva
3.2.3 Lançamento de Consumos do Hóspede
3.2.3.1 Interface para Lançamento (Frigobar, Restaurante, Lavanderia)
3.2.3.2 Associação do Consumo à Acomodação
3.2.4 Processamento de Check-out (Saída do Hóspede)
3.2.4.1 Cálculo Automático de Diárias e Consumos
3.2.4.2 Aplicação de Descontos e Taxas (Telefonemas)
3.2.4.3 Geração do Extrato Final para Pagamento
3.3 Módulo Financeiro
3.3.1 Processamento de Pagamentos
3.3.1.1 Implementação de Opção à Vista (Dinheiro, Cheque, Cartão)
3.3.1.2 Implementação de Opção Faturado (30 dias)
3.3.2 Gerenciamento de Faturas
3.3.2.1 Geração de Faturas
3.3.2.2 Quitação de Faturas (com Juros e Multa, se aplicável)
3.4 Módulo de Relatórios e Consultas
3.4.1 Geração de Listagens Operacionais
3.4.1.1 Listagem de Hóspedes Atuais
3.4.1.2 Listagem de Reservas para a Data Atual
3.4.2 Geração de Comprovantes e Faturas
3.4.2.1 Impressão de Comprovante de Saída
3.4.2.2 Impressão de Faturas Diárias para Envio
3.4.3 Geração de Relatórios Gerenciais
3.4.3.1 Relatório de Faturamento por Período
3.4.3.2 Relatório de Faturas em Atraso
3.4.4 Consulta de Ocupação Online
3.4.4.1 Tela de Consulta de Disponibilidade por Período
3.5 Portal do Hóspede (Online)
3.5.1 Sistema de Cadastro e Autenticação de Hóspedes (Login/Senha)
3.5.2 Funcionalidade de Reserva Online
3.5.3 Consulta e Impressão de Histórico de Estadias
3.6 Implementação de Requisitos Não Funcionais
3.6.1 Sistema de Autenticação e Controle de Acesso por Nível (Administrador, Funcionário)
3.6.2 Desenvolvimento dos Mecanismos de Backup e Recuperação
3.6.3 Otimização de Performance de Consultas e Relatórios
3.6.4 Configuração de Compatibilidade (Windows 11+, Intel 16GHz+, PostgreSQL/MySQL)
4.0 Testes e Garantia de Qualidade (QA)
4.1 Elaboração do Plano de Testes
4.2 Testes Unitários de cada funcionalidade
4.3 Testes de Integração entre Módulos
4.4 Testes de Sistema (verificação de todos os requisitos)
4.5 Testes de Usabilidade (validação da interface intuitiva)
4.6 Testes de Performance (validação dos tempos de resposta < 5s e < 20s)
4.7 Testes de Segurança (validação dos níveis de acesso)
4.8 Testes de Recuperação de Falhas (Backup/Restore)
5.0 Implantação e Treinamento
5.1 Preparação do Ambiente de Produção (Servidores, Banco de Dados)
5.2 Instalação e Configuração do Sistema
5.3 Migração de Dados (se houver sistema legado)
5.4 Elaboração da Documentação
5.4.1 Manual do Usuário (Funcionários do Hotel)
5.4.2 Documentação Técnica
5.5 Treinamento dos Usuários
5.5.1 Treinamento para Administradores
5.5.2 Treinamento para Funcionários
6.0 Manutenção e Suporte
6.1 Período de Operação Assistida Pós-Implantação
6.2 Plano de Suporte Contínuo
6.3 Gerenciamento de Correções (Bugs) e Melhorias
