// Single Types
import global from './singleTypes/global'
import { global_Footer, global_Nav } from './singleTypes/global'
import homepage from './singleTypes/homepage'
import notFound from './singleTypes/notFound'

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import ctaSection from './components/ctaSection'


export const singleTypes = [
  global,
  homepage,
  notFound
]

export const schemaTypes = [
  // Single Types
  ...singleTypes,
  global_Footer,
  global_Nav,

  // Componenets
  cta,
  seo,
  ctaSection,
]
