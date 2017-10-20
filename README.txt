The Assignment includes two folder named 

A. Home Center Online Portal
B. WebSocket

and 

C. ReadMe.txt


1. In part1 of the assignament. (In diagram)  - 

A.I have assumed that the submenus 

				Washing Machines
				Televisions
				Refrigerators
				Air conditioners
				Small home appliances
				Health care appliances
				
comes under electronics and the sub sub menus 

				Sony
				Samsung
				LG
				Hisense
			
comes under television. 

Reason :: Even though the submenus falls under appliances I assumed since the sub sub category highlighted in yellow is shown for television.

B. Regarding implementation of WebSocket server to serve the data dynamically to the HTML5/JS application, 


   2.1 For this I have created a JAVA web project in Eclipse IDE.
   2.2 src/main/java folder - contains the java class files
   2.3 src/main/webapp - HTML/Javascrip, CSS files.
   
   
 Inorder to run the code (B)
 
 1. console - mvn -Djetty.port=8181 jetty:run
 2. Browser - localhost://8181/WebApp.html  ------  On Button Click, a request to javascript function connect() is served.
 5. Console - Socket connection established
 3. Eclipse IDE - Run the ClientMain.java.
 4. Console - Retreives the dynamic data from ClientMain.java 
 5. Browser - The dynamic data is retreived in the web page at id="output".
 
 
Issues : the dynamic data is retreived in console but fails to update in Browser due to some issues. No error detected.

Status - Fixing the issue.
   



				
				