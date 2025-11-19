Feature: US08 - Detección automática de un lenguaje de programación

    Como estudiante, quiero que SaferTech identifique automáticamente el lenguaje de 
    programación empleado en el código escrito para recibir respuestas adaptadas al lenguaje que estoy utilizando.

    Scenario: SaferTech identifica correctamente el lenguaje de programación
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech
      When el estudiante escribe un fragmento de código sin indicar el lenguaje de programación 
      And el estudiante hace clic en el botón "Enviar mensaje" 
      Then SaferTech analiza automáticamente el fragmento de código
      And SaferTech identifica correctamente el lenguaje de programación
      And SaferTech muestra una explicación del código adecuada al lenguaje identificado

    Scenario: SaferTech no puede identificar con certeza el lenguaje de programación 
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech
      When el estudiante envía un fragmento de código que es ambiguo o puede pertenecer a 
      múltiples lenguajes de programación 
      And el estudiante hace clic en el botón "Enviar mensaje"
      Then SaferTech muestra un mensaje indicando que no puede identificar con certeza el lenguaje de programación 
      And SaferTech solicita al estudiante que indique el lenguaje de forma manual para continuar con la explicación

    