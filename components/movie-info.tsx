import { API_URL } from "../app/(home)/page";

import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
    const res = await fetch(`${API_URL}/${id}`);

    return res.json();
}

const MovieInfo = async ({ id }: { id: string }) => {
    const movie = await getMovie(id);

    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3 className={styles.vote_average}>
                    {movie.vote_average.toFixed(1)}
                </h3>
                <p className={styles.overview}>⭐️ {movie.overview}</p>
                <a href={movie.homepage} target="_blank">
                    Homepage &rarr;
                </a>
            </div>
        </div>
    );
};

export default MovieInfo;
