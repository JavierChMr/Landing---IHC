Feature: US13 - Inicio rápido de la herramienta mediante un clic en icono

    Como usuario, quiero poder activar SaferTech haciendo clic sobre un ícono visible 
    en pantalla para elaborar una consulta sobre el código que estoy trabajando.

    Scenario: Activación exitosa del ícono
      Given que el usuario está programando 
      And el ícono de SaferTech integrado se encuentra a simple vista 
      When el usuario hace clic sobre el ícono de SaferTech
      Then SaferTech abre de manera automática su sistema 
      And SaferTech permite al usuario escribir o dictar una consulta.

    Scenario: Ícono no visible por error de interfaz
      Given que el usuario ha iniciado sesión con su cuenta
      And el usuario espera ver el ícono de SaferTech integrado 
      When el usuario entra al entorno de trabajo 
      And el ícono de SaferTech no aparece
      Then el sistema muestra una alerta o permite recargar la interfaz
      And muestra una ventana que dice “Error detectado. Se procederá a informar a soporte técnico.

    