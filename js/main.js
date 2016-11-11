function sendMessage(){
	//Presionar sobre cualquier hijo de ul ("w-recent-chats") y que me muestre todos los mensajes que se han escrito de ese div en la section(w-chat-panel)
	/*var user_chat = document.getElementsByClassName("user-chat");
	var chat_panel = document.getElementsByClassName("w-chat-panel");
	var user_messages = document.getElementsByClassName("w-message-text");*/

	function chatToPanel(){
		//Limpiar la section w-contacts w-messages
		var clean_section_header = document.getElementsByClassName("w-chat-messages");
		var clean_section_panel = document.getElementsByClassName("w-chat-panel");

		clean_section_header.innerHTML = "";
		clean_section_panel.innerHTML= "";
		//Debe aparecer en el header de la section(w-contacts) un div con la foto de perfil (img), el nombre de usuario (h4) y lista de usuarios(ul), y el clip
		var avatar = document.getElementsByClassName("user-chat");
		for(var i=0; i < avatar.length ;i++){
			//Al elemento que le hice click, se me debe tomar esa imagen y ese nombre
			avatar[i].onclick = function(){
				
			}

		}

		//En la section (w-chat-panel) deben agregarse al id="chat" los divs ("message in y message out")
		for(var i=0; i < ;i++){

		}


		chat_panel.appendChild(user_messages);

	}

	//Debe poder escribir en el input de texto (El texto en placeholder debe desaparecer cuando se escribe en él).	
	var container_chat = document.getElementById("chat");
	//1er Div
	var container_message_input = document.createElement("div");
	container_message_input.className = "w-message-out";
	//2do Div
	var container_text = document.createElement("div");
	//variables texto traído desde el input a un párrafo
	var p_input = document.createElement("p");
	var input_back = document.getElementById("mensajes").value;
	var input_back_node= document.createTextNode(input_back);
	//variables time
	var container_time = document.createElement("div");
	var time = document.createTextNode("11:18");
	container_time.className = "time";		
	//elemento ícono (micrófono) al que hay que hacer click
	var send_input = document.getElementById("button-send");

	send_input.addEventListener("click", function(){
		p_input.appendChild(input_back_node);
		container_text.appendChild(p_input);
		container_time.appendChild(time);
		container_text.appendChild(container_time);
		container_message_input.appendChild(container_text);
		container_chat.appendChild(container_message_input);
	})		
}
sendMessage();
