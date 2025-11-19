Feature: US25 - Sugerencia según los errores frecuentes

    Como estudiante, quiero que el asistente me sugiera temas relacionados según 
    mis errores frecuentes para corregirlos.
    
    Scenario: Generación de sugerencias basadas en errores repetidos
      Given que el sistema detecta errores repetidos
      When el estudiante termina un ejercicio,
      Then debe recibir sugerencias de temas relacionados.
    
    Scenario: Redirección a contenido educativo desde una sugerencia
      Given que el usuario recibe una sugerencia,
      When hace clic en ella
      Then debe redirigirlo a una explicación o mini-lección.
    