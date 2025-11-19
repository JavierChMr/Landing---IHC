Feature: US15 - Interacción mediante comando de voz 

    Como estudiante, quiero interactuar con SaferTech mediante comandos de voz para poder 
    usar el asistente sin necesidad de escribir.

    Scenario: El estudiante activa el reconocimiento por voz
      Given que el estudiante se encuentra en la pantalla principal de SaferTech
      When el estudiante procede a activar el comando de voz mediante un botón de micrófono 
      And el estudiante le habla con fuerza y claridad a SaferTech. 
      Then el sistema activa automáticamente el reconocimiento de voz 
      And el sistema de SaferTech escucha atentamente lo que pide el estudiante 
      And el sistema elabora su respuesta concisa en base a la información proporcionada

    Scenario: El estudiante activa el reconocimiento de voz, pero el sistema no logra interpretar el diálogo.
      Given que el estudiante se encuentra en la pantalla principal de SaferTech
      When el estudiante activa el comando de voz mediante un botón de micrófono
      And el estudiante no le habla con claridad y fluidez a SaferTech 
      Then el sistema activa el comando de voz 
      And el sistema no logra interpretar con total exactitud lo que menciona el estudiante.
      And el sistema le envía un mensaje al estudiante: “Perdona, no he logrado comprender 
      tu mensaje. Por favor, verifica tu sistema de audio o escribe tu petición directamente.”

    