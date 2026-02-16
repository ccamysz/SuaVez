export interface Estabelecimento {
  id: string;
  nome: string;
  categoria: string;
  localidade: string;
  pessoasNaFila: number;
  tempoMedio: number; // minutos
}

export const mockEstabelecimentos: Estabelecimento[] = [
  // Saúde
  { id: "e1", nome: "Hospital Geral de Fortaleza (HGF)", categoria: "Saúde", localidade: "Papicu", pessoasNaFila: 35, tempoMedio: 25 },
  { id: "e2", nome: "Hospital Instituto Dr. José Frota (IJF)", categoria: "Saúde", localidade: "Centro", pessoasNaFila: 42, tempoMedio: 30 },
  { id: "e3", nome: "Hospital Universitário Walter Cantídio", categoria: "Saúde", localidade: "Rodolfo Teófilo", pessoasNaFila: 28, tempoMedio: 22 },
  { id: "e4", nome: "UPA Cristo Redentor", categoria: "Saúde", localidade: "Cristo Redentor", pessoasNaFila: 18, tempoMedio: 15 },
  { id: "e5", nome: "UPA Bom Jardim", categoria: "Saúde", localidade: "Bom Jardim", pessoasNaFila: 20, tempoMedio: 14 },
  { id: "e6", nome: "Posto de Saúde Meireles", categoria: "Saúde", localidade: "Meireles", pessoasNaFila: 10, tempoMedio: 12 },
  { id: "e7", nome: "UBS Messejana", categoria: "Saúde", localidade: "Messejana", pessoasNaFila: 14, tempoMedio: 13 },

  // Bancos e Lotéricas
  { id: "e8", nome: "Caixa Econômica Federal - Jacarecanga", categoria: "Bancos e Lotéricas", localidade: "Jacarecanga", pessoasNaFila: 22, tempoMedio: 14 },
  { id: "e9", nome: "Caixa Econômica Federal - Pres. Kennedy", categoria: "Bancos e Lotéricas", localidade: "Presidente Kennedy", pessoasNaFila: 18, tempoMedio: 12 },
  { id: "e10", nome: "Caixa Econômica Federal - Parquelândia", categoria: "Bancos e Lotéricas", localidade: "Parquelândia", pessoasNaFila: 15, tempoMedio: 11 },
  { id: "e11", nome: "Banco do Brasil - Centro", categoria: "Bancos e Lotéricas", localidade: "Centro", pessoasNaFila: 20, tempoMedio: 13 },
  { id: "e12", nome: "Banco do Brasil - Aldeota", categoria: "Bancos e Lotéricas", localidade: "Aldeota", pessoasNaFila: 12, tempoMedio: 10 },
  { id: "e13", nome: "Lotérica Boa Sorte - Montese", categoria: "Bancos e Lotéricas", localidade: "Montese", pessoasNaFila: 8, tempoMedio: 7 },
  { id: "e14", nome: "Lotérica Estrela - Benfica", categoria: "Bancos e Lotéricas", localidade: "Benfica", pessoasNaFila: 6, tempoMedio: 6 },

  // Atendimentos Municipais
  { id: "e15", nome: "Prefeitura de Fortaleza - Paço Municipal", categoria: "Atendimentos Municipais", localidade: "Centro", pessoasNaFila: 30, tempoMedio: 20 },
  { id: "e16", nome: "Vapt Vupt - Messejana", categoria: "Atendimentos Municipais", localidade: "Messejana", pessoasNaFila: 25, tempoMedio: 18 },
  { id: "e17", nome: "Vapt Vupt - Antônio Bezerra", categoria: "Atendimentos Municipais", localidade: "Antônio Bezerra", pessoasNaFila: 22, tempoMedio: 17 },
  { id: "e18", nome: "Secretaria de Saúde - SESA", categoria: "Atendimentos Municipais", localidade: "Meireles", pessoasNaFila: 16, tempoMedio: 19 },

  // Supermercados
  { id: "e19", nome: "Atacadão - BR-116", categoria: "Supermercados", localidade: "Messejana", pessoasNaFila: 10, tempoMedio: 5 },
  { id: "e20", nome: "Assaí Atacadista - Parangaba", categoria: "Supermercados", localidade: "Parangaba", pessoasNaFila: 12, tempoMedio: 6 },
  { id: "e21", nome: "Pão de Açúcar - Aldeota", categoria: "Supermercados", localidade: "Aldeota", pessoasNaFila: 7, tempoMedio: 4 },
  { id: "e22", nome: "Mercadinho São Luiz - Meireles", categoria: "Supermercados", localidade: "Meireles", pessoasNaFila: 5, tempoMedio: 3 },

  // Educação
  { id: "e23", nome: "Universidade Federal do Ceará (UFC)", categoria: "Educação", localidade: "Benfica", pessoasNaFila: 20, tempoMedio: 16 },
  { id: "e24", nome: "IFCE - Campus Fortaleza", categoria: "Educação", localidade: "Benfica", pessoasNaFila: 15, tempoMedio: 14 },
  { id: "e25", nome: "UECE - Campus Itaperi", categoria: "Educação", localidade: "Itaperi", pessoasNaFila: 18, tempoMedio: 15 },

  // Serviços Gerais
  { id: "e26", nome: "Detran-CE - Maracanaú", categoria: "Serviços Gerais", localidade: "Maracanaú", pessoasNaFila: 40, tempoMedio: 25 },
  { id: "e27", nome: "Detran-CE - Messejana", categoria: "Serviços Gerais", localidade: "Messejana", pessoasNaFila: 35, tempoMedio: 22 },
  { id: "e28", nome: "Cartório 1º Ofício - Centro", categoria: "Serviços Gerais", localidade: "Centro", pessoasNaFila: 14, tempoMedio: 12 },
  { id: "e29", nome: "Correios - Aldeota", categoria: "Serviços Gerais", localidade: "Aldeota", pessoasNaFila: 9, tempoMedio: 8 },
  { id: "e30", nome: "Correios - Montese", categoria: "Serviços Gerais", localidade: "Montese", pessoasNaFila: 11, tempoMedio: 9 },
];

export const categorias = ["Saúde", "Bancos e Lotéricas", "Atendimentos Municipais", "Supermercados", "Educação", "Serviços Gerais"];
export const localidades = [
  "Aldeota", "Antônio Bezerra", "Benfica", "Bom Jardim", "Centro",
  "Cristo Redentor", "Itaperi", "Jacarecanga", "Maracanaú", "Meireles",
  "Messejana", "Montese", "Papicu", "Parangaba", "Parquelândia",
  "Presidente Kennedy", "Rodolfo Teófilo",
];
