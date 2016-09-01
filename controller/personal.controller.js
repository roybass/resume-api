const AVG_MS_IN_YEAR = 1000 * 60 * 60 * 24 * 365.25;
const birthDay = Date.parse('1979-02-24');
const ABOUT = 'Just a regular geek.  Married +2.'

var PersonalController = {
	info: function(req, res) {
		var now = new Date();
		var msSinceBirth = now.getTime() - birthDay;
		var yearsSinceBirth = Math.floor(msSinceBirth / AVG_MS_IN_YEAR);

		var info = {
			name: 'Roy Bass',
			age: yearsSinceBirth,
			country: 'Israel',
			languages: ['he', 'en'],
			about: ABOUT
		};
		res.send(info);
	},


	hobbies: function(req, res) {
		var hobbies = {
			hobbies: [
				{
					name: 'PC Gaming',
					note: 'RPGs, Adventure , Shooters, Puzzles.  Some of my favourites: Portal, The Witcher, Mass Effect'
				},
				{
					name: 'PS4 Gaming',
					note: 'Some of favourites: FIFA, Last Of Us'
				},
				{
					name: "Electric Guitar",
					note: "I wish I had more time to play my guitar"
				},
				{
					name: 'Model Kits',
					note: 'Military models, when time allows it...'
				}
			]
		};
		res.send(hobbies);
	}
}

module.exports = PersonalController;