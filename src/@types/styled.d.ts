// Arquivo de definição de tipos
// Só pode ser inserido código TS

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// Cria uma tipagem para o styled-components
//  Quando importarmos o styled-components ele irá 'puxar'
// os tipos definidos dentro desta declaração

/* Para sobrescrever e manter o que já existe, precisamos
importar o styled-components antes */

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
