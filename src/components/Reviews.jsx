import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Reviews = () => {
    const {movieId} = useParams();
    const [authors, setAuthor] = useState([]);
    console.log(authors);

    useEffect(() => {
        // if(!authors) {
        //     return <p>We don't have any reviews for this movie.</p>
        // }
          
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=e7e8717bf37b2131c41f035d5b761556&language=en-US&page=1`)
        .then(res => res.json())
        .then(({results}) => setAuthor([...results]));

    }, [movieId]);

    return (
        <>
            <ul>
                {authors.map(({author, content, id}) => {
                    return (
                        <li key={id}>
                            <h3>Author: {author}</h3>
                            <p>{content}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
};

export default Reviews;