import { useRef, useState, useEffect } from "react";

function Player() {
  const audioRef = useRef(null); // ref для аудіо
  const [isPlaying, setIsPlaying] = useState(false); // стан для відстеження відтворення
  const [progress, setProgress] = useState(0); // стан для прогресу

  // Функція для запуску або зупинки аудіо
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Зупиняємо аудіо
    } else {
      audioRef.current.play(); // Запускаємо аудіо
    }
    setIsPlaying(!isPlaying); // Змінюємо стан
  };

  // Функція для оновлення прогресу
  const updateProgress = () => {
    const currentTime = audioRef.current.currentTime; // поточний час
    const duration = audioRef.current.duration; // загальна тривалість
    setProgress((currentTime / duration) * 100); // обчислюємо відсоток прогресу
  };

  // Додаємо обробник події timeupdate
  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener("timeupdate", updateProgress);

    return () => {
      audioElement.removeEventListener("timeupdate", updateProgress); // очищення
    };
  }, []);

  return (
    <>
      <audio id="player" ref={audioRef}>
        <source src="/books/061225_fiction_ford.mp3" type="audio/mpeg" />
      </audio>
      <div className="player_container">
        <div className="top_container">
          <div className="player_title">BookName : Chapter 1</div>
          <div className="player_progress">
            <progress id="audiofile" value={progress} max="100"></progress>
          </div>
          <div className="player_time">
            <div className="player_current_time">
              {formatTime(audioRef.current?.currentTime || 0)}
            </div>
            <div className="player_full_time">
              {formatTime(audioRef.current?.duration || 0)}
            </div>
          </div>
        </div>
        <div className="bottom_container">
          <button className="player_mid_button">&#9198;</button>
          {isPlaying ? (
            <button className="player_big_button" onClick={togglePlayPause}>
              &#9208;
            </button>
          ) : (
            <button className="player_big_button" onClick={togglePlayPause}>
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
