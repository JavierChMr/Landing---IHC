Feature: US16 - Código dividido en bloques visuales

    Como estudiante, quiero ver el código dividido en bloques visuales para entender mejor cada parte del programa.

    Scenario: Visualización del código en bloques estructurados
      Given que el estudiante accede a una explicación de código,
      When se muestra el contenido en la interfaz,
      Then el código debe estar dividido en bloques visuales con etiquetas que indiquen su función.

    Scenario: Descripción emergente al interactuar con un bloque
      Given que el usuario interactúa con un bloque
      When pasa el cursor sobre él
      Then debe mostrarse una breve descripción emergente del bloque. 