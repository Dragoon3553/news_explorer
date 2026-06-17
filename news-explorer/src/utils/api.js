let savedArticles = [
  {
    _id: "6a323db9069308eedddb0335",
    source: {
      id: 1,
      name: "The Verge",
    },
    title: "Some news article",
    publishedAt: "February 19, 2019",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through the leaves.",
    urlToImage: new URL("../assets/nature.png", import.meta.url).href,
    keyword: "React",
  },
  {
    _id: "6a323da785aaff96d278b090",
    source: {
      id: 2,
      name: "The Verge",
    },
    title: "Some news article",
    publishedAt: "February 19, 2019",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through the leaves.",
    urlToImage: new URL("../assets/nature.png", import.meta.url).href,
    keyword: "React",
  },
  {
    _id: "6a323d6d84e3a5963cad916c",
    source: {
      id: 3,
      name: "The Verge",
    },
    title: "Some news article",
    publishedAt: "February 19, 2019",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through the leaves.",
    urlToImage: new URL("../assets/nature.png", import.meta.url).href,
    keyword: "React",
  },
];

// getItems returns a promise that resolves to an array of article data. It can be
// rendered in the /saved-news route.
export function getItems() {
  return Promise.resolve(savedArticles);
}

// saveArticle accepts an article object as an argument and pretends to save it to
// the DB. It returns a promise that resolves to the 'saved' article, and an _id
// field to it. add this article to your array of saved news items.

export function saveArticle(article) {
  const savedArticle = {
    ...article,
    _id: article.urlToImage,
  };

  savedArticles.push(savedArticle);

  return Promise.resolve(savedArticle);
}

export function deleteArticle(articleId) {
  savedArticles = savedArticles.filter((article) => article._id !== articleId);

  return Promise.resolve();
}
