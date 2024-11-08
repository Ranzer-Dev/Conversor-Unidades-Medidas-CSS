# em desenvolvimento, ultima atualização Dia 8/11/2024

# Calculadora de Conversão de Unidades CSS

Este projeto é uma **calculadora de conversão de unidades CSS** desenvolvida para ajudar desenvolvedores a converter unidades de medida comuns no CSS, como `px`, `pt`, `cm`, `em`, entre outras. A aplicação oferece uma interface simples onde o usuário escolhe uma unidade, insere um valor e obtém a conversão em pixels ou em outras unidades.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Unidades de Conversão](#unidades-de-conversão)
- [Como Utilizar](#como-utilizar)
- [Tabela de Conversões](#tabela-de-conversões)
- [Notas sobre as Unidades CSS](#notas-sobre-as-unidades-css)
- [Exemplo de Uso](#exemplo-de-uso)
- [Tecnologias Usadas](#tecnologias-usadas)

## Visão Geral

A calculadora fornece uma forma de **entender e realizar conversões entre unidades CSS**, facilitando o trabalho com tamanhos de fontes, espaçamentos, e dimensões em layouts responsivos.

## Funcionalidades

- Escolha de unidades de entrada e saída entre `px`, `pt`, `cm`, `mm`, `in`, `em`, `rem`, `vw`, `vh`, `ch`, `fr`.
- Conversão automática baseada em fórmulas CSS padrões.
- Explicações detalhadas sobre como cada unidade se comporta e exemplos de uso.

## Unidades de Conversão

A aplicação suporta as seguintes unidades de medida CSS:

- **Unidades Absolutas**: `px`, `pt`, `cm`, `mm`, `in`, `pc`.
- **Unidades Relativas**: `em`, `ex`, `%`.
- **Unidades de Viewport**: `vw`, `vh`, `vmin`, `vmax`.
- **Unidades Baseadas no Elemento Raiz**: `rem`, `ch`.

## Como Utilizar

1. Clone este repositório ou faça o download dos arquivos.
2. Abra o arquivo `index.html` no navegador.
3. Escolha uma unidade na lista suspensa e insira o valor a ser convertido.
4. Clique no botão "Converter" para visualizar o resultado.
5. Role a página para obter explicações detalhadas sobre cada unidade e as fórmulas de conversão.

## Tabela de Conversões

Abaixo está uma tabela com as principais fórmulas de conversão de unidades usadas no CSS:

| Unidade | Fórmula de Conversão | Descrição |
| ------- | --------------------- | --------- |
| `px`    | `1px = 1px`          | Pixels são a unidade básica na tela. |
| `pt`    | `px = pt × 4/3`      | Pontos usados para impressão (1pt = 1/72 polegada). |
| `cm`    | `px = cm × 37.795`   | Centímetros, onde 1cm ≈ 37.795px. |
| `mm`    | `px = mm × 3.7795`   | Milímetros, mais precisos que cm. |
| `in`    | `px = in × 96`       | Polegadas, com 1in = 96px. |
| `pc`    | `px = pc × 16.6667`  | Picas, comuns em design gráfico. |

Para unidades relativas, como `em` e `rem`, e unidades de viewport, como `vw` e `vh`, consulte a seção **Fórmulas de Conversão de Unidades CSS** no próprio site.

## Notas sobre as Unidades CSS

- **Unidades Absolutas**: Medidas como `cm`, `mm`, e `in` dependem da densidade de pixels do dispositivo. As fórmulas são aproximações baseadas em uma densidade padrão de 96 DPI.
- **Unidades Relativas e de Viewport**: Unidades como `em`, `rem`, `vw`, `vh`, `vmin`, e `vmax` se adaptam com o tamanho da fonte do elemento pai ou com o tamanho da janela do navegador, possibilitando designs responsivos.

## Exemplo de Uso

Aqui está um exemplo de como a aplicação pode ser usada:

1. Selecione a unidade `cm` e insira o valor `2`.
2. Clique em "Converter".
3. O resultado será a conversão do valor em pixels usando a fórmula `px = cm × 37.795`.

## Tecnologias Usadas

- **HTML**: Estrutura da página.
- **CSS**: Estilos e layout.
- **JavaScript**: Lógica de conversão e interatividade.

## Contribuição

Sinta-se à vontade para abrir uma issue ou pull request caso tenha sugestões ou melhorias para o projeto.

---

Este projeto foi criado para facilitar a conversão de unidades CSS, especialmente em situações onde entender como cada unidade se comporta em diferentes dispositivos e resoluções é essencial para o desenvolvimento de interfaces responsivas.
