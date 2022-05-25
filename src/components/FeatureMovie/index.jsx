import { Container } from './style'

export function FeatureMovie({ item }){
    console.log(item);
    const date = new Date(item.first_air_date).getFullYear();
    let genresApi = item.genres;
    let genres = []

    genresApi.forEach(item=>{
        genres.push(item.name);
    })

    console.log(genres);

    return ( 
        <Container background={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}>
            {/* <div>{item.original_name}</div> */}
            <div className="feature-y">
                <div className="feature-x">
                    <div className="feature-name">
                        <h1>{item.name}</h1>
                    </div>
                    <div className="feature-info">
                        <div className="feature-points">{item.vote_average} pontos</div>
                        <div className="feature-year">{date}</div>
                        <div className="feature-seasons">{item.seasons.length} temporada{item.seasons.length != 1 ? "s" : ""}</div>
                    </div>
                    <div className="feature-description">{item.overview}</div>
                    <div className="feature-buttons">
                        <a href="#" className="watch-button">Assistir</a>
                        <a href="#" className="list-button">Minha Lista</a>
                    </div>
                    <div className="feature-generos">Gêneros: {genres.join(", ")}</div>
                </div>
            </div>


        </Container>
    )
}