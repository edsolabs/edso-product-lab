//EDSO think theory
//base
var personality = ["thinking", "feeling", "behavior"];

//INFLUENCERS: nature
var nature =["needs", "chemicals"]
var needs = ["physiological", "safety", "love/belonging", "esteem", "self-actualization"];
var chemicals = ["endorphins", "dopamine", "serotonin", "oxytocin"];
var mood =["frequency"]
var attitude = [];

//INFLUENCERS: environment
var environment = ["social", "physical", "cultural"];
var persuasion = ["reciprocity", "scarcity", "consensus", "liking", "consistency"];
var inspiration = [];
var values = [];
var character = ["mental", "moral"];
var instinct = ["short","heuristics", "fixed pattern"];
var reasoning = ["thinking", "intellect", "cognition", "heuristics"];
var system1 = [];
var system2 = [];
var wellbeing = [];
var relationships = ["attachmenttheory"];


//influence descriptors
var stimuli =["internal", "external"];
var range =["negative", "positive"];
var frequency = ["low", "high"];

//output
var action =["choice"];
var behavior =["action"];


//EDSO Models

//character
var user = function(username){
	this.username = username;
	this.needs = needs();
	this.achievement = achievement();
	this.pain-points = pain-points();
	this.constraints = constraints();
	this.emotions = emotions();
	this.motivations = motivations();
	this.frustrations = frustrations();
	this.values = values();
	this.capabilities = capabilities();
	this.comfortable = comfortable();
	this.decisions = decisions();
}

//extender
user.prototype.randomResponse = function(){
	var randomNum = Math.floor((Math.random() * 3) + 1);
	if (randomNum === 1) {
		return this.emotions;
	} else if (randomNum === 2) {
		return this.emotions;
	else {
		return this.emotions;
	}
	};



