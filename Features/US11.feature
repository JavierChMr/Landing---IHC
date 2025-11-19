Feature: US11 - Sugerencia de fuentes externas para una amplificación del aprendizaje

    Como estudiante, quiero que SaferTech me muestre enlaces de referencias bibliográficas 
    confiables relacionados con los temas explicados, para profundizar mi aprendizaje con fuentes externas.

    Scenario: SaferTech muestra correctamente referencias confiables
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante solicita referencias bibliográficas o enlaces de alta confiabilidad 
      sobre un tema previamente tratado en la conversación 
      And el estudiante hace clic en el botón “Enviar mensaje” 
      Then SaferTech brinda mínimo una referencia bibliográfica o un enlace confiable directamente 
      relacionado con el tema consultado 
      And SaferTech agrega un mensaje que diga: “Aquí tienes algunas fuentes bibliográficas 
      que poseen relación con el tema propuesto y te permiten profundizar a mayor detalle.

    Scenario: No hay suficiente información para sugerir referencias relevantes
      Given que el estudiante se encuentra en la pantalla de temas explicados dentro de SaferTech 
      When el estudiante solicita referencias externas para profundizar en un tema 
      And SaferTech detecta que aún no se ha explicado ningún tema relacionado 
      Then SaferTech muestra un mensaje que dice: “Los datos brindados son insuficientes 
      para ofrecerte referencias confiables. Por favor revisa más contenido o completa actividades 
      relacionadas con este tema”. 

    