Feature: US03 - Explicación visual de conceptos mediante diagramas de flujo

    Como estudiante, quiero que SaferTech pueda explicarme conceptos relacionados con programación 
    utilizando gráficos de diagramas de flujo para que mi aprendizaje sea más didáctico.

    Scenario: SaferTech me brinda gráficos bien elaborados.
      Given que el estudiante se encuentra en la pantalla de chat de SaferTech 
      When el estudiante solicita una explicación con detalles visuales referente a temas de programación,
      Then SaferTech brindará un gráfico de diagrama de flujo con explicaciones de alto detalle 
      que ayude en el aprendizaje del estudiante. 
      And SaferTech mostrará el siguiente mensaje: “Aquí te brindo un gráfico de diagrama de 
      flujo adjuntada con una  explicación precisa que resolverá tus dudas.” 

    Scenario: SaferTech no brinda ningún gráfico.
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech
      When el estudiante solicita una explicación incoherente con respecto a temas de programación
      Then SaferTech no genera ningún gráfico a causa de la falta de información 
      proporcionada por el estudiante 
      And SaferTech mostrará el siguiente mensaje: “No he podido comprender bien tu petición. 
      Le solicito que  vuelva a introducir su petición de manera más precisa, por favor.”
