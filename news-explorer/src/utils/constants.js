export const NewsCards = [
  {
    source: {
      id: 1,
      name: "The Verge",
    },
    title: "Nature makes you better",
    publishedAt: "February 19, 2019",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through the leaves.",
    urlToImage: new URL("../assets/nature.png", import.meta.url).href,
  },
  {
    source: {
      id: 2,
      name: "The Verge",
    },
    title: "Nature makes you better",
    publishedAt: "February 19, 2019",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through the leaves.",
    urlToImage: new URL("../assets/nature.png", import.meta.url).href,
  },
  {
    source: {
      id: 3,
      name: "The Verge",
    },
    title: "Nature makes you better",
    publishedAt: "February 19, 2019",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through the leaves.",
    urlToImage: new URL("../assets/nature.png", import.meta.url).href,
  },
  {
    source: {
      id: 4,
      name: "The Verge",
    },
    title: "Nature makes you better",
    publishedAt: "February 19, 2019",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through the leaves.",
    urlToImage: new URL("../assets/nature.png", import.meta.url).href,
  },
  {
    source: {
      id: 5,
      name: "The Verge",
    },
    title: "Nature makes you better",
    publishedAt: "February 19, 2019",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through the leaves.",
    urlToImage: new URL("../assets/nature.png", import.meta.url).href,
  },
  {
    source: {
      id: 6,
      name: "The Verge",
    },
    title: "Nature makes you better",
    publishedAt: "February 19, 2019",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through the leaves.",
    urlToImage: new URL("../assets/nature.png", import.meta.url).href,
  },
  {
    source: {
      id: 7,
      name: "The Verge",
    },
    title: "Nature makes you better",
    publishedAt: "February 19, 2019",
    description:
      "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through the leaves.",
    urlToImage: new URL("../assets/nature.png", import.meta.url).href,
  },
];

export const apiKey = "6db253e804d84777b8c7d923d71d94c8";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";
