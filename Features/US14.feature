Feature: US14 - Configuración personalizada del avatar en SaferTech

    Como usuario, quiero personalizar el avatar de SaferTech para que pueda diferenciarlo 
    de otras herramientas de inteligencia artificial (como Deepseek o Copilot).

    Scenario: El usuario personaliza el avatar exitosamente
      Given que el usuario se encuentra en la pantalla de configuración de avatar de su cuenta de SaferTech
      When el usuario selecciona la opción para editar el avatar
      And el usuario escoge un nuevo diseño o imagen de avatar y confirma los cambios realizados
      Then el sistema actualiza el avatar de SaferTech con la personalización seleccionada
      And SaferTech muestra una notificación que dice: “El avatar de la aplicación ha sido 
      actualizado exitosamente.”.

    Scenario: el usuario intenta personalizar el avatar con una imagen no válida
      Given que el usuario se encuentra en la pantalla de configuración del avatar de su cuenta de SaferTech.
      When el usuario selecciona una imagen con un formato no permitido o con un tamaño que excede el límite 
      And el usuario intenta guardar los cambios realizados
      Then el sistema rechaza automáticamente la imagen seleccionada 
      And SaferTech muestra un mensaje de error que dice: “Formato o tamaño de imagen no válido. 
      Ingresa una nueva imagen.”
    