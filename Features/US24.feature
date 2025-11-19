Feature: US24 - Explicaciones interactivas con botones

    Como usuario, quiero recibir explicaciones interactivas con botones para expandir los detalles.

    Scenario: Expansión de contenido
      Given que el estudiante visualiza una explicación
      When hace clic en “ver más”
      Then debe desplegarse contenido adicional.

    Scenario: Contracción del contenido 
      Given que el usuario ha expandido una sección
      When hace clic en “ver menos”, 
      Then el contenido debe ocultarse nuevamente. 
    