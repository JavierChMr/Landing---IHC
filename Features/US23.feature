Feature: US23 - Detección de nivel de experiencia

    Como estudiante, quiero que el sistema detecte mi nivel de experiencia para adecuar el contenido mostrado.

    Scenario: Asignación de nivel tras evaluación diagnóstica
      Given que el usuario inicia sesión por primera vez
      When responde preguntas de diagnóstico,
      Then el sistema debe asignar un nivel de experiencia.
      
    Scenario: Adaptación del contenido según el nivel del usuario
      Given que el usuario tiene un nivel asignado
      When accede a una explicación
      Then el contenido debe adaptarse a su nivel. 
    