
	var final_n;

	var append = 0;
	var single_names = [];
	var names = [];
	

	var functions = [{
		id: 0,
		token: 'scan',
		msg: 'Opening camera for scanning',
		task: 'open_ocr',
		target: 'scan.html'
		}, 
		{
		id: 1,
		token: 'list',
		msg: 'Opening your to do list',
		task: 'open_todo',
		target: 'todo.html'
	}];

			// new instance of speech recognition
		var recognition = new webkitSpeechRecognition();
		// set params
		recognition.continuous = true;
		recognition.interimResults = false;
		recognition.start();

		recognition.onresult = function(event){
		  
		  // delve into words detected results & get the latest
		  // total results detected
		  var resultsLength = event.results.length -1 ;
		  // get length of latest results
		  var ArrayLength = event.results[resultsLength].length -1;
		  // get last word detected
		  var saidWord = event.results[resultsLength][ArrayLength].transcript;
		  
		  // loop through links and match to word spoken
		 console.log(saidWord.trim());

		names[append] = saidWord.trim();

		$('ul').append('<li>'+saidWord.trim()+'</li>');

		append++;

		var counts = [];
		if(append == 5) {
			for(var i = 0; i < 5; i++) {
				var max = i; var maxC = 0;
				for(var j = 0; j < 6; j++) {

					if(names[i] == names[j]) {
						maxC++;
						counts[i] = maxC;
					}
				}

			}

		var max = Math.max(...counts);
		
		var index = counts.indexOf(max);

		final_n = names[index];

		console.log(final_n);

		localStorage.setItem("name", final_n);

		console.log(localStorage.getItem("name"));

		window.location.href = 'index.html'

		}
		

					

			var words = saidWord.split(" ");

				for(var i = 0; i < words.length; i++) {
						for(var j = 0; j < functions.length; j++) {
							if(words[i] == functions[j].token) {
								var msg = new SpeechSynthesisUtterance(functions[j].msg);
								window.speechSynthesis.speak(msg);

								window.location.href = functions[j].target;

							}
						}
				}
				
			}
		// speech error handling
		recognition.onerror = function(event){
		  console.log('error?');
		  console.log(event);
		}