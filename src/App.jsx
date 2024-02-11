
import { useTranslation } from 'react-i18next'
import './App.css'
import LanguageSelector from './components/language-selector'

function App() {
 const {t} = useTranslation()
 const description = t("description")

  return (
    <div className='container'>
      <LanguageSelector/>
      <h1>{t("greeting")}</h1>
      <h4>{description}</h4>
    </div>
  )
}

export default App
