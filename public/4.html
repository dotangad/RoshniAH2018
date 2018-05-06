<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src = "js/script.js"></script>	
	<link rel="stylesheet" href="css/main.css">
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script type="text/javascript" src="chu.js"></script>

</head>

<body>

<script>	

	var name = localStorage.getItem("name");

	console.log(name);


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
		target: 'todo/'
	}, 
	{
		id: 2,
		token: 'message',
		msg: 'Opening messaging',
		task: 'open_msg',
		target: 'msg.html'
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
		 console.log(saidWord);

		 localStorage.setItem("word", saidWord);
		 console.log(localStorage.getItem("word"));

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

				var first = words[0].toLowerCase();
		console.log(first);

		if(first == name.toLowerCase()) {
			for(var i = 0; i < words.length; i++) {
				for(var j = 0; j < hotwords.length; j++) {
					var break_p = 0;
					if(words[i] == hotwords[j] && !break_p) {
						break_p++;
						var end_point;
						
						if(words.includes("by")) {
							var deadline = words[words.indexOf("by") + 1];
							end_point = words.indexOf("by");
						} else {
							var deadline = 0;
							end_point = words.length;
						}
						
						var task = '';

						for(var k  = words.indexOf(hotwords[j])+1; k < end_point; k++) {
							task += words[k] + ' ';
						}

						console.log(task + ': ' + deadline);

						var obj = {'time': new Date().toLocaleTimeString().replace("/.*(\d{2}:\d{2}:\d{2}).*/", "$1"), 'task': task, 'deadline': deadline};

						tasks.push(obj);

						console.log(tasks);


						localStorage.setItem("task", task);
						localStorage.setItem("deadline", deadline);

					}
				}
			}
		} else {
			for(var i = 0; i < words.length; i++) {
				if(words[i] == name) {
					var msg = new SpeechSynthesisUtterance("Your name has been detected");
					window.speechSynthesis.speak(msg);
					window.location.href = "detection.html";
				}
			}
		}
				}

		// speech error handling
		recognition.onerror = function(event){
		  console.log('error?');
		  console.log(event);
		}

</script>

<button id = "trigger" onclick="start(event)">Start!</button>
<div class="frame">
	<div id="screen">
		<img src="4.png" alt="">
	</div>
</div>

<div class="kk" style="position: absolute; width: 15%; height: 100%; background: ; right: 0; top: 0;"></div>

</body>


</html>