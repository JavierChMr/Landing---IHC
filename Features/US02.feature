Feature: US02 - Detección de errores lógicos en un código

    Como estudiante, quiero que SaferTech me indique errores lógicos en mi código 
    para poder identificar con mayor claridad en qué estoy cometiendo un error.

    Scenario: SaferTech identifica correctamente errores lógicos en el código.
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante decide enviar un fragmento de código que contiene varios errores lógicos 
      And el estudiante hace clic en el botón "Enviar mensaje" 
      Then SaferTech analiza el código enviado 
      And SaferTech detecta los errores lógicos presentes en el fragmento 
      And SaferTech muestra un mensaje explicando en qué parte del código ocurre 
      el error y el motivo por el cual se considera un error lógico.

    Scenario: SaferTech no puede analizar el código por errores de sintaxis.
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech,
      When el estudiante envía un fragmento de código con errores de sintaxis que impiden el análisis 
      And el estudiante hace clic en el botón "Enviar mensaje" 
      Then SaferTech muestra un mensaje diciendo: “No puedo chequear la lógica 
      del código propuesto debido a que existen errores de sintaxis. Por favor, corrige 
      la estructura del código y vuelve a intentarlo.”