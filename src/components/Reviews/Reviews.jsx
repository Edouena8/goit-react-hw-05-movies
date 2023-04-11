import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from "services/films-api";
import { ReviewItem, ReviewAuthor } from "./Reviews.styled";

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
                            <ReviewItem key={id}>
                                <ReviewAuthor>Author: {author}</ReviewAuthor>
                                <p>{content}</p>
                            </ReviewItem>
                        )
                    })}
                </ul>) : (<p style={{color: '#e6e6e6'}}>We don't have any reviews for this movie.</p>)}
        </>
    );
};

export default Reviews;