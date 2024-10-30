import { useAudioPlayer } from "./AudioPlayerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function AudioItem({ audio: { id, title }, book }) {
  // console.log(useAudioPlayer());
  const bookId = book;
  const fileId = id;
  const { playInContext, isPlaying, playerFile } = useAudioPlayer();
  // console.log(playerFile.fileId);

  return (
    <>
      <div className="audio_block">
        {/* <div className="audio_title">{title}</div> */}
        {/* <button onClick={() => play(bookId, fileId)}>{title}</button> */}
        <button
          className="audio_title"
          onClick={() => playInContext(bookId, fileId)}
        >
          {isPlaying && playerFile.fileId === fileId ? (
            <>
              <span className="audio_icon">
                <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className="audio_title_active">{title}</span>
            </>
          ) : (
            <>{title}</>
          )}
        </button>
      </div>
    </>
  );
}

export default AudioItem;
