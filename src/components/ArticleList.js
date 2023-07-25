import Article from "./Article"

export default function ArticleList({posts}) {
      // Check if articles is defined and is an array
  if (!Array.isArray(posts)) {
    console.log("Invalid articles prop. Expected an array.");
    return null; // Or you can render an error message or fallback content here
  }
    return (
        <main>
           {posts.map((article) => {
            return  <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes} />
           })}
        </main>
    );
}