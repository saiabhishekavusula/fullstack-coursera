
(function(window){

var helloSpeaker ={};

var speakWord = "Hello";


helloSpeaker.speak =function(name) {
  console.log("hello" + " " + name);
}

window.helloSpeaker = helloSpeaker;
})(window);