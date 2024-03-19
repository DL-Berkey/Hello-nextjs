import { API_URL } from "../app/(home)/page";

import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
    const res = await fetch(`${API_URL}/${id}/videos`);

    return res.json();
}

const MovieVideos = async ({ id }: { id: string }) => {
    const videos = await getVideos(id);

    return (
        <div className={styles.container}>
            {videos.map((video) => (
                <iframe
                    key={video.id}
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    src={`https://youtube.com/embed/${video.key}`}
                />
            ))}
        </div>
    );
};

export default MovieVideos;
