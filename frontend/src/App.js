import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import NewsPage from './components/newsPage/NewsPage';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [language, setLanguage] = useState('ru');
  const [currencyRates, setCurrencyRates] = useState({
    usd: 450.50,
    rub: 4.85,
    eur: 490.30
  });

  // Данные новостей (должны быть доступны для всех компонентов)
  const [newsData] = useState({
    important: [
      {
        id: 1,
        title: {
          ru: 'Президент подписал новый экологический кодекс',
          kz: 'Президент жаңа экологиялық кодекске қол қойды',
          en: 'President signs new environmental code'
        },
        category: 'important',
        date: '15 марта 2024',
        time: '10:23',
        description: {
          ru: 'Новый кодекс ужесточает требования к промышленным выбросам и вводит систему квотирования углеродных единиц.',
          kz: 'Жаңа кодекс өнеркәсіптік шығарындыларға қойылатын талаптарды күшейтеді және көміртегі бірліктеріне квоталау жүйесін енгізеді.',
          en: 'The new code tightens requirements for industrial emissions and introduces a carbon unit quota system.'
        },
        fullContent: {
          ru: 'Президент подписал новый Экологический кодекс, который вводит комплексные изменения в систему охраны окружающей среды. Документ ужесточает требования к промышленным предприятиям, вводит новую систему экологического контроля и устанавливает механизмы экономического стимулирования "зеленых" технологий.\n\nКлючевые изменения:\n- Внедрение наилучших доступных технологий\n- Создание системы квотирования выбросов парниковых газов\n- Усиление ответственности за экологические нарушения\n- Развитие системы экологического мониторинга\n\nЭксперты отмечают, что новый кодекс соответствует международным стандартам и позволит Казахстану выполнить обязательства по Парижскому соглашению.',
          kz: 'Президент жаңа Экологиялық кодекске қол қойды, ол қоршаған ортаны қорғау жүйесіне кешенді өзгерістер енгізеді. Құжат өнеркәсіптік кәсіпорындарға қойылатын талаптарды күшейтеді, экологиялық бақылаудың жаңа жүйесін енгізеді және "жасыл" технологияларды экономикалық ынталандыру тетіктерін белгілейді.\n\nНегізгі өзгерістер:\n- Қолжетімді үздік технологияларды енгізу\n- Парниктік газдар шығарындыларына квоталау жүйесін құру\n- Экологиялық бұзушылықтар үшін жауапкершілікті күшейту\n- Экологиялық мониторинг жүйесін дамыту\n\nСарапшылар жаңа кодекстің халықаралық стандарттарға сәйкес келетінін және Қазақстанға Париж келісімі бойынша міндеттемелерді орындауға мүмкіндік беретінін атап өтеді.',
          en: 'The President has signed a new Environmental Code that introduces comprehensive changes to the environmental protection system. The document tightens requirements for industrial enterprises, introduces a new environmental control system, and establishes mechanisms for economic incentives for "green" technologies.\n\nKey changes:\n- Implementation of best available technologies\n- Creation of a greenhouse gas emission quota system\n- Strengthening responsibility for environmental violations\n- Development of environmental monitoring system\n\nExperts note that the new code complies with international standards and will allow Kazakhstan to fulfill its obligations under the Paris Agreement.'
        },
        image: null,
        views: 1234,
        comments: 45,
        author: 'Айдар Сапаров',
        source: 'Акорда'
      },
      {
        id: 2,
        title: {
          ru: 'Казахстан вошел в топ-10 стран по зеленой энергетике',
          kz: 'Қазақстан жасыл энергетика бойынша топ-10 елге енді',
          en: 'Kazakhstan enters top 10 countries in green energy'
        },
        category: 'important',
        date: '15 марта 2024',
        time: '09:15',
        description: {
          ru: 'Международное энергетическое агентство опубликовало рейтинг стран, лидирующих в развитии возобновляемых источников энергии.',
          kz: 'Халықаралық энергетикалық агенттік жаңартылатын энергия көздерін дамытуда көш бастап тұрған елдер рейтингін жариялады.',
          en: 'The International Energy Agency has published a ranking of countries leading in the development of renewable energy sources.'
        },
        fullContent: {
          ru: 'Казахстан впервые вошел в топ-10 стран мира по темпам развития зеленой энергетики. По данным Международного энергетического агентства (МЭА), доля возобновляемых источников энергии в энергобалансе страны достигла 15%.\n\nОсновные достижения:\n- Запущено 50 новых солнечных и ветровых электростанций\n- Привлечено $2 млрд инвестиций в зеленую энергетику\n- Создано более 3000 рабочих мест в отрасли\n\nЭксперты МЭА отмечают, что Казахстан демонстрирует один из самых высоких темпов роста возобновляемой энергетики в мире. Особенно впечатляющих результатов страна достигла в развитии ветроэнергетики благодаря уникальным природным условиям.',
          kz: 'Қазақстан жасыл энергетиканы дамыту қарқыны бойынша әлемнің топ-10 еліне алғаш рет енді. Халықаралық энергетикалық агенттіктің (ХЭА) мәліметі бойынша, елдің энергия балансындағы жаңартылатын энергия көздерінің үлесі 15% - ға жетті.\n\nНегізгі жетістіктер:\n- 50 жаңа күн және жел электр станциялары іске қосылды\n- Жасыл энергетикаға $2 млрд инвестиция тартылды\n- Салада 3000-нан астам жұмыс орны құрылды\n\nХЭА сарапшылары Қазақстан әлемдегі жаңартылатын энергетиканың ең жоғары өсу қарқынының бірін көрсетіп отырғанын атап өтеді. Ерекше табиғи жағдайлардың арқасында ел жел энергетикасын дамытуда ерекше жетістіктерге жетті.',
          en: 'Kazakhstan has entered the top 10 countries in the world for the first time in terms of green energy development rates. According to the International Energy Agency (IEA), the share of renewable energy sources in the country\'s energy balance has reached 15%.\n\nMain achievements:\n- 50 new solar and wind power plants launched\n- $2 billion in green energy investments attracted\n- More than 3,000 jobs created in the sector\n\nIEA experts note that Kazakhstan demonstrates one of the highest growth rates of renewable energy in the world. The country has achieved particularly impressive results in wind energy development due to unique natural conditions.'
        },
        image: null,
        views: 987,
        comments: 32,
        author: 'Динара Нурпеисова',
        source: 'Министерство энергетики РК'
      }
    ],
    politics: [
      {
        id: 3,
        title: {
          ru: 'Парламент одобрил закон о защите экологических прав граждан',
          kz: 'Парламент азаматтардың экологиялық құқықтарын қорғау туралы заңды мақұлдады',
          en: 'Parliament approves law on protecting citizens\' environmental rights'
        },
        category: 'politics',
        date: '14 марта 2024',
        time: '16:45',
        description: {
          ru: 'Новый закон расширяет права граждан на доступ к экологической информации и участие в принятии решений.',
          kz: 'Жаңа заң азаматтардың экологиялық ақпаратқа қол жеткізу және шешімдер қабылдауға қатысу құқықтарын кеңейтеді.',
          en: 'The new law expands citizens\' rights to access environmental information and participate in decision-making.'
        },
        fullContent: {
          ru: 'Парламент Казахстана одобрил закон "Об общественном экологическом контроле", который значительно расширяет права граждан в сфере охраны окружающей среды.\n\nОсновные положения закона:\n- Граждане получают право участвовать в экологических экспертизах\n- Создаются общественные советы при природоохранных ведомствах\n- Упрощается процедура подачи жалоб на экологические нарушения\n- Вводится механизм общественных слушаний по экологическим проектам\n\nЗакон вступит в силу через три месяца после подписания президентом.',
          kz: 'Қазақстан Парламенті "Қоғамдық экологиялық бақылау туралы" заңды мақұлдады, ол азаматтардың қоршаған ортаны қорғау саласындағы құқықтарын едәуір кеңейтеді.\n\nЗаңның негізгі ережелері:\n- Азаматтар экологиялық сараптамаларға қатысу құқығын алады\n- Табиғат қорғау ведомстволарының жанынан қоғамдық кеңестер құрылады\n- Экологиялық бұзушылықтарға шағым беру рәсімі жеңілдетіледі\n- Экологиялық жобалар бойынша қоғамдық тыңдаулар тетігі енгізіледі\n\nЗаң президент қол қойғаннан кейін үш айдан соң күшіне енеді.',
          en: 'The Parliament of Kazakhstan has approved the law "On Public Environmental Control", which significantly expands citizens\' rights in the field of environmental protection.\n\nMain provisions of the law:\n- Citizens receive the right to participate in environmental assessments\n- Public councils are created under environmental agencies\n- The procedure for filing complaints about environmental violations is simplified\n- A mechanism for public hearings on environmental projects is introduced\n\nThe law will come into force three months after the president\'s signature.'
        },
        image: null,
        views: 567,
        comments: 18,
        author: 'Марат Ахметов',
        source: 'Парламент РК'
      }
    ]
  });

  return (
    <Router>
      <div className="app">
        <Header language={language} setLanguage={setLanguage} currencyRates={currencyRates} />
        <Routes>
          <Route path="/" element={<Main language={language} newsData={newsData} />} />
          <Route path="/news/:id" element={<NewsPage language={language} newsData={newsData} />} />
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;