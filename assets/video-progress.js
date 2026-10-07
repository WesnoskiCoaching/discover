(() => {
  const video = document.querySelector('#welcome video');
  const track = document.querySelector('.playback-track');
  const fill = document.querySelector('.playback-fill');
  if (!video || !track || !fill) return;
  let frame;
  function update() {
    const ratio = Number.isFinite(video.duration) && video.duration > 0
      ? Math.min(1, Math.max(0, video.currentTime / video.duration)) : 0;
    const visualProgress = 1 - Math.pow(1 - ratio, 2);
    fill.style.transform = `scaleX(${visualProgress})`;
    track.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
  }
  function tick() {
    update();
    if (!video.paused && !video.ended) frame = requestAnimationFrame(tick);
  }
  video.addEventListener('play', () => { cancelAnimationFrame(frame); tick(); });
  ['loadedmetadata', 'durationchange', 'timeupdate', 'seeking', 'seeked', 'ended', 'emptied'].forEach(event => video.addEventListener(event, update));
  video.addEventListener('pause', () => { cancelAnimationFrame(frame); update(); });
  update();
})();
