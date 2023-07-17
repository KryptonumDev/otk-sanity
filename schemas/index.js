// Single Types
import global from './singleTypes/global'
import { global_Footer, global_Nav, global_Ebook, global_Info } from './singleTypes/global'
import homepage from './singleTypes/homepage'
import familyClinic from './singleTypes/familyClinic'
import notFound from './singleTypes/notFound'

// Collection Types
import faq from './collectionTypes/faq'

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import ctaSection from './components/ctaSection'
import imageAndDescription from './components/imageAndDescription'
import imageAndTitle from './components/imageAndTitle'
import faqSection from './components/faqSection'

export const singleTypes = [
  global,
  homepage,
  familyClinic,
  notFound
]

export const schemaTypes = [
  // Single Types
  ...singleTypes,
  global_Footer,
  global_Nav,
  global_Ebook,
  global_Info,

  // Collection Types
  faq,

  // Componenets
  cta,
  seo,
  ctaSection,
  imageAndDescription,
  imageAndTitle,
  faqSection
]
