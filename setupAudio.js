function setupAudio(){
  console.log("setting up audiocontext");
  const audioContext = new AudioContext();
  const element = document.querySelector("audio");
  const source = audioContext.createMediaElementSource(element);
  source.connect(audioContext.destination);
}
