Feature: US19 - Notificación Visual

    Como estudiante, quiero recibir una notificación cuando una explicación esté lista, para reforzar mi aprendizaje.

    Scenario: Notificación emergente al finalizar una explicación
      Given que el sistema genera una nueva explicación
      When esta esté lista
      Then debe aparecer una notificación emergente en la esquina inferior.

    Scenario: Redirección a la explicación desde la notificación
      Given que el usuario recibe una notificación
      When hace clic en ella
      Then debe redirigirlo a la explicación correspondiente.
    