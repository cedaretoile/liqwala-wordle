import { CONFIG } from './config'

export const VALIDGUESSES = [
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
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
