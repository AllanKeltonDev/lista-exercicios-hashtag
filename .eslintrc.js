module.exports = {
  "env": { "browser": true, "es2021": true },
  "extends": [
    "eslint:recommended",
    // A linha mais importante:
    // Ativa o plugin do Prettier e usa as regras recomendadas
    // que desativam conflitos. Deve ser a ÚLTIMA da lista.
    "plugin:prettier/recommended" 
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    // Aqui você pode adicionar regras específicas do ESLint, se quiser.
    // Ex: "no-console": "warn"
  }
};