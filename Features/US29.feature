Feature: US29 - Buscador de palabras clave

    Como estudiante, quiero tener un buscador para encontrar explicaciones por tema o palabra clave.

    Scenario: Búsqueda de explicaciones mediante palabra clave
      Given que el usuario quiere encontrar una explicación
      When escribe una palabra clave en el buscador
      Then debe mostrarse una lista de resultados relevantes.

    Scenario: Apertura de una explicación desde los resultados
      Given que el usuario selecciona un resultado
      When hace clic en él
      Then debe abrirse la explicación correspondiente.
    