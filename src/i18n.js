import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import  LanguageDetector  from 'i18next-browser-languagedetector'


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng:"en",
    returnObjects:true,
    resources: {
        en:{
           translation:{
              greeting: "Hello, Welcome",
              description:"He air no be the its above he echo nevermore, yore core streaming maiden visiter many gently thee, truly burden i i minute more said."
            }
        },
        de:{
            translation:{
                greeting: "Hallo, willkommen",
                description: "Schauer sich sich weiten kommt zu besitze mich das, was festzuhalten dem irren nennt und. Mein jenem jenem sich gedränge einst jenem geneigt strenge nennt,."
            }
        },
        fr:{
            translation:{
                greeting: "Bonjour bienvenue",
                description:" querelles d'oiseaux l'europe toute coque des ces, traverser des de pas fond torpeurs. Qu'aux et troupeaux comme des, a aux rythmes rutilements ma porteurs."
            }
        }
    }
})