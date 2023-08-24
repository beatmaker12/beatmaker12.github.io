const drums = new Howl({
    "src": [
      "/drims/drums.webm",
      "drums/drums.mp3"
    ],
    "sprite": {
      "clap": [
        0,
        734.2630385487529
      ],
      "closed-hihat": [
        2000,
        445.94104308390035
      ],
      "crash": [
        4000,
        1978.6848072562354
      ],
      "kick": [
        7000,
        553.0839002267571
      ],
      "open-hihat": [
        9000,
        962.7664399092968
      ],
      "snare": [
        11000,
        354.48979591836684
      ]
    }
  });
  const drumkit = document.querySelector('.drumkit')

  drumkit.addEventListener('click', () => {
    if (event.target.classList.contains('pad')){}
        let soundToPlay = event.target.dataset
 } )



