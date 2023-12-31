const GameStats = (time) => {
  const minutes = ('0' + Math.floor((time.time / 60000) % 60)).slice(-2);
  const seconds = ('0' + Math.floor((time.time / 1000) % 60)).slice(-2);
  const milliseconds = ('0' + ((time.time / 10) % 100)).slice(-2);

  return (
    <>
      <p>Time Elapse:</p>
      <span>
        {minutes}:{seconds}:{milliseconds}
      </span>
    </>
  );
};

export default GameStats;
