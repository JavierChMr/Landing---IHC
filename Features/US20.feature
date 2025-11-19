Feature: US20 - Seccion de preguntas frecuentes

    Como usuario, quiero acceder a una sección de preguntas frecuentes para resolver dudas comunes.

    Scenario: Despliegue de respuesta al seleccionar una pregunta
      Given que el usuario accede a la sección de preguntas frecuentes
      When hace clic en una pregunta
      Then debe desplegarse la respuesta debajo.

    Scenario: Búsqueda de preguntas mediante palabra clave
      Given que el usuario busca una duda específica
      When escribe una palabra clave en el buscador
      Then debe filtrarse la lista de preguntas relacionadas. 
    