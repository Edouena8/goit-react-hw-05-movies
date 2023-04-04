import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getActors } from "services/films-api";
import ActorsList from "components/ActorsList";

const Cast = () => {
    const {movieId} = useParams();
    const [actors, setActor] = useState([]);

    useEffect(() => {
        if(!movieId) return;

        getActors(movieId)
        .then(({cast}) => setActor(cast));

    }, [movieId]);

    return (
        <>
            <ActorsList actors={actors}/>
        </>
    );
};

export default Cast;