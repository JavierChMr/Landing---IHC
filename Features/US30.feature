Feature: US30 - Calificación del servicio mediante estrellas

    Como estudiante, quiero calificar cada explicación con estrellas para indicar si fue útil.

    Scenario: Registro de calificación mediante estrellas
      Given que el estudiante ha terminado de leer una explicación
      When selecciona una cantidad de estrellas
      Then el sistema debe registrar la calificación.

    Scenario: Restricción al intentar calificar nuevamente una explicación
      Given que el usuario ha calificado una explicación
      When intenta calificar nuevamente
      Then debe mostrarse un mensaje indicando que ya fue evaluada.


      