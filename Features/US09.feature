Feature: US09 - Comparación simultánea de varios fragmentos de código

    Como estudiante, quiero que SaferTech me permita comparar dos fragmentos de código, 
    para identificar cuál sigue mejores prácticas de codificación.

    Scenario: SaferTech compara correctamente dos fragmentos de código.
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante procede a introducir dos fragmentos de código y solicita una comparación 
      And el estudiante hace clic en el botón “Enviar mensaje” 
      Then SaferTech analiza ambos fragmentos 
      And SaferTech compara los fragmentos con base en eficiencia y buenas prácticas de programación 
      And SaferTech muestra un mensaje diciendo: “Análisis de comparación terminada. 
      El segundo fragmento es  considerado el más eficiente y sigue mejores prácticas 
      por estas razones: [explicación].”. 

    Scenario: SaferTech falla en procesar la comparación por error de entrada.
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante envía uno o ambos fragmentos con errores de sintaxis graves o formatos inválidos
      And el estudiante hace clic en el botón “Enviar mensaje” 
      Then SaferTech muestra un mensaje que dice: “Error al momento de comparar tus fragmentos 
      de código. Por favor, revisa si el código no posee errores de sintaxis e intenta nuevamente.”

    