function AudioItem({ audio: { title, file }, bookCover, book, play }) {
  return (
    <>
      <div className="audio_block">
        <div className="audio_title">{title}</div>
        <audio controls onPlay={() => play(title, book, bookCover)}>
          <source src={file} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
}

export default AudioItem;
