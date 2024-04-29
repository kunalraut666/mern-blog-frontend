import React, {useState} from 'react'

export default function AddCommentForm({ articleName, setArticleInfo }) {
    const [username, setUsername] = useState("");
    const [commentText, setCommentText] = useState("");
    const baseUrl = "https://mern-blog-backend-59j4.onrender.com";
    const addComments = async () => {
        try {
            const result = await fetch(`${baseUrl}/api/articles/${articleName}/add-comments`, {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    text: commentText
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const body = await result.json();
            setArticleInfo(body);
            setUsername('');
            setCommentText('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
      <form className="shadow rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Add a comment</h3>
        <label className="block text-grey-700 text-sm dont-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="block text-grey-700 text-sm dont-bold mb-2">
          Comment:
        </label>
        <textarea
          rows="4"
          cols="50"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          onClick={() => addComments()}
          className="text-white font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-700"
          style={{
            border: "1px solid #000",
            cursor: "pointer",
          }}
        >
          Add Comment
        </button>
      </form>
    );
}
