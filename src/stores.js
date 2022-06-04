import { writable } from 'svelte-local-storage-store'
import { v4 as uuidv4 } from "uuid";
import config from './config/Config'


export const todoLists = writable(config.key, [
  {
    id: uuidv4(),
    title: "Je suis une liste de tâche par défaut",
    content: []
  }
]);