Feature: US04 - Guardado de fragmentos de código como favoritos

    Como estudiante, quiero que SaferTech me permita guardar fragmentos de código 
    como favoritos, para acceder de manera fácil a los que considero más útiles. 

    Scenario: El estudiante guarda correctamente un fragmento de código como favorito
      Given que el estudiante visualiza un fragmento de código generado por SaferTech en el chat. 
      When el estudiante hace clic en el botón o ícono de “Guardar como favorito” 
      que se ubica junto al fragmento de código 
      And SaferTech procesa la solicitud sin detectar algún error. 
      Then SaferTech guarda el fragmento de código en la sección de favoritos del estudiante
      And SaferTech muestra un mensaje de confirmación que dice: “El fragmento 
      seleccionado ha sido guardado en tu lista de favoritos exitosamente.”

    Scenario: SaferTech no permite guardar el fragmento como favorito 
      Given que el estudiante intenta guardar un fragmento de código como favorito. 
      When ocurre un error técnico en SaferTech o una falla de conexión.
      And SaferTech no puede culminar la acción de guardado
      Then el fragmento no se guarda  en la sección de favoritos
      And SaferTech muestra un mensaje de error que dice: “Error. Su fragmento 
      de código no pudo guardarse correctamente. Inténtelo más tarde”.

    