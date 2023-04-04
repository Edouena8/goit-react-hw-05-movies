import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from "services/films-api";

const Reviews = () => {
    const {movieId} = useParams();
    const [authors, setAuthor] = useState([]);
    console.log(authors);

    useEffect(() => {
        if(!movieId) return;
          
        getReviews(movieId)
        .then(({results}) => setAuthor(results));

    }, [movieId]);

    return (
        <>
            {authors.length ? (
                <ul>
                    {authors.map(({author, content, id}) => {
                        return (
                            <li key={id}>
                                <h3>Author: {author}</h3>
                                <p>{content}</p>
                            </li>
                        )
                    })}
                </ul>) : (<p>We don't have any reviews for this movie.</p>)}
        </>
    );
};

export default Reviews;