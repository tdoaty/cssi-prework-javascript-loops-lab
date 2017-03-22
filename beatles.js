'use strict';

//Lennon Facts in a While Loop//
function johnLennonFacts(facts){
  var excitingFacts = ""
  var i = 0
  while (i<facts.length){
    excitingFacts = excitingFacts + facts[i]+ "!!!" + " "
    i++;
  }
 return excitingFacts
}

//The Fab Four in a For Loop//
function theBeatlesPlay(musicians, instruments){
  var fabFour = ""
  for (var i = 0; i < musicians.length; i = i +1){
    fabFour += musicians[i] + " plays " + instruments[i];
    i++;
  }
  return fabFour
}

//Devotion in a Do/While Loop//
function iLoveTheBeatles (number){
  var devotion = ""
  var i = 0;
  do{
    devotion = "I love the Beatles!";
    number[i] = number[i] + 1;
    i = i + 1;
  } while (i < 10);
  return devotion
}
