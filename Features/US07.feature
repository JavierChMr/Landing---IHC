Feature: US07 - Traducción de código a diversos lenguajes de programación

    Como usuario que programa en Java, quiero que SaferTech sea capaz de traducir 
    código de otros lenguajes de programación (como Phyton o C++) a Java para que las 
    explicaciones se adapten a mis preferencias. 

    Scenario: SaferTech adapta código funcional a otro lenguaje de programación exitosamente y brinda una explicación confiable.
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech
      When el estudiante le escriba a SaferTech para pedirle que transforme 
      el lenguaje de programación del código propuesto a uno de su preferencia
      And el estudiante hace clic en el botón “Enviar mensaje”
      Then SaferTech genera un código confiable y funcional con el lenguaje propuesto 
      y una breve explicación de dicho código
      And SaferTech mostrará un mensaje en el chat diciendo “Aquí tienes el código adaptado 
      al lenguaje de programación propuesto.”. 

    Scenario: SaferTech no encuentra el lenguaje de programación propuesto. 
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante le escribe a SaferTech para pedirle de manera incoherente 
      que transforme el lenguaje de programación del código propuesto a uno no reconocible 
      And el estudiante hace clic en el botón “Enviar mensaje” 
      Then SaferTech mostrará un mensaje en el chat diciendo: “Lo siento, no he podido 
      reconocer el lenguaje de programación propuesto. Por favor, introduzca un lenguaje de programación existente.”
    