Feature: US01 - Explicación paso a paso de un código

    Como estudiante, quiero que SaferTech me brinde una explicación  paso a paso del código 
    compartido para aprender cómo funciona el programa de forma estructurada.

    Scenario: SaferTech explica el código paso a paso repartiendolo por bloques de programación
      Given el estudiante se encuentra en la pantalla de chat de SaferTech
      When el estudiante digita a  SaferTech compartiendo un fragmento de código válido 
      y solicitando una explicación paso a paso
      And el estudiante hace click en el botón de “Enviar mensaje”
      Then SaferTech muestra una explicación secuencial del código, dividiéndolo 
      por bloques de programación con una descripción debajo de cada bloque 
      And SaferTech muestra un mensaje en el chat diciendo: “Procedo a brindarte 
      una  explicación paso a paso del código que has compartido.”.
    
    Scenario: SaferTech no proporciona explicación paso a paso por limitaciones del modelo 
      Given que el estudiante se encuentra en la pantalla de chat de SaferTech
      When el estudiante le escribe a SaferTech y le comparte un código válido 
      que utiliza funciones o librerías muy poco conocidas 
      And el estudiante hace clic en el botón “Enviar mensaje” 
      Then  SaferTech no muestra una explicación paso a paso del código
      And muestra un mensaje en el chat diciendo: “Lo siento, me es imposible 
      explicarte este código detalladamente debido a la  complejidad o falta de contexto que posee.”  