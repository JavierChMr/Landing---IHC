Feature: US22 - Diseño Responsivo

    Como usuario, quiero que el sitio sea responsivo para usarlo desde mi celular o tablet.

    Scenario: Adaptación del contenido en dispositivos móviles
      Given que el usuario accede desde un celular
      When navega por la plataforma
      Then los elementos deben ajustarse al ancho de pantalla.

    Scenario: Reorganización del contenido al cambiar la orientación
      Given que el usuario cambia la orientación del dispositivo,
      When pasa de vertical a horizontal,
      Then el contenido debe reorganizarse sin perder funcionalidad.
    