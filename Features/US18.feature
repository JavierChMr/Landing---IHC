Feature: US18 - Resaltado de código

    Como usuario, quiero ver ejemplos de código resaltados para identificar estructuras fácilmente.

    Scenario: Visualización de código con resaltado sintáctico
      Given que el usuario accede a un fragmento de código
      When se muestra en pantalla
      Then debe tener colores diferenciados para palabras clave, variables y comentarios.

    Scenario: Resaltado de errores en el código
      Given que el código contiene errores
      When se muestra en el editor
      Then los errores deben estar resaltados en rojo.
    