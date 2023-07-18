// Single Types
import global from './singleTypes/global'
import { global_Footer, global_Nav, global_Ebook, global_Info } from './singleTypes/global'
import homepage from './singleTypes/homepage'
import familyClinic from './singleTypes/familyClinic'
import staffPage from './singleTypes/staffPage'
import privacyPolicy from './singleTypes/privacyPolicy'
import notFound from './singleTypes/notFound'

export const singleTypes = [
  homepage,
  familyClinic,
  staffPage,
  privacyPolicy,
  notFound
]

// Collection Types
import faq from './collectionTypes/faq'
import staff from './collectionTypes/staff'

export const collectionTypes = [
  faq,
  staff
]

// Componenets
import cta from './components/cta'
import seo from './components/seo'
import ctaSection from './components/ctaSection'
import imageAndDescription from './components/imageAndDescription'
import imageAndTitle from './components/imageAndTitle'
import faqSection from './components/faqSection'
import staffSection from './components/staffSection'

export const schemaTypes = [
  // Single Types
  global,
  global_Footer,
  global_Nav,
  global_Ebook,
  global_Info,
  ...singleTypes,
  
  // Collection Types
  ...collectionTypes,

  // Componenets
  cta,
  seo,
  ctaSection,
  imageAndDescription,
  imageAndTitle,
  faqSection,
  staffSection,
]
