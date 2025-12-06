Feature: US21 - Visualización de barra de progreso

    Como estudiante, quiero ver un resumen visual de mis avances académicos para conocer mi progreso.

    Scenario: Actualización de la barra de progreso al completar una explicación
      Given que el estudiante completa una explicación
      When finaliza el contenido,
      Then la barra de progreso debe aumentar su porcentaje.

    Scenario: Visualización del resumen general de avance
      Given que el usuario ha completado varias secciones
      When accede al panel de progreso
      Then debe ver un resumen visual de su avance. 
    