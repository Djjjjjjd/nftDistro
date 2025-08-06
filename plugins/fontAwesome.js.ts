import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch, faWallet } from '@fortawesome/free-solid-svg-icons' 

// Импорт нужных иконок (добавь свои)
import { faShoppingCart, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

// Добавляем иконки в библиотеку
library.add(faShoppingCart, faUser, faSignOutAlt, faSearch, faWallet)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})