/* This can be replaced for Pinia, but for now we're good with this simple solution */
import { reactive} from 'vue'

/*  Let's keep the store isolated from direct access */
const store = reactive({
  language: 'enUs'
})

/*  Let's expose some simple methods to manipulate the store. */
export function toEnglish(): void {
  store.language = 'enUs'
}

export function toBrazilianPortuguese(): void {
  store.language = 'ptBr'
}

export function getLanguage(): string {
  return store.language
}

export function isEnglish(): boolean {
  return store.language === 'enUs'
}

export function isPortuguese(): boolean {
  return store.language === 'ptBr'
}