import React from 'react';
import './Main.css';

function Main() {
    // Главная новость (большая)
    const mainNews = {
        id: 1,
        title: "Крупнейший саммит лидеров G20 завершился историческим соглашением",
        date: "15 марта 2024",
        category: "Политика",
        excerpt: "Лидеры стран G20 достигли консенсуса по вопросам климатических изменений и глобальной экономической политики. Соглашение предусматривает сокращение выбросов углекислого газа на 50% к 2030 году и создание нового фонда для помощи развивающимся странам.",
        fullText: "Историческое соглашение было подписано после трех дней напряженных переговоров. Эксперты называют это событие поворотным моментом в мировой политике. Новые меры также включают совместные действия по борьбе с инфляцией и поддержке малого бизнеса.",
        image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    };

    // Обычные новости (сетка)
    const news = [
        {
            id: 2,
            title: "Курс доллара снижается на фоне новостей",
            date: "15 марта 2024",
            category: "Экономика",
            excerpt: "Эксперты связывают это с новыми экономическими показателями и ожиданиями инвесторов.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Открытие нового маршрута в Азию",
            date: "15 марта 2024",
            category: "Путешествия",
            excerpt: "Авиакомпания запускает прямые рейсы в три новых направления.",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Ученые сделали важное открытие",
            date: "14 марта 2024",
            category: "Наука",
            excerpt: "Исследователи обнаружили новый вид морских обитателей в Тихом океане.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Сборная одержала победу",
            date: "14 марта 2024",
            category: "Спорт",
            excerpt: "В захватывающем матче наша команда вырвала победу.",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Премьера фильма состоялась",
            date: "13 марта 2024",
            category: "Культура",
            excerpt: "Новый фильм получил восторженные отзывы критиков.",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 7,
            title: "Запуск нового спутника",
            date: "13 марта 2024",
            category: "Технологии",
            excerpt: "Спутник улучшит качество интернет-связи в отдаленных регионах.",
            image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 8,
            title: "Прорыв в области ИИ",
            date: "12 марта 2024",
            category: "Технологии",
            excerpt: "Нейросеть научилась предсказывать погоду с точностью 95%.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 9,
            title: "Фестиваль искусств открывается",
            date: "12 марта 2024",
            category: "Культура",
            excerpt: "Международный фестиваль соберет участников из 30 стран.",
            image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <main className="main-content">
            {/* Главная новость */}
            <div className="main-news">
                <div className="main-news-image-container">
                    <img
                        src={mainNews.image}
                        alt={mainNews.title}
                        className="main-news-image"
                    />
                    <span className="main-news-category">{mainNews.category}</span>
                </div>
                <div className="main-news-content">
                    <h2 className="main-news-title">{mainNews.title}</h2>
                    <div className="main-news-meta">
                        <span className="main-news-date">{mainNews.date}</span>
                    </div>
                    <p className="main-news-excerpt">{mainNews.excerpt}</p>
                    <p className="main-news-full">{mainNews.fullText}</p>
                    <a href="/" className="read-more">Читать полную статью →</a>
                </div>
            </div>

            {/* Сетка новостей */}
            <h2 className="section-title">Другие новости</h2>
            <div className="news-grid">
                {news.map(item => (
                    <article key={item.id} className="grid-news-card">
                        <div className="grid-news-image-container">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="grid-news-image"
                                loading="lazy"
                            />
                        </div>
                        <div className="grid-news-content">
                            <span className="grid-news-category">{item.category}</span>
                            <h3 className="grid-news-title">{item.title}</h3>
                            <div className="grid-news-meta">
                                <span className="grid-news-date">{item.date}</span>
                            </div>
                            <p className="grid-news-excerpt">{item.excerpt}</p>
                            <a href="/" className="read-more-small">Читать →</a>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}

export default Main;