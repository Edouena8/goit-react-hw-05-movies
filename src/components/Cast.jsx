import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Cast = () => {
    const {movieId} = useParams();
    const [actors, setActor] = useState([]);

    useEffect(() => {
        
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e7e8717bf37b2131c41f035d5b761556&language=en-US`)
        .then(res => res.json())
        .then(({cast}) => setActor([...cast]));

    }, [movieId]);

    return (
        <>
            <ul>
                {actors.map(actor => {
                    return (
                        <li key={actor.id}>
                            <img src={actor.profile_path} alt="" />
                            <p>{actor.name}</p>
                            <p>{actor.character}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default Cast;