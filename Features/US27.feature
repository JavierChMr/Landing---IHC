Feature: US27 - Animación explicativas

    Como estudiante, quiero ver animaciones explicando cómo funciona un fragmento de 
    código para mejorar mi comprensión.

    Scenario: Visualización paso a paso mediante animación explicativa
      Given que el estudiante accede a una explicación animada
      When inicia la animación
      Then debe mostrarse paso a paso cómo funciona el código

    Scenario: Reproducción nuevamente de la animación
      Given que el usuario quiere repetir la animación
      When presiona el botón de “reproducir”
      Then la animación debe reiniciarse desde el principio. 
    