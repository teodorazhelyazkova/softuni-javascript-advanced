function getArticleGenerator(articles) {
  const articlesCopy = Array.from(articles);
  const content = document.getElementById("content");

  return () => {
    if (articlesCopy.length === 0) {
      return;
    }

    const currentArticle = articlesCopy.shift();
    content.innerHTML += `<article>${currentArticle}</article>`;
  };
}
