Feature: US12 - Ajuste de contenido mediante intereses y conocimientos del usuario

    Como usuario, quiero seleccionar mi área académica, nivel de conocimiento y temas 
    de interés para que SaferTech me proporcione respuestas, ejercicios y materiales adaptados a 
    los datos que he proporcionado.

    Scenario: El sistema proporciona materiales completamente adaptados correctamente
      Given que el usuario ha seleccionado su área académica, nivel de conocimiento y 
      temas de interés en la interfaz de SaferTech
      When el usuario hace clic en el botón de "Enviar selección" 
      Then SaferTech proporciona respuestas, ejercicios y materiales completamente adaptados a 
      los datos proporcionados por el usuario
      And el usuario puede acceder fácilmente a los materiales que se ajustan a su 
      área académica y nivel de conocimiento.

    Scenario: El sistema no proporciona materiales adecuados 
      Given que el usuario ha seleccionado su área académica, nivel de conocimiento y temas de 
      interés en la interfaz de SaferTech
      When el usuario hace clic en el botón de "Enviar selección" 
      Then SaferTech proporciona respuestas, ejercicios y materiales que no se ajustan ni relacionan 
      en lo  absoluto a los datos proporcionados 
      And el usuario es impedido a acceder a materiales útiles ni relacionados con su área académica 
      o nivel de conocimiento.

    