import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
import readline from "readline-sync";
import { listarTarefas, adicionarTarefa, removerTarefa, modificarTarefa } from "./tarefas.js";
function exibirMenu() {
}
console.log("MENU PRINCIPAL");
console.log("1 - Adicionar tarefas");
console.log("2 - Listar tarefas");
console.log("3 - Remover tarefa");
console.log("4 - Modificar tarefa");
console.log("5 - Sair");
