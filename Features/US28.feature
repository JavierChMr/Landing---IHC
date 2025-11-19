Feature: US28 - Retroalimentación rápida 

    Como usuario, quiero recibir retroalimentación rápida al completar un ejercicio 
    para detectar posibles errores y puntos de mejora.

    Scenario: Notificación inmediata del resultado del ejercicio
      Given que el estudiante completa un ejercicio 
      When envía su respuesta
      Then debe recibir un mensaje indicando si fue correcta o incorrecta.

    Scenario: Explicación del resultado obtenido
      Given que el usuario recibe retroalimentación
      When revisa el resultado
      Then debe ver una explicación del porqué de su error o acierto. 
    