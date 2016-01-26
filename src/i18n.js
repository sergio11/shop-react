import Rosetta from '@schibstedspain/rosetta';  
import Polyglot from '@schibstedspain/rosetta/lib/adapters/polyglot';


const languages = {  
  'es': {
    'title': 'Tienda'
  },
  'en': {
    'title': 'Shop'
  }
};

const i18n = new Rosetta();  
i18n.adapter = new Polyglot();  
i18n.setTranslationsSilent(languages[navigator.language]); 

export default i18n;