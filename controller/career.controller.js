const EXPERIENCE = [
	{
		id: 1,
		company: 'Schema (now Teoco)',
		from: '2005-10',
		to: '2009-07',
		role: 'Software Engineer',
		description: 'Started at Student position and moved to full time job, working on Java project(s).'
	},
	{
		id: 2,
		company: 'Schema (now Teoco)',
		from: '2008-03',
		to: '2012-06',
		role: 'Version Manager',
		description: 'In addition to SW development, I managed the execution of the major product of the company. Mainly planning and tracking.'
	},	
	{
		id: 3,
		company: 'Schema (now Teoco)',
		from: '2009-07',
		to: '2012-06',
		role: 'Software Team Lead',
		description: 'Managing a team of 5-8 engineers, developing the major product of the company.'
	},
	{
		id: 4,
		company: 'Outbrain',
		from: '2012-06',
		to: '2014-07',
		role: 'Innovation Team Leader',
		description: 'Started an innovation project from scratch, based on existing Outrain technology.'
	},	
	{
		id: 5,
		company: 'Outbrain',
		from: '2014-06',
		role: '"Sphere" Group Leader',
		description: 'Building a group of multi-disciplinary engineers. Working with TLs on recruiting & training. Hands on development of a strategic project around consumer software.'
	},
	{
		id: 6,
		company: 'Outbrain',
		from: '2018-02',
		role: '"Engage" Group Leader',
		description: 'Leading the development of several teams working on Outbrain core products'
	}
	
]

var CareerController = {
	experience: function(req, res) {
		var id = parseInt(req.params['id']);
console.log(id);
		var found = null;
		for (var i = 0; i < EXPERIENCE.length; i++) {
			var exp = EXPERIENCE[i];
			if (id === exp.id) {
				found = exp;
				break;
			}
		}

		if (found != null) {
			res.send(found);
		} else {
			res.sendStatus(400, 'No such item'); 
		}
	},


	experiences: function(req, res) {
		var experience = {
			experience: EXPERIENCE
		};
		res.send(experience);
	}
}

module.exports = CareerController;
