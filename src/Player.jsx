import { useAudioPlayer } from './AudioPlayerContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
} from '@fortawesome/free-solid-svg-icons';

function Player() {
  //Context
  const {
    audioRef,
    isPlaying,
    progress,
    currentTime,
    duration,
    togglePlayPause,
    playerFile,
  } = useAudioPlayer();

  return (
    <>
      <div className={playerFile ? 'space' : 'hide'}></div>
      <audio id="player" ref={audioRef}>
        <source src={playerFile ? playerFile.file : null} type="audio/mpeg" />
      </audio>
      <div className={playerFile ? 'player_container' : 'hide'}>
        <div className="top_container">
          <div className="player_title">
            {playerFile
              ? `${playerFile.bookTitle} : ${playerFile.fileTitle}`
              : null}
          </div>
          <div className="player_progress">
            <progress id="audiofile" value={progress} max="100"></progress>
          </div>
          <div className="player_time">
            <div className="player_current_time">{formatTime(currentTime)}</div>
            <div className="player_full_time">{formatTime(duration)}</div>
          </div>
        </div>
        <div className="bottom_container">
          <button className="player_mid_button">
            <FontAwesomeIcon icon={faBackwardStep} />
          </button>
          {isPlaying ? (
            <button
              className="player_big_button"
              onClick={() => togglePlayPause()}>
              <FontAwesomeIcon icon={faPause} />
            </button>
          ) : (
            <button
              className="player_big_button"
              onClick={() => togglePlayPause()}>
              <FontAwesomeIcon icon={faPlay} />
            </button>
          )}
          <button className="player_mid_button">
            <FontAwesomeIcon icon={faForwardStep} />
          </button>
        </div>
      </div>
    </>
  );
}

// Функція для форматування часу в хвилини:секунди
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${mins}:${secs}`;
}

export default Player;
