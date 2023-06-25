import { Player } from '@lottiefiles/react-lottie-player';
import lottie from './image-loader.json';

export default function LoaderLottie({ className }) {
  return (
    <>
      <Player
        autoplay
        loop
        className={`sticky inset-0 ${className} my-auto aspect-video w-96`}
        src={lottie}
      ></Player>
    </>
  );
}
