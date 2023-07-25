import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {

  const logo = blogData.image;
  const posts = blogData.posts;
  const text = blogData.about;

  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={logo} about={text} />
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
