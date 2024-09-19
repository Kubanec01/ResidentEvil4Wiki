import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Home: {
        discoverTitle:
          'Set off with Leon S. Kennedy to rescue the president\'s daughter in the Spanish village of El Pueblo in Spanish: "Valley of the Wolves" by a small lake near the sprawling castle owned by the Salazar family. Discover unknown places. Complete challenges from horror dreams and absorb the atmosphere of fear and death.',
        fightForLifeTitle:
          "Along your journey to salvation, you will be accompanied by enemies who will make your blood boil in your veins. Think carefully about where your crocs will go. Stand against the most terrifying creatures that lurk in the nightmares of the dark forest. Show your path, courage and experience in the fight against the very evil of the wolf valley. Fight for your life!",
        betterTogetherTitle:
          "You are never alone in the valley. Meet new and old friends with whom everything is better, but not easier! Over time, you will solve puzzles or battles, where a helping hand will always come together. But don't think that this will solve your problems, everyone needs help and believe that you will ask for it often.",
        meetUpText:
          "You may not see them, but they can see you! Meet old and new characters who will fight against evil or with it... or both? See for yourself and find out what it's like to be betrayed or a traitor.",
      },
      Reviews: {
        1: "Gorgeous graphics",
        2: "Faithfully recreated set pieces",
        3: "Excellent gunplay",
        4: "New additions improve the experience",
        5: "Great PC performance",
        6: "Ashley is harder to protect than in the original",
      },
      Quiz: {
        quizTitle:
          "Do you think you are a good gamer? Practice your knowledge in a short quiz. Find out how well you know the characters, the story, the weapons or the situations that gave you the chills.",
      },
      contactBars: {
        firstBar:
          "Visit my github and follow my works, you can be inspired by them, learn something or teach me something. I am fully open to any questions about my projects or suggestions for their improvement",
        secondBar:
          "Write to me more personally on the social network and exchange experiences, ideas, trends or just sit for a beer. Together we can create clean code and awesome projects",
        thirdBar:
          "In case of offers or work opportunities, contact me by email. It will be my pleasure to cooperate on projects with a great future",
      },
    },
  },
  sk: {
    translation: {
      Home: {
        discoverTitle:
          'Vydajte sa s Leonom S. Kennedym zachrániť prezidentovu dcéru v španielskej dedine El Pueblo v španielčine: "Údolie vlkov" pri malom jazierku neďaleko rozľahlého hradu, ktorý vlastní rodina Salazarovcov. Objavte neznáme miesta. Plňte výzvy z hororových snov a nasajte atmosféru strachu a smrti.',
        fightForLifeTitle:
          "Na vašej ceste za spásou vás budú sprevádzať nepriatelia, z ktorých vám bude vrieť krv v žilách. Dobre si premyslite, kam budú smerovať vaše kroky. Postavte sa proti najdesivejším tvorom, ktoré číhajú v nočných morách temného lesa. Ukážte svoju cestu, odvahu a skúsenosti v boji proti samotnému zlu vlčieho údolia. Bojujte o svoj život!",
        betterTogetherTitle:
          "V doline nikdy nie si sám. Spoznajte nových a starých priateľov, s ktorými je všetko lepšie, ale nie jednoduchšie! Postupom času budete riešiť hlavolamy či bitky, kde sa vždy zíde pomocná ruka. Nemyslite si však, že tým sa vaše problémy vyriešia, každý potrebuje pomoc a verte, že ju budete často žiadať.",
        meetUpText:
          "Vy ich možno nevidíte, ale oni môžu vidieť vás! Stretnite staré i nové postavy, ktoré budú bojovať proti zlu alebo s ním... alebo oboje? Presvedčte sa sami a zistite, aké je to byť zradený alebo zradca.",
      },
      Reviews: {
        1: "Nádherná grafika",
        2: "Verne prerobené kulisy",
        3: "Výborná prestrelka",
        4: "Nové doplnky zlepšujú zážitok",
        5: "Skvelý výkon PC",
        6: "Ashley je ťažšie chrániť ako v origináli",
      },
      Quiz: {
        quizTitle:
          "Myslíte si, že ste dobrý hráč? Precvičte si svoje vedomosti v krátkom kvíze. Zistite, ako dobre poznáte postavy, príbeh, zbrane či situácie, pri ktorých vám nabehnú zimomriavky.",
      },
      contactBars: {
        firstBar:
          "Navštívte môj github a sledujte moje diela, môžete sa nimi inšpirovať alebo ma niečo naučiť. Som plne otvorený akýmkoľvek otázkam týkajúcim sa mojich projektov alebo návrhom na ich zlepšenie",
        secondBar:
          "Napíšte mi viac osobne na sociálnu sieť a vymenme si skúsenosti, nápady, trendy alebo len tak posedme pri pive. Spoločne môžeme vytvoriť čistý kód a úžasné projekty",
        thirdBar:
          "V prípade ponúk alebo pracovných príležitostí ma kontaktujte emailom. Bude mi potešením spolupracovať na projektoch s veľkou budúcnosťou",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    detection: {
      order: ["navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
