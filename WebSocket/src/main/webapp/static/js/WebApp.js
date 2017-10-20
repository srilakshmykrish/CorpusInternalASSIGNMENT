

	var webSocket;
	var output = document.getElementById("output");
	var connectBtn = document.getElementById("connectBtn");
	var sendBtn = document.getElementById("sendBtn");


	function connect() {
		if (webSocket !== undefined
				&& webSocket.readyState !== WebSocket.CLOSED) {
			return;
		}
		webSocket = new WebSocket("ws://localhost:8181/url");

		webSocket.onopen = function(event) {
			updateOutput("Connected!");
			connectBtn.disabled = true;
			sendBtn.disabled = false;

		};

		webSocket.onmessage = function(event) {
			updateOutput(event.data);
			document.getElementById("output").html=event.data;
		};

		webSocket.onclose = function(event) {
			updateOutput("Connection Closed");
			connectBtn.disabled = false;
			sendBtn.disabled = true;
		};
	}

	function send() {
		var text = document.getElementById("output").value;
		webSocket.send(text);
	}

	function closeSocket() {
		webSocket.close();
	}

	function updateOutput(text) {
		document.getElementById("output").value += "<br/>" + text;
	}

