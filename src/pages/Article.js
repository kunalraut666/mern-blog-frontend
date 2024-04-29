import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
import Articles from '../components/Articles';
import NotFound from './NotFound';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';

export default function Article() {
    const {name} = useParams();
    const article = articleContent.find((article) => {
        return article.name === name;
    });
    const baseUrl = "https://mern-blog-backend-59j4.onrender.com";
    const [articleInfo, setArticleInfo] = useState({ comments: [] })
    
    useEffect(() => {
      const fetchData = async () => {
          try {
              const result = await fetch(`${baseUrl}/api/articles/${name}`);
              const body = await result.json();
              setArticleInfo(body);
          } catch (error) {
              console.error('Error fetching article data:', error);
          }
      };
      fetchData();
  }, [name]);
    
    if (!article) {
        return <NotFound />;
    }

    const otherArticles = articleContent.filter(article => article.name !== name)

  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-grey-900">
        {article.title}
      </h1>
      <img src={article.thumbnail} alt="Article Thumbnail" className="my-4" />
      {article.content.map((content, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
            {content}
        </p>
      ))}
      <CommentsList comments={articleInfo.comments}/>
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h1 className='sm:text-2xl text-xl font-bold my-4 text-grey-900'>
        Other Articles
      </h1>
      <div className='flex flex-wrap -m-4'>
        <Articles articles={otherArticles}/>
      </div>
    </>
  );
}
