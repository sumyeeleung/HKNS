function chatBot() {
	this.input;

	this.respondTo = function(input) {

		this.input = input.toLowerCase();

			var curse_choices = [
			'Please respect yourself as well as others. We wish a peaceful and rational discussion of meaningfull matters.',
			'Please, mind your manners. We would not be able to talk if you do not behave. I would like to have a rational, worthwhile and rich discussion.',
			'I am leaving if you are not respecting yourself.',
			'Mind your words, or I will turn this to my lawyer.'
		];

			var none_choices =[
			'I am not very clear about what you have just said. Perhaps you should have prepared well for this conversation. I would be very willing to continue the discussion if you do so.',
			'It seems not to be related to our content. Think twice before you say it, pretty please.',
			'I cannot answer you since what you have just said is not clear.'
		];

			var question_choices =[
			'I do not think this is a sutiable question. You better consider it clearly before ask. The discussion would be great only when you are well prepared.',
			'I will not answer hypothetical questions. You should have prepared perfectly before you click the button.',
			'I am not willing to answer this question since it is not related. Please think before ask.',
			'The discussion cannot be carried on if you just ask non related matters.',
			'Well, I am actually expecting some relevant questions. Do you have any?'
		];

			if(this.match('(hi|hello|hey|hola)(\\s|!|\\.|$)'))
				return "Nice to meet you. This is my pleasue to talk with you. Ask qustions if you have any.";

			if(this.match('who are you') || this.match('your name') || this.match('your job') || this.match('ahcieve'))
				return "As a secretary for education of Hong Kong. I have been working very hard in handling educational affairs since 2012. I have adopted many policies to improve the education system. I have been actively communicated with schools, parents and students.";

			if(this.match('hobby|book|books'))
				return "I read 30 books per month. This is not a thing. I read around ten books during a ten-hour-long flight. I have earned so much from books.";

			if(this.match('(calendar)'))
				return "If you mean the calendar below, I do not think it has anything special. Let\'s move on.";

			if(this.match('(bye|goodbye|end)'))
				return "This is a nice and treasureable conversation. Have a nice day. ";

			if(this.match('go to hell') || this.match('go to die') || this.match('burn in hell'))
				return;

			if(this.match('(dumb|stupid|retarted|bastard|silly|foolish|naive|brainless|idiot|pointless|jerk|moron|fool|bitch|fuck)'))
				return curse_choices[Math.floor(Math.random() * curse_choices.length)];

			if(this.match('kill|suicide') || this.match('students suicide') || this.match('student suicide'))
				return "I am afraid that it is not very productive to, again, talk about those students whom have suicided. I have already expressed myself to the public. I have answered the related organization and attended the public hearing. I only have one advice to all student: read as many books as I do, and make yourself a life planning.";

			if(this.match('\\?'))
				return question_choices[Math.floor(Math.random() * curse_choices.length)];

			if(this.input == 'noop')
				return;

			return none_choices[Math.floor(Math.random() * none_choices.length)];}


	this.match = function(regex) {

		return new RegExp(regex).test(this.input);
	}
}
