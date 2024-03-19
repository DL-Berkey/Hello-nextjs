"use client";

import Link from "next/link";

import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface Props {
    id: string;
    title: string;
    poster_path: string;
}

const Movie = ({ id, title, poster_path }: Props) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/movies/${id}`);
    };

    return (
        <div className={styles.movie}>
            <img alt={"img"} src={poster_path} onClick={onClick} />
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    );
};

export default Movie;
