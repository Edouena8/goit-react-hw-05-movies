const ActorsList = ({actors}) => {
    return (
        <>
            <ul>
                {actors.map(({id, profile_path, name, character}) => {
                    return (
                        <li key={id}>
                            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="" />
                            <p>{name}</p>
                            <p>{character}</p>
                        </li>                       
                    )
                })}
            </ul>
        </>
    );
};

export default ActorsList;