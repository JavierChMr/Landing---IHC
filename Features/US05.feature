Feature: US05 - Historial de peticiones realizadas por el usuario

    Como estudiante, quiero que SaferTech almacene un historial de todas mis peticiones 
    realizadas para poder consultarlas cuando necesite aclarar dudas relacionadas con el código. 

    Scenario: Visualizar historial con peticiones anteriores
      Given que el estudiante ha iniciado sesión y se encuentra en su cuenta personalizada 
      And ha realizado previamente una o más peticiones al sistema SaferTech 
      When el estudiante hace clic en la opción “Historial” ubicada en el menú lateral 
      izquierdo de la pantalla principal 
      Then el sistema de SaferTech muestra una lista cronológica de peticiones en la 
      sección central de la pantalla 
      And el sistema de SaferTech muestra para cada entrada la fecha, hora, contenido de la petición 
      And un botón con la etiqueta “Ver respuesta” alineado a la derecha de cada fila.

    Scenario: Historial vacío
      Given que el estudiante ha iniciado sesión por primera vez y no ha realizado ninguna petición 
      When el estudiante hace clic en la opción “Historial” ubicada en el menú lateral 
      izquierdo de la pantalla principal
      Then el sistema de SaferTech muestra en el área central de la pantalla el mensaje 
      en color gris: “Aún no has realizado ninguna petición” 
      And muestra debajo un botón centrado con el texto “Realizar mi primera pregunta” 
      And al hacer clic en ese botón, el sistema redirige al estudiante a la pantalla 
      principal del asistente para que pueda iniciar una conversación.
    