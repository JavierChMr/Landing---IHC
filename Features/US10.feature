Feature: US10 - Sugerencia de ejercicios según fragmentos de código no comprendidos

    Como estudiante, quiero que SaferTech me sugiera ejercicios relacionados con fragmentos 
    de código que no entiendo para que pueda reforzar mi aprendizaje.

    Scenario: SaferTech sugiere ejercicios correctamente
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante escribe un fragmento de código que le cuesta entender  y solicita 
      sugerencias para practicar 
      And el estudiante hace clic en el botón "Enviar mensaje" 
      Then SaferTech analiza a detalle el fragmento de código 
      And SaferTech brinda una lista de ejercicios relacionados con el contenido del fragmento 
      And SaferTech presenta un mensaje que dice: "Aquí te propongo algunos ejercicios que 
      te ayudarán a practicar y reforzar este tema.".

    Scenario: SaferTech falla al procesar la solicitud 
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante envía un fragmento de código solicitando ejercicios 
      And SaferTech experimenta una falla técnica o una interrupción en la conexión 
      Then SaferTech muestra un mensaje en el chat que dice: "Lo siento, ocurrió un error 
      al procesar tu solicitud. Intenta nuevamente más tarde."
    