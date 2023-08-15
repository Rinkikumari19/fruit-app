import animationData from './Lottie/112373-404-page-not-found.json';
import Lottie from 'react-lottie';

export default function NoPage() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <h1>Ooops!</h1>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </>
    )
}