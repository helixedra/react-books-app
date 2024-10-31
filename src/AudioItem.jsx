import { useAudioPlayer } from './AudioPlayerContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

function AudioItem({ audio: { id, title }, book }) {
  // console.log(useAudioPlayer());
  const bookId = book;
  const fileId = id;
  const { playInContext, isPlaying, playerFile } = useAudioPlayer();

  return (
    <>
      <div className="audio_block">
        <div
          className="audio_title"
          onClick={() => playInContext(bookId, fileId)}>
          {isPlaying && playerFile.fileId === fileId ? (
            <>
              <span className="audio_icon">
                <FontAwesomeIcon icon={faVolumeHigh} />
              </span>
              <span className="audio_title_active">{title}</span>
            </>
          ) : (
            <>{title}</>
          )}
        </div>
      </div>
    </>
  );
}

export default AudioItem;
