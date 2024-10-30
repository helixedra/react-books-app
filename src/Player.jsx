import { useAudioPlayer } from "./AudioPlayerContext";

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
      <audio id="player" ref={audioRef}>
        <source src={playerFile ? playerFile.file : null} type="audio/mpeg" />
      </audio>
      <div className="player_container">
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
          <button className="player_mid_button">&#9198;</button>
          {isPlaying ? (
            <button
              className="player_big_button"
              onClick={() => togglePlayPause()}
            >
              &#9208;
            </button>
          ) : (
            <button
              className="player_big_button"
              onClick={() => togglePlayPause()}
            >
              &#9205;
            </button>
          )}
          <button className="player_mid_button">&#9197;</button>
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
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

export default Player;
