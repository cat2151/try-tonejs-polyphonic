import * as Tone from 'tone'

window.addEventListener("load", ()=>{
  const button = document.querySelector('button');
  button.onclick = async ()=>{
    await Tone.start();
    play();
  };
});

function play() {
  const synth = new Tone.PolySynth(Tone.FMSynth).toDestination();
  synth.volume.value = -12;
  synth.triggerAttackRelease(["C2", "G2", "C3", "G3", "E4", "B4", "D5", "F5", "A5", "C5"], 4);
}
