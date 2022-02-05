import { CONFIG } from './config'

export const WORDS = [
  'q̓umis',
  'ǧiwas',
  'nex̌aq',
  'ɫawis',
  'nenakʷ',
  'ʔuldᶻi',
  'bəgʷəs',
  'ǧʷənta',
  'dənas',
  'qinəm',
  'yolux̌',
  'yugʷux̌',
  'dᶻəlaɫ',
  'ʔaʔənt',
  'mulən',
  'wosən',
  'gukʷdᶻi',
  'walas',
  'saləm',
  'yudəxʷ',
  'ləgʷiɫ',
  'lək̓ʷəs',
  'dᶻax̌ʷən',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
