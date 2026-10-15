document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.rel = 'noopener noreferrer';
});

const weddingAudio = document.querySelector('.wedding-audio');

if (weddingAudio) {
  const startWeddingMusic = () => {
    weddingAudio.play().then(() => {
      document.removeEventListener('click', startWeddingMusic, true);
    }).catch((error) => {
      console.error('無法播放婚禮音樂：', error);
    });
  };

  document.addEventListener('click', startWeddingMusic, true);
}