package com.web.sock.server;

import javax.servlet.annotation.WebServlet;

import org.eclipse.jetty.websocket.servlet.WebSocketServlet;
import org.eclipse.jetty.websocket.servlet.WebSocketServletFactory;

@WebServlet(urlPatterns = "/url")
public class ToUpperWebSocketServlet extends WebSocketServlet {

	@Override
	public void configure(WebSocketServletFactory factory) {

		factory.register(ServerSocket.class);

	}

}
