import type { IconName } from "@/components/icons";

export type Feature = {
  icon: IconName;
  title: string;
  text: string;
  soon?: boolean;
};

export const features: Feature[] = [
  {
    icon: "cart",
    title: "Vendas e pedidos em segundos",
    text: "Cliente, itens, sabores e quantidade. O preço vem da sua tabela e fica gravado como retrato daquela venda — reajuste futuro não bagunça o histórico.",
  },
  {
    icon: "calendar",
    title: "Previsão de recebimento",
    text: 'Marcou como pendente? Escolha "dia 5", "5º dia útil" (com feriados nacionais) ou uma data sua. O que está por entrar aparece no painel como receita prevista.',
  },
  {
    icon: "chart",
    title: "Painel que responde na hora",
    text: "Faturamento recebido, previsto, número de vendas e ticket médio. Filtre por período, produto, sabor, cliente ou status e compartilhe a visão pelo link.",
  },
  {
    icon: "box",
    title: "Estoque e produção",
    text: '"Fiz 60 cookies hoje" entra no saldo, cada venda sai. Ajuste manual com motivo e histórico completo de movimentação.',
  },
  {
    icon: "recipe",
    title: "Receitas com custo real",
    text: "Ficha técnica com ingredientes, rendimento e passo a passo em editor de blocos. O sistema calcula o custo da receita e o custo por unidade produzida.",
  },
  {
    icon: "bag",
    title: "Mercados e comparação de preços",
    text: "Registre onde comprou, quanto pagou e a quantidade. O Bigas converte para a unidade base e mostra onde o mesmo insumo sai mais barato.",
  },
  {
    icon: "list",
    title: "Lista de compras inteligente",
    text: "Ingrediente abaixo do mínimo entra sozinho na lista. Você sai de casa sabendo exatamente o que comprar e quanto vai gastar.",
  },
  {
    icon: "users",
    title: "Clientes e equipe",
    text: "Histórico por cliente, quem compra mais e quem está devendo. Convide sua equipe com níveis de acesso — só quem é admin mexe em preços e cadastros.",
  },
  {
    icon: "coins",
    title: "Parcelado na Palavra",
    text: "O parcelamento sem cartão, combinado de boca em boca. Você define as parcelas, o sistema cobra a data e joga tudo na sua previsão de caixa.",
    soon: true,
  },
];

export const segments = [
  "🍪 Cookies e doces",
  "🍱 Marmitas",
  "🎂 Confeitaria",
  "🥟 Salgados",
  "🥖 Padaria artesanal",
  "🚚 Food truck",
  "🍫 Chocolates",
  "☕ Cafeteria",
  "👗 Brechó",
  "🧶 Artesanato",
  "💄 Cosméticos",
  "🛵 Delivery",
  "🧺 Feira livre",
  "🌱 Hortifruti",
];

export const pains = [
  {
    title: "Fiado que vira presente",
    text: "Você lembra do combinado, mas não da data. E cobrar fica constrangedor quando você não tem o registro.",
  },
  {
    title: "Preço no chute",
    text: "Sem saber quanto custa a matéria-prima de cada unidade, você pode estar vendendo bem e ganhando mal.",
  },
  {
    title: "Estoque na sorte",
    text: "Descobrir que acabou o ingrediente no meio da produção custa tempo, frete e pedido cancelado.",
  },
  {
    title: "Planilha que ninguém abre",
    text: "Planilha no notebook não funciona para quem vende na rua, na feira ou entregando de moto.",
  },
];

export const steps = [
  {
    title: "Cadastre o que você vende",
    text: "Produtos, sabores e preços. Se você vende cookie, marmita, peça de brechó ou vela artesanal, tanto faz — o cadastro é seu.",
  },
  {
    title: "Registre a venda na hora",
    text: "Pago agora ou fiado com data prevista. Três toques no celular, ali mesmo, na frente do cliente.",
  },
  {
    title: "Decida com número, não com achismo",
    text: "Veja o que entrou, o que falta entrar, quanto custa produzir e onde está a sua margem de verdade.",
  },
];

export const highlights = [
  { value: "3", label: "toques para registrar uma venda" },
  { value: "0", label: "planilhas para manter" },
  { value: "100%", label: "pensado para o celular" },
  { value: "14 dias", label: "grátis, sem cartão de crédito" },
];

export const faqs = [
  {
    q: "O Bigas serve para qualquer tipo de negócio?",
    a: "Sim. O Bigas nasceu no mundo dos produtos alimentícios — cookies, doces, salgados, marmitas, bolos — mas funciona para qualquer micro, pequeno ou médio vendedor que precise controlar vendas, clientes, estoque e custos: brechó, artesanato, cosméticos, bebidas, feira e revenda em geral.",
  },
  {
    q: "Preciso instalar algum programa?",
    a: "Não. O Bigas roda no navegador e pode ser instalado na tela inicial do celular como um aplicativo, com ícone próprio. Nada de loja de aplicativos, nada de atualização manual.",
  },
  {
    q: "Como funciona o controle de fiado e a previsão de recebimento?",
    a: "Toda venda pode ser marcada como paga ou pendente com data prevista. Há atalhos para as datas mais usadas no Brasil — o dia 5 do mês e o 5º dia útil, já considerando fins de semana e feriados nacionais. O valor a receber aparece no painel como receita prevista, separado do que já entrou.",
  },
  {
    q: "O Bigas calcula o custo dos meus produtos?",
    a: "Sim. Você registra as compras de insumos por mercado e o sistema converte tudo para a unidade base. Pagou R$ 2,50 no quilo de açúcar? Ele já sabe quanto custam os 200 g da sua receita — e usa isso para calcular o custo da ficha técnica e o custo por unidade produzida.",
  },
  {
    q: "O que é o parcelamento sem cartão do Bigas?",
    a: "É o Parcelado na Palavra, recurso em desenvolvimento: o parcelamento de boca em boca, combinado direto com o cliente, sem maquininha e sem intermediário levando um pedaço. O Bigas registra o combinado, controla parcela por parcela e coloca cada uma na sua previsão de caixa.",
  },
  {
    q: "Qual plano eu escolho e o que é um workspace?",
    a: "Workspace é um espaço de trabalho independente, com seus próprios produtos, estoque, clientes e painel. Se você toca um negócio só, o Corre resolve. Se você separa marcas, pontos de venda, sócios ou uma cozinha e uma loja, o Cresce dá até quatro. Acima disso, o Escala é sob medida.",
  },
  {
    q: "Por que o plano anual é mais barato?",
    a: "Porque você paga uma vez só e o preço fica travado até a próxima renovação: R$ 120 de economia por ano em qualquer plano. Somando o desconto do Pix recorrente, são R$ 180 por ano — o Corre sai de R$ 39,50 para R$ 24,50 por mês e o Cresce de R$ 99,90 para R$ 84,90. Não há fidelidade: o desconto é pelo pagamento antecipado, não por contrato preso.",
  },
  {
    q: "Como funciona o desconto do Pix recorrente?",
    a: "O Pix recorrente é a autorização que você dá uma única vez no app do seu banco para que a cobrança do Bigas seja debitada sozinha na data combinada — sem cartão e sem boleto para pagar todo mês. Como esse meio custa menos para nós do que a bandeira do cartão, devolvemos a diferença: R$ 5 a menos por mês, em qualquer plano e em qualquer ciclo. A autorização é cancelável por você no próprio banco, quando quiser.",
  },
  {
    q: "Posso testar antes de pagar?",
    a: "Pode. São 14 dias grátis com todos os recursos liberados e sem cartão de crédito. Se não fizer sentido, é só não assinar — e o que você cadastrou continua lá se voltar depois.",
  },
  {
    q: "E se eu quiser trocar de plano ou cancelar?",
    a: "Troca de plano ou de forma de pagamento a qualquer momento, com o valor ajustado proporcionalmente. Cancelamento também a qualquer momento, sem multa e sem ligação de retenção. Seus dados podem ser exportados antes de sair.",
  },
  {
    q: "Se eu reajustar meus preços, o histórico muda?",
    a: "Não. Cada venda guarda um retrato do preço praticado no momento em que foi feita. Você reajusta a tabela quando quiser e o faturamento dos meses anteriores continua exatamente como foi.",
  },
];
