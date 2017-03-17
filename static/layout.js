$(function() {

	// chat aliases
	var you = 'You:';
	var robot = 'Ng:';
	//holder
	var enter = false;
	var entered = false;
	var leave = false;
	var count  = 0;
	// slow reply by 400 to 800 ms
	var delayStart = 1000;
	var delayEnd = 2000;

	// initialize
	var bot = new chatBot();
	var chat = $('.chat');
	var waiting = 0;
	$('.busy').text(robot + ' is typing...');

	// submit user input and get chat-bot's reply
	var submitChat = function() {

		var input = $('.input input').val();
		if(input == '') return;

		$('.input input').val('');
		updateChat(you, input);

		var reply = bot.respondTo(input);
		if(reply == null) return;

		var latency = Math.floor((Math.random() * (delayEnd - delayStart)) + delayStart);
		$('.busy').css('display', 'block');
		waiting++;
		setTimeout( function() {
			if(typeof reply === 'string') {
				updateChat(robot, reply);
			} else {
				for(var r in reply) {
					updateChat(robot, reply[r]);
				}
			}
			if(--waiting == 0) $('.busy').css('display', 'none');
		}, latency);
	}

	var updateChat = function(party, text) {

		var style = 'you';
		if(party != you) {
			style = 'other';
		}

		var line = $('<div><span class="party"></span> <span class="text"></span></div>');
		line.find('.party').addClass(style).text(party);
		line.find('.text').text(text);

		chat.append(line);

		chat.stop().animate({ scrollTop: chat.prop("scrollHeight")});

	}
	//"enter&leave" feature
	$('.input a').click(function(){

		enter_number = Math.floor((Math.random() * 10) + 1);
		if(entered === true){
			count += 1;
		}
		if (enter_number <= 7&&enter === false&&count < 10) {
			updateChat('Ng refuses to talk with you.');

		}
		else if(enter_number > 7&&entered === false&&count < 10){
			enter = true;
			entered = true;
			updateChat("Ng has entered the chat room.");
			$('.input a').bind('click', submitChat);
		}

		else if(count === 10){

			$('.input').attr('disabled', true);
		}

		else if (count > 10){
			updateChat('Ng is out of patience. He has left the chat room.');}
		})


	$('.input a').click;


	// initial chat state
	updateChat('Ng is not in the chat room.');

});
