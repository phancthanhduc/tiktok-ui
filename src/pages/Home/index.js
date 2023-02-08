import { useState, useEffect, useRef } from 'react';
import * as userService from '~/services/userService';

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Home() {
    const videoRef = useRef();
    //const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    useEffect(() => {
        userService
            .getSuggested({ page: INIT_PAGE, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((err) => console.log(err));
    }, []);

    // const handleSeeAll = () => {
    //     setPage(page + 1);
    // };
    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
        <div>
            {suggestedUsers.map((account) => (
                <div key={account.id}>
                    <video ref={videoRef} src={account.popular_video.file_url} width={300}></video>
                    <div>
                        <button onClick={handlePlay}>Play</button>
                        <button onClick={handlePause}>Pause</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
