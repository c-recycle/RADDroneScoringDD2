//variables
var redCornerWhiteBallsMatch = 0;
var redCornerOrangeBallsMatch = 0;
var redFloorWhiteBallsMatch = 0;
var redFloorOrangeBallsMatch = 0;
var redLandedDronesMatch = 0;
var redScoreMatch = 0;

var blueCornerWhiteBallsMatch = 0;
var blueCornerOrangeBallsMatch = 0;
var blueFloorWhiteBallsMatch = 0;
var blueFloorOrangeBallsMatch = 0;
var blueLandedDronesMatch = 0;
var blueScoreMatch = 0;

var skillsCornerWhiteBalls = 0;
var skillsCornerOrangeBalls = 0;
var skillsFloorWhiteBalls = 0;
var skillsFloorOrangeBalls = 0;
var skillsArches = 0;
var skillsTakeoff = 0;
var skillsLanding = 0;
var skillsScore = 0;
//
//HOME PAGE
//

onEvent("goToMatchScoring", "click", function( ) {
  setScreen("MatchScoreScreen");
  resetScore();
  updateScreen();
});

onEvent("goToSkillsScoring", "click", function( ) {
  setScreen("SkillsScoreScreen");
  resetSkillsScore();
  updateSkillsScreen();
});

//
//SKILLS SCORER PAGE
//

onEvent("backToHomeSkills", "click", function( ) {
  setScreen("HomeScreen");
  resetSkillsScore();
  updateSkillsScreen();
});

//RESET SKILLS SCORE PAGE
onEvent("skillsReset", "click", function(){
  resetSkillsScore();
});

onEvent("COS-1", "click", function(){
  skillsCornerOrangeBalls--;
  updateSkillsScreen();
});
onEvent("COS+1", "click", function(){
  skillsCornerOrangeBalls++;
  updateSkillsScreen();
});
onEvent("FOS-1", "click", function(){
  skillsFloorOrangeBalls--;
  updateSkillsScreen();
});
onEvent("FOS+1", "click", function(){
  skillsFloorOrangeBalls++;
  updateSkillsScreen();
});
onEvent("CWS-1", "click", function(){
  skillsCornerWhiteBalls--;
  updateSkillsScreen();
});
onEvent("CWS+1", "click", function(){
  skillsCornerWhiteBalls++;
  updateSkillsScreen();
});
onEvent("FWS-1", "click", function(){
  skillsFloorWhiteBalls--;
  updateSkillsScreen();
});
onEvent("FWS+1", "click", function(){
  skillsFloorWhiteBalls++;
  updateSkillsScreen();
});
onEvent("ArchS-1", "click", function(){
  skillsArches--;
  updateSkillsScreen();
});
onEvent("ArchS+1", "click", function(){
  skillsArches++;
  updateSkillsScreen();
});
onEvent("TakeoffS-1", "click", function(){
  skillsTakeoff--;
  updateSkillsScreen();
});
onEvent("TakeoffS+1", "click", function(){
  skillsTakeoff++;
  updateSkillsScreen();
});
onEvent("LandingS-1", "click", function(){
  skillsLanding--;
  updateSkillsScreen();
});
onEvent("LandingS+1", "click", function(){
  skillsLanding++;
  updateSkillsScreen();
});

//
//MATCH SCORER PAGE
//

onEvent("backToHomeMatch", "click", function( ) {
  setScreen("HomeScreen");
  resetScore();
  updateScreen();
});

//RESET MATCH SCORE PAGE
onEvent("matchReset", "click", function(){
  resetScore();
});

//Add/Subtract Points Buttons
//Corner Orange Balls
onEvent("COR-1", "click", function(){
  redCornerOrangeBallsMatch--;
  updateScreen();
});
onEvent("COB-1", "click", function(){
  blueCornerOrangeBallsMatch--;
  updateScreen();
});
onEvent("COR+1", "click", function(){
  redCornerOrangeBallsMatch++;
  updateScreen();
});
onEvent("COB+1", "click", function(){
  blueCornerOrangeBallsMatch++;
  updateScreen();
});
//Floor Orange Balls
onEvent("FOR-1", "click", function(){
  redFloorOrangeBallsMatch--;
  updateScreen();
});
onEvent("FOB-1", "click", function(){
  blueFloorOrangeBallsMatch--;
  updateScreen();
});
onEvent("FOR+1", "click", function(){
  redFloorOrangeBallsMatch++;
  updateScreen();
});
onEvent("FOB+1", "click", function(){
  blueFloorOrangeBallsMatch++;
  updateScreen();
});
//Corner White Balls
onEvent("CWR-1", "click", function(){
  redCornerWhiteBallsMatch--;
  updateScreen();
});
onEvent("CWB-1", "click", function(){
  blueCornerWhiteBallsMatch--;
  updateScreen();
});
onEvent("CWR+1", "click", function(){
  redCornerWhiteBallsMatch++;
  updateScreen();
});
onEvent("CWB+1", "click", function(){
  blueCornerWhiteBallsMatch++;
  updateScreen();
});
//Floor White Balls
onEvent("FWR-1", "click", function(){
  redFloorWhiteBallsMatch--;
  updateScreen();
});
onEvent("FWB-1", "click", function(){
  blueFloorWhiteBallsMatch--;
  updateScreen();
});
onEvent("FWR+1", "click", function(){
  redFloorWhiteBallsMatch++;
  updateScreen();
});
onEvent("FWB+1", "click", function(){
  blueFloorWhiteBallsMatch++;
  updateScreen();
});
//Landed Drones
onEvent("DLR-1", "click", function(){
  redLandedDronesMatch--;
  updateScreen();
});
onEvent("DLB-1", "click", function(){
  blueLandedDronesMatch--;
  updateScreen();
});
onEvent("DLR+1", "click", function(){
  redLandedDronesMatch++;
  updateScreen();
});
onEvent("DLB+1", "click", function(){
  blueLandedDronesMatch++;
  updateScreen();
});

//
//SKILLS SCORING FUNCTIONS
//

function updateSkillsScreen(){
  //Corner Orange Balls
  if (skillsCornerOrangeBalls == 0){
    hideElement("COS-1");
  } else {
    showElement("COS-1");
  }
  //Floor Orange Balls
  if (skillsFloorOrangeBalls == 0){
    hideElement("FOS-1");
  } else {
    showElement("FOS-1");
  }
  //For All Orange Balls
  if ((skillsCornerOrangeBalls + skillsFloorOrangeBalls) == 16){
    hideElement("FOS+1");
    hideElement("COS+1");
  } else {
    showElement("FOS+1");
    showElement("COS+1");
  }
  //Corner White Balls
  if (skillsCornerWhiteBalls == 0){
    hideElement("CWS-1");
  } else {
    showElement("CWS-1");
  }
  //Floor White Balls
  if (skillsFloorWhiteBalls == 0){
    hideElement("FWS-1");
  } else {
    showElement("FWS-1");
  }
  //For All White Balls
  if ((skillsCornerWhiteBalls + skillsFloorWhiteBalls) == 2){
    hideElement("FWS+1");
    hideElement("CWS+1");
  } else {
    showElement("FWS+1");
    showElement("CWS+1");
  }
  //Arches flown through
  if (skillsArches == 0){
    hideElement("ArchS-1");
  } else {
    showElement("ArchS-1");
  }
  if (skillsArches == 2){
    hideElement("ArchS+1");
  } else {
    showElement("ArchS+1");
  }
  //Drone Takeoff
  if (skillsTakeoff == 0){
    hideElement("TakeoffS-1");
  } else {
    showElement("TakeoffS-1");
  }
  if (skillsTakeoff == 1){
    hideElement("TakeoffS+1");
  } else {
    showElement("TakeoffS+1");
  }
  //Drone Landing
  if (skillsLanding == 0){
    hideElement("LandingS-1");
  } else {
    showElement("LandingS-1");
  }
  if (skillsLanding == 1){
    hideElement("LandingS+1");
  } else {
    showElement("LandingS+1");
  }
  //Calculate Final Score and Display Numbers
  setText("orangeCSkillsNum", ("Corner: " + skillsCornerOrangeBalls));
  setText("orangeFSkillsNum", ("Floor: " + skillsFloorOrangeBalls));
  setText("whiteCSkillsNum", ("Corner: " + skillsCornerWhiteBalls));
  setText("whiteFSkillsNum", ("Floor: " + skillsFloorWhiteBalls));
  setText("archesSNum", ("Arches: " + skillsArches));
  setText("takeoffSNum", ("Takeoff: " + skillsTakeoff));
  setText("landingSNum", ("Landing: " + skillsLanding));
  skillsScore = finalSkillsScoreCalc(skillsCornerWhiteBalls,skillsCornerOrangeBalls,skillsFloorWhiteBalls,skillsFloorOrangeBalls,skillsArches,skillsTakeoff,skillsLanding);
  //display
  setText("skillsFinalScore", "Score: " + skillsScore);
}

//reset Skills Score function
function resetSkillsScore(){
  skillsCornerWhiteBalls = 0;
  skillsCornerOrangeBalls = 0;
  skillsFloorWhiteBalls = 0;
  skillsFloorOrangeBalls = 0;
  skillsArches = 0;
  skillsTakeoff = 0;
  skillsLanding = 0;

  updateSkillsScreen();
}

//final Skills Score Calculator
function finalSkillsScoreCalc(CWB, COB, FWB, FOB, AR, TO, LD){
  var skillsScore = 0;
  var cornerScore = 0;
  var floorScore = 0;
  var droneActionScore = 0;
  
  cornerScore = (CWB*5) + (COB*2);
  floorScore = (FWB*3) + (FOB*1);
  droneActionScore = (AR*5) + (TO*5) + (LD*15);
  
  skillsScore = cornerScore + floorScore + droneActionScore;
  return skillsScore;
}

//
//MATCH SCORING FUNCTIONS
//

//calculate Red and Blue scores
function finalScoreCalc(){
  redScoreMatch = allianceScoreCalc(redCornerWhiteBallsMatch, redCornerOrangeBallsMatch, redFloorWhiteBallsMatch, redFloorOrangeBallsMatch, redLandedDronesMatch);
  blueScoreMatch = allianceScoreCalc(blueCornerWhiteBallsMatch, blueCornerOrangeBallsMatch, blueFloorWhiteBallsMatch, blueFloorOrangeBallsMatch, blueLandedDronesMatch);
  setText("finalScoreCalc", "Red: " + redScoreMatch + " | Blue: " + blueScoreMatch);
}

//Update Screen Function
function updateScreen(){
  //Corner Orange Balls
  if (redCornerOrangeBallsMatch == 0){
    hideElement("COR-1");
  } else {
    showElement("COR-1");
  }
  if (blueCornerOrangeBallsMatch == 0){
    hideElement("COB-1");
  } else {
    showElement("COB-1");
  }
  //Floor Orange Balls
  if (redFloorOrangeBallsMatch == 0){
    hideElement("FOR-1");
  } else {
    showElement("FOR-1");
  }
  if (blueFloorOrangeBallsMatch == 0){
    hideElement("FOB-1");
  } else {
    showElement("FOB-1");
  }
  //For All Orange Balls
  if ((redCornerOrangeBallsMatch + blueCornerOrangeBallsMatch + redFloorOrangeBallsMatch + blueFloorOrangeBallsMatch) == 36){
    hideElement("FOR+1");
    hideElement("FOB+1");
    hideElement("COR+1");
    hideElement("COB+1");
  } else {
    showElement("FOR+1");
    showElement("FOB+1");
    showElement("COR+1");
    showElement("COB+1");
  }
  //Corner White Balls
  if (redCornerWhiteBallsMatch == 0){
    hideElement("CWR-1");
  } else {
    showElement("CWR-1");
  }
  if (blueCornerWhiteBallsMatch == 0){
    hideElement("CWB-1");
  } else {
    showElement("CWB-1");
  }
  //Floor White Balls
  if (redFloorWhiteBallsMatch == 0){
    hideElement("FWR-1");
  } else {
    showElement("FWR-1");
  }
  if (blueFloorWhiteBallsMatch == 0){
    hideElement("FWB-1");
  } else {
    showElement("FWB-1");
  }
  //For All White Balls
  if ((redCornerWhiteBallsMatch + blueCornerWhiteBallsMatch + redFloorWhiteBallsMatch + blueFloorWhiteBallsMatch) == 5){
    hideElement("FWR+1");
    hideElement("FWB+1");
    hideElement("CWR+1");
    hideElement("CWB+1");
  } else {
    showElement("FWR+1");
    showElement("FWB+1");
    showElement("CWR+1");
    showElement("CWB+1");
  }
  //Landed Drones
  if (redLandedDronesMatch == 0){
    hideElement("DLR-1");
  } else {
    showElement("DLR-1");
  }
  if (blueLandedDronesMatch == 0){
    hideElement("DLB-1");
  } else {
    showElement("DLB-1");
  }
  if (redLandedDronesMatch == 2){
    hideElement("DLR+1");
  } else {
    showElement("DLR+1");
  }
  if (blueLandedDronesMatch == 2){
    hideElement("DLB+1");
  } else {
    showElement("DLB+1");
  }
  //Calculate Final Score and Display Numbers
  setText("orangeCRedNum", ("Corner: " + redCornerOrangeBallsMatch));
  setText("orangeFRedNum", ("Floor: " + redFloorOrangeBallsMatch));
  setText("whiteCRedNum", ("Corner: " + redCornerWhiteBallsMatch));
  setText("whiteFRedNum", ("Floor: " + redFloorWhiteBallsMatch));
  setText("landRed", ("Red Drones Landed: " + redLandedDronesMatch));
  setText("orangeCBlueNum", ("Corner: " + blueCornerOrangeBallsMatch));
  setText("orangeFBlueNum", ("Floor: " + blueFloorOrangeBallsMatch));
  setText("whiteCBlueNum", ("Corner: " + blueCornerWhiteBallsMatch));
  setText("whiteFBlueNum", ("Floor: " + blueFloorWhiteBallsMatch));
  setText("landBlue", ("Blue Drones Landed: " + blueLandedDronesMatch));
  finalScoreCalc();
}

//reset Score Function
function resetScore(){
  redCornerWhiteBallsMatch = 0;
  redCornerOrangeBallsMatch = 0;
  redFloorWhiteBallsMatch = 0;
  redFloorOrangeBallsMatch = 0;
  redLandedDronesMatch = 0;

  blueCornerWhiteBallsMatch = 0;
  blueCornerOrangeBallsMatch = 0;
  blueFloorWhiteBallsMatch = 0;
  blueFloorOrangeBallsMatch = 0;
  blueLandedDronesMatch = 0;
  
  updateScreen();
}

//finalScoreCalculator
function allianceScoreCalc(CWB, COB, FWB, FOB, LD){
  var allianceScore = 0;
  var cornerScore = 0;
  var floorScore = 0;
  var landedScore = 0;
  
  cornerScore = (CWB*5) + (COB*2);
  floorScore = (FWB*3) + (FOB*1);
  landedScore = (LD*15);
  
  allianceScore = cornerScore + floorScore + landedScore;
  return allianceScore;
}