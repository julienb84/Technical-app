const toMilliseconde = (timestamp: number) => {
  if (timestamp < 1e12) {
    return timestamp * 1000;
  } else {
    return timestamp;
  }
};

export default toMilliseconde;
