const newsCards = [
    {
        id: "1",
        imgSrc: "images/index/news/singer-recording-session.webp",
        imgAlt: "singer recording session",
        date: "2024-01-20",
        category: " | CHART",
        title: "Chart-Toppers Unveiled: Latest Releases from Music Icons",
        description: "KRAVETS V. From groundbreaking collaborations to solo masterpieces, get ready to update your playlist with the hottest hits.",
        link: "/"
    },
    {
        id: "2",
        imgSrc: "images/index/news/music-producer-studio.webp",
        imgAlt: "music producer studio",
        date: "2024-01-24",
        category: " | RADIO",
        title: "Radio Resurgence: A Timeless Medium in a Digital Age",
        description: "We explore the radio's role in connecting communities, showcasing diverse music, and providing a personal touch in a digital world.",
        link: "/"
    },
    {
        id: "3",
        imgSrc: "images/index/news/radio-talk-woman.webp",
        imgAlt: "radio talk woman",
        date: "2024-01-20",
        category: " | MUSIC",
        title: "Harmony in Waves: Exploring the Impact of Music on Radio",
        description: "Join us on a musical journey as we delve into the influence of radio on music discovery, artist exposure, and the evolution of genres.",
        link: "/"
    },
  ];
  
  function renderNewsCards(newsCards) {
    let newsCardsHtml = "";
    for (const newsCard of newsCards) {
        newsCardsHtml += `
            <article class="news-card">
            <img
                class="news-card__image"
                src="${newsCard.imgSrc}"
                alt="${newsCard.imgAlt}"
            />
            <p class="news-card__date">
                <time datetime="${newsCard.date}">${newsCard.date}</time>${newsCard.category}
            </p>
            <h3 class="news-card__title">${newsCard.title}</h3>
            <p class="news-card__description">${newsCard.description}</p>
            <a href="${newsCard.link}" class="news-card__link">Learn More</a>
            </article>`;
    }
    const newCardsContainer = document.querySelector(".news__grid");
    newCardsContainer.innerHTML = newsCardsHtml;
  }
  
  renderNewsCards(newsCards);