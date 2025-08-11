# Processo Kanban — PDS Corporativo

Site simples com o processo ágil usado no PDS, baseado em Kanban. O foco é visualização do fluxo, limites de WIP e melhorias curtas e contínuas.

Site publicado: https://luuiizf.github.io/processo-kanban-pds

## O que tem no site

- Diagrama de atividades (draw.io exportado para PNG)
- Quadro Kanban com simulação de fluxo e aviso de WIP
- Tabela de atividades (inclui gerência, testes e implantação)
- Papéis e responsabilidades
- RACI (quem faz o quê)
- Práticas ágeis (geral) e Práticas por atividade

Checklist do enunciado
- [x] Diagrama de atividades (ciclo de vida)
- [x] Descrição de cada atividade
- [x] Papéis e associação às atividades (RACI)
- [x] Práticas ágeis aplicadas nas atividades
- [x] Inclui gerência, testes e implantação
- [x] Site simples no GitHub Pages (link acima)

## Fluxo (resumo)

Backlog → A Fazer → Em Andamento → Em Teste → Concluído

Atividades de gerência/apoio no processo:
- Replenishment/Planejamento
- Gestão de Métricas/Fluxo (CFD, lead/cycle, throughput)
- Review/Demo e Retrospectiva
- Feedback de Usuário
- Implantar (deploy)

## Papéis

- PO: valor e prioridade, critérios, aceite
- SDM/Agile Coach: fluxo, impedimentos, métricas, cadências
- Tech Lead: direção técnica e padrões
- Devs: implementação, testes unit, PRs
- QA: planejar/executar/automatizar testes
- Stakeholders: feedback e validações

RACI simples está no site (tabela Papéis × Atividades).

## Práticas (exemplos)

- Limites de WIP e política de pull por capacidade
- DoR (A Fazer) e DoD (Concluído)
- PR pequeno + review, branch curta, pair quando útil
- Testes auto (unit/integr.), exploração e evidências
- CI/CD, smoke pós-deploy, plano de rollback
- Métricas: lead/cycle, throughput e CFD
- Gestão de bloqueios e classes de serviço (Expedite, Padrão, Data fixa)

## Estrutura do repositório

- index.html — página única com todas as seções
- styles.css — estilos do site
- script.js — simulação do fluxo e impressão
- processo-kanban.drawio.png — diagrama do processo
- README.md — este arquivo

Obs: os limites de WIP estão nos atributos data-wip das colunas (HTML).

## Como rodar local

1) Baixe/clonar o repositório  
2) Abra o arquivo index.html no navegador

Opcional: usar “Live Server” no VS Code para auto-reload.

## Equipe

- Luiz Roberto da Silva Gonzaga (20232014040027)  
- Luiz Fernando Gama Nery (20232014040019)

Professor(a): Marília Aranha
Matéria: Processo de Software
