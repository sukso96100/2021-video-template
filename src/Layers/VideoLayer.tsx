import { interpolate, getInputProps, useCurrentFrame, useVideoConfig, Video } from 'remotion';

import logo from '../Images/placeholder.png';

export const VideoLayer: React.FC<{
	transitionStart: number;
  videoPath: string;
}> = ({ transitionStart, videoPath }) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const bottom = frame > 20 ? 50 : 30 + frame;
	const opacity = frame >= 20 ? 1 : (frame / 20);
  const inputProps = getInputProps()
	return (
		<div
			style={{
				width: videoConfig.width,
				height: videoConfig.height,
			}}>
			<Video
        src={videoPath}
        // src="https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
        startFrom={transitionStart} // if video is 30fps, then it will start at 2s
        // endAt={transitionStart + ((inputProps?.duration ?? 20) * 30)} // if video is 30fps, then it will end at 4s
        style={{
          width: videoConfig.width,
				  height: videoConfig.height,
        }}
      />

		</div>
	);
};
