import { createContext, useContext, useRef, useState, useEffect } from "react";
import booksData from "./books.json";

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null); // ref для аудіо
  const [isPlaying, setIsPlaying] = useState(false); // стан для відстеження відтворення
  const [progress, setProgress] = useState(0); // стан для прогресу
  const [currentTime, setCurrentTime] = useState(0); // поточний час
  const [duration, setDuration] = useState(null); // загальна тривалість
  const [playerFile, setPlayerFile] = useState(null);
  // const [playing, setPlaying] = useState(null);

  // console.log(audioRef.current);
  // console.log("Context");
  const playInContext = (bookId, fileId) => {
    // console.log(bookId);
    // console.log(fileId);
    // togglePlayPause();

    const book = booksData.find((book) => book.id === parseInt(bookId));
    const file = book?.files?.find((file) => file.id === parseInt(fileId));

    setPlayerFile({
      fileTitle: file.title,
      file: file.file,
      fileId: file.id,
      bookId: book.id,
      bookTitle: book.title,
      bookCover: book.cover,
    });
    audioRef.current.src = file.file;

    if (playerFile) {
      if (bookId === playerFile?.bookId && fileId === playerFile?.fileId) {
        // console.log("SAME");
        togglePlayPause("same");
      } else {
        togglePlayPause("different");
        // console.log("DIF");
      }
    } else {
      togglePlayPause("different");
    }
  };

  const togglePlayPause = (playback = "same") => {
    if (playback === "same") {
      if (isPlaying) {
        // console.log(isPlaying);
        // console.log(audioRef.current);
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      const currentDuration = audioRef.current.duration || 1; // Default to 1 to avoid division by zero
      setProgress((audioRef.current.currentTime / currentDuration) * 100);
    }
  };

  // Викликати при завантаженні аудіо для встановлення тривалості
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateProgress);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    }
    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", updateProgress);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  return (
    <AudioPlayerContext.Provider
      value={{
        audioRef,
        isPlaying,
        progress,
        currentTime,
        duration,
        togglePlayPause,
        playInContext,
        playerFile,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};
