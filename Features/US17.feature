Feature: US17 - Modo Claro/Oscuro

    Como usuario, quiero cambiar entre modo claro y oscuro para estudiar con mayor comodidad.

    Scenario: Activación del modo oscuro
      Given que el usuario está en la plataforma
      When presiona el botón de modo oscuro
      Then el fondo y los textos deben cambiar a colores oscuros.

    Scenario: Persistencia del modo oscuro tras recargar la página
      Given que el usuario ha activado el modo oscuro
      When recarga la página
      Then el modo oscuro debe mantenerse activo. 
    