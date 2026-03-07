import React, { useState } from 'react';
import './Main.css';

const Main = ({ language }) => {
  const [news] = useState({
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
        image: null,
        views: 1234,
        comments: 45
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
        image: null,
        views: 987,
        comments: 32
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
        image: null,
        views: 567,
        comments: 18
      }
    ],
    economy: [
      {
        id: 4,
        title: {
          ru: 'Зеленые облигации выпущены на KASE на сумму 50 млрд тенге',
          kz: 'KASE-де 50 млрд теңгеге жасыл облигациялар шығарылды',
          en: 'Green bonds issued on KASE for 50 billion tenge'
        },
        category: 'economy',
        date: '14 марта 2024',
        time: '14:30',
        description: {
          ru: 'Средства от размещения пойдут на финансирование экологических проектов по всей стране.',
          kz: 'Орналастырудан түскен қаражат бүкіл ел бойынша экологиялық жобаларды қаржыландыруға жұмсалады.',
          en: 'The proceeds from the placement will go to finance environmental projects throughout the country.'
        },
        image: null,
        views: 432,
        comments: 15
      }
    ],
    technology: [
      {
        id: 5,
        title: {
          ru: 'Казахстанские ученые разработали технологию переработки пластика',
          kz: 'Қазақстандық ғалымдар пластикті қайта өңдеу технологиясын әзірледі',
          en: 'Kazakh scientists develop plastic recycling technology'
        },
        category: 'technology',
        date: '13 марта 2024',
        time: '11:20',
        description: {
          ru: 'Новая технология позволяет перерабатывать до 95% пластиковых отходов с минимальными энергозатратами.',
          kz: 'Жаңа технология пластик қалдықтарының 95% - на дейін минималды энергия шығынымен қайта өңдеуге мүмкіндік береді.',
          en: 'The new technology allows recycling up to 95% of plastic waste with minimal energy consumption.'
        },
        image: null,
        views: 789,
        comments: 23
      }
    ],
    sports: [
      {
        id: 6,
        title: {
          ru: 'Эко-марафон "Чистые горы" собрал 5000 участников',
          kz: '"Таза таулар" эко-марафоны 5000 қатысушыны жинады',
          en: '"Clean Mountains" eco-marathon gathers 5000 participants'
        },
        category: 'sports',
        date: '13 марта 2024',
        time: '09:45',
        description: {
          ru: 'Спортсмены из 20 стран приняли участие в забеге с одновременной уборкой горных склонов.',
          kz: '20 елдің спортшылары тау беткейлерін бір мезгілде тазартумен жүгіруге қатысты.',
          en: 'Athletes from 20 countries took part in the run while simultaneously cleaning mountain slopes.'
        },
        image: null,
        views: 654,
        comments: 12
      }
    ],
    culture: [
      {
        id: 7,
        title: {
          ru: 'В Астане открылся фестиваль экологического кино',
          kz: 'Астанада экологиялық кино фестивалі ашылды',
          en: 'Environmental film festival opens in Astana'
        },
        category: 'culture',
        date: '12 марта 2024',
        time: '18:30',
        description: {
          ru: 'На фестивале представлены фильмы из 15 стран, посвященные защите окружающей среды.',
          kz: 'Фестивальде қоршаған ортаны қорғауға арналған 15 елдің фильмдері ұсынылған.',
          en: 'The festival features films from 15 countries dedicated to environmental protection.'
        },
        image: null,
        views: 345,
        comments: 8
      }
    ]
  });

  const sectionTitles = {
    important: { ru: 'ГЛАВНЫЕ НОВОСТИ', kz: 'БАС ЖАҢАЛЫҚТАР', en: 'TOP STORIES' },
    politics: { ru: 'ПОЛИТИКА', kz: 'САЯСАТ', en: 'POLITICS' },
    economy: { ru: 'ЭКОНОМИКА', kz: 'ЭКОНОМИКА', en: 'ECONOMY' },
    technology: { ru: 'ТЕХНОЛОГИИ', kz: 'ТЕХНОЛОГИЯ', en: 'TECHNOLOGY' },
    sports: { ru: 'СПОРТ', kz: 'СПОРТ', en: 'SPORTS' },
    culture: { ru: 'КУЛЬТУРА', kz: 'МӘДЕНИЕТ', en: 'CULTURE' }
  };

  const sections = ['important', 'politics', 'economy', 'technology', 'sports', 'culture'];

  return (
    <main className="main">
      <div className="container">
        {sections.map(sectionId => (
          <section key={sectionId} id={sectionId} className="news-section">
            <div className="section-header">
              <h2 className="section-title">{sectionTitles[sectionId][language]}</h2>
              <span className="section-count">{news[sectionId].length} материалов</span>
            </div>
            
            <div className="news-grid">
              {news[sectionId].map(item => (
                <article key={item.id} className={`news-card ${item.category === 'important' ? 'important-card' : ''}`}>
                  <div className="news-image">
                    {item.image ? (
                      <img src={item.image} alt={item.title[language]} />
                    ) : (
                      <div className="image-placeholder">
                        {item.category === 'important' ? '📰🔥' : '📰'}
                      </div>
                    )}
                  </div>
                  
                  <div className="news-content">
                    <div className="news-meta">
                      <span className="news-category">
                        {sectionTitles[item.category][language]}
                      </span>
                      <div className="news-time">
                        <span className="news-date">{item.date}</span>
                        <span className="news-time-icon">🕒 {item.time}</span>
                      </div>
                    </div>
                    
                    <h3 className="news-title">{item.title[language]}</h3>
                    <p className="news-description">{item.description[language]}</p>
                    
                    <div className="news-footer">
                      <div className="news-stats">
                        <span className="stat-item">👁 {item.views}</span>
                        <span className="stat-item">💬 {item.comments}</span>
                      </div>
                      <button className="read-more-btn">
                        {language === 'ru' && 'Подробнее'}
                        {language === 'kz' && 'Толығырақ'}
                        {language === 'en' && 'Read more'}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Main;