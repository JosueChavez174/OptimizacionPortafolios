// Definición de datos base y estructuras de escenarios para el mercado boliviano (n = 4)
const scenarioData = {
  ideal: {
    kappa: 3.42,
    status: "Bien Condicionado",
    statusColor: "blue",
    itersGrad: 12,
    convJacobi: [1.0, 0.45, 0.21, 0.09, 0.04, 0.018, 0.008, 0.003, 0.001],
    convSeidel: [1.0, 0.32, 0.11, 0.03, 0.009, 0.002, 0.0005],
    convGrad:   [1.0, 0.25, 0.06, 0.015, 0.003, 0.0008, 0.0001],
    weights: [0.35, 0.30, 0.15, 0.20]
  },
  stress: {
    kappa: 42.85,
    status: "Condición Moderada",
    statusColor: "blue",
    itersGrad: 34,
    convJacobi: [1.0, 0.82, 0.68, 0.55, 0.44, 0.35, 0.28, 0.22, 0.17, 0.13, 0.10],
    convSeidel: [1.0, 0.65, 0.42, 0.27, 0.17, 0.11, 0.07, 0.04, 0.02, 0.01],
    convGrad:   [1.0, 0.55, 0.30, 0.16, 0.08, 0.04, 0.02, 0.009, 0.004, 0.002],
    weights: [0.50, 0.25, 0.08, 0.17]
  },
  ill: {
    kappa: 785.40,
    status: "Mal Condicionado",
    statusColor: "red",
    itersGrad: 145,
    convJacobi: [1.0, 0.98, 0.96, 0.94, 0.92, 0.90, 0.88, 0.86, 0.84, 0.82, 0.80],
    convSeidel: [1.0, 0.92, 0.85, 0.78, 0.71, 0.65, 0.59, 0.53, 0.48, 0.43, 0.38],
    convGrad:   [1.0, 0.88, 0.76, 0.64, 0.53, 0.43, 0.34, 0.27, 0.21, 0.16, 0.12],
    weights: [0.70, 0.20, 0.02, 0.08]
  }
};