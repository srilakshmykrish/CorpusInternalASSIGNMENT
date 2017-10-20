package com.web.sock.client;

import java.net.URI;

import org.eclipse.jetty.websocket.client.ClientUpgradeRequest;
import org.eclipse.jetty.websocket.client.WebSocketClient;

public class WebSocketClientMain {

	public static void main(String[] args) {
		String dest = "ws://localhost:8181/urlto";
		WebSocketClient client = new WebSocketClient();
		try {

			ClientSocket socket = new ClientSocket();
			client.start();
			URI echoUri = new URI(dest);
			ClientUpgradeRequest request = new ClientUpgradeRequest();
			client.connect(socket, echoUri, request);
			socket.getLatch().await();
			socket.sendMessage("Sony");
			socket.sendMessage("LG");
			socket.sendMessage("Hisense");
			socket.sendMessage("Samsung");
			Thread.sleep(10000l);

		} catch (Throwable t) {
			t.printStackTrace();
		} finally {
			try {
				client.stop();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
}
