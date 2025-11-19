Feature: US06 - Retroalimentación personalizada sobre el progreso en programación

    Como estudiante, quiero que SaferTech me brinde retroalimentación personalizada 
    sobre mis avances en programación, para identificar qué conceptos de programación me falta dominar

    Scenario: SaferTech proporciona retroalimentación personalizada correctamente
      Given que el estudiante se encuentra en la pantalla de seguimiento de progreso dentro de SaferTech
      When el estudiante solicita una retroalimentación completa sobre sus avances 
      recientes en ejercicios de programación 
      And el estudiante ha completado al menos una actividad previamente evaluada 
      Then SaferTech genera un informe con retroalimentación personalizada sobre el desempeño del estudiante
      And SaferTech muestra el mensaje: “Aquí te brindo una retroalimentación completa 
      y personalizada basada en tus avances más recientes.”.

    Scenario: SaferTech genera una retroalimentación imprecisa o genérica 
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      Cuando el estudiante solicita referencias bibliográficas o enlaces confiables 
      sin haber detallado suficiente contexto previo sobre el tema a tratar
      And el estudiante hace clic en el botón “Enviar mensaje” 
      Entonces SaferTech responde con enlaces o referencias poco relevantes o desconectadas del tema real 
      And SaferTech muestra un mensaje que diga: “Aquí te muestro algunas fuentes 
      que podrían ayudarte, pero te recomiendo ser más específico la próxima vez.” 
    