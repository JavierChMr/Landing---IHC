Feature: US26 - Guardar sesiones de estudio

    Como usuario, quiero guardar mis sesiones de estudio para retomarlas después.

    Scenario: Almacenamiento automático del progreso al cerrar sesión
      Given que el usuario estudia con frecuencia
      When cierra la sesión
      Then el sistema debe guardar su progreso localmente.

    Scenario: Continuación del estudio desde el último punto guardado
      Given que el usuario regresa a la plataforma
      When inicia sesión nuevamente
      Then debe ver la opción de continuar desde donde quedó. 
    