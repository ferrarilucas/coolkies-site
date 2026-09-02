export type Plan = {
  id: string;
  name: string;
  tagline: string;
  audience: string;
  workspaces: string;
  monthly: number | null;
  yearlyMonthly: number | null;
  featured?: boolean;
  ctaLabel: string;
  ctaHref: "app" | "whatsapp";
  inherits?: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "balcao",
    name: "Balcão",
    tagline: "Para quem toca tudo sozinho e quer sair do caderninho hoje.",
    audience: "Vendedor individual",
    workspaces: "1 workspace",
    monthly: 29.9,
    yearlyMonthly: 19.9,
    ctaLabel: "Começar teste de 14 dias",
    ctaHref: "app",
    features: [
      "1 workspace com até 2 usuários",
      "Vendas e pedidos ilimitados",
      "Fiado com previsão de recebimento (dia 5, 5º dia útil ou data sua)",
      "Estoque e produção com histórico de movimentação",
      "Receitas com custo real e custo por unidade produzida",
      "Clientes com histórico de compras e pendências",
      "Painel de faturamento, ticket médio e filtros por período",
      "App na tela do celular, sem loja de aplicativos",
      "Suporte por WhatsApp em horário comercial",
    ],
  },
  {
    id: "fornada",
    name: "Fornada",
    tagline: "Para quem já produz em escala, tem equipe e mais de uma frente de venda.",
    audience: "Negócio em crescimento",
    workspaces: "Até 4 workspaces",
    monthly: 99.9,
    yearlyMonthly: 89.9,
    featured: true,
    ctaLabel: "Começar teste de 14 dias",
    ctaHref: "app",
    inherits: "Balcão",
    features: [
      "Até 4 workspaces — separe lojas, marcas, pontos ou sócios",
      "Usuários ilimitados com níveis de acesso",
      "Painel consolidado somando todos os workspaces",
      "Comparação de preços entre mercados por unidade base",
      "Lista de compras automática pelo estoque mínimo",
      "Relatórios comparativos por produto, sabor e cliente",
      "Exportação dos dados em CSV para contador e sócio",
      "Link público do painel para quem precisa só olhar",
      "Parcelado na Palavra incluído assim que for lançado",
      "Suporte prioritário no WhatsApp",
    ],
  },
  {
    id: "rede",
    name: "Rede",
    tagline: "Para operações com várias unidades, franquias ou times grandes.",
    audience: "Operação multiunidade",
    workspaces: "Workspaces ilimitados",
    monthly: null,
    yearlyMonthly: null,
    ctaLabel: "Falar com a gente",
    ctaHref: "whatsapp",
    inherits: "Fornada",
    features: [
      "Workspaces e usuários ilimitados",
      "Migração dos seus dados feita junto com você",
      "Treinamento da equipe na implantação",
      "Papéis e permissões personalizados",
      "Gerente de conta e canal direto de suporte",
      "SLA de atendimento acordado em contrato",
      "Nota fiscal, faturamento por CNPJ e pagamento por boleto",
      "Integrações e acesso à API sob demanda",
    ],
  },
];

export const guarantees = [
  "14 dias grátis com todos os recursos",
  "Sem cartão de crédito para testar",
  "Sem fidelidade — cancele quando quiser",
  "Troque de plano a qualquer momento",
];
