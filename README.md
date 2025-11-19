## Features List

Este documento contiene el contenido de todos los archivos de features del sistema SaferTech.

---

### US01.feature

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

---

### US02.feature

Feature: US02 - Detección de errores lógicos en un código

    Como estudiante, quiero que SaferTech me indique errores lógicos en mi código 
    para poder identificar con mayor claridad en qué estoy cometiendo un error.

    Scenario: SaferTech identifica correctamente errores lógicos en el código.
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante decide enviar un fragmento de código que contiene varios errores lógicos 
      And el estudiante hace clic en el botón "Enviar mensaje" 
      Then SaferTech analiza el código enviado 
      And SaferTech detecta los errores lógicos presentes en el fragmento 
      And SaferTech muestra un mensaje explicando en qué parte del código ocurre 
      el error y el motivo por el cual se considera un error lógico.

    Scenario: SaferTech no puede analizar el código por errores de sintaxis.
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech,
      When el estudiante envía un fragmento de código con errores de sintaxis que impiden el análisis 
      And el estudiante hace clic en el botón "Enviar mensaje" 
      Then SaferTech muestra un mensaje diciendo: “No puedo chequear la lógica 
      del código propuesto debido a que existen errores de sintaxis. Por favor, corrige 
      la estructura del código y vuelve a intentarlo.”

---

### US03.feature

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

---

### US04.feature

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

---

### US05.feature

Feature: US05 - Historial de peticiones realizadas por el usuario

    Como estudiante, quiero que SaferTech almacene un historial de todas mis peticiones 
    realizadas para poder consultarlas cuando necesite aclarar dudas relacionadas con el código. 

    Scenario: Visualizar historial con peticiones anteriores
      Given que el estudiante ha iniciado sesión y se encuentra en su cuenta personalizada 
      And ha realizado previamente una o más peticiones al sistema SaferTech 
      When el estudiante hace clic en la opción “Historial” ubicada en el menú lateral 
      izquierdo de la pantalla principal 
      Then el sistema de SaferTech muestra una lista cronológica de peticiones en la 
      sección central de la pantalla 
      And el sistema de SaferTech muestra para cada entrada la fecha, hora, contenido de la petición 
      And un botón con la etiqueta “Ver respuesta” alineado a la derecha de cada fila.

    Scenario: Historial vacío
      Given que el estudiante ha iniciado sesión por primera vez y no ha realizado ninguna petición 
      When el estudiante hace clic en la opción “Historial” ubicada en el menú lateral 
      izquierdo de la pantalla principal
      Then el sistema de SaferTech muestra en el área central de la pantalla el mensaje 
      en color gris: “Aún no has realizado ninguna petición” 
      And muestra debajo un botón centrado con el texto “Realizar mi primera pregunta” 
      And al hacer clic en ese botón, el sistema redirige al estudiante a la pantalla 
      principal del asistente para que pueda iniciar una conversación.

---

### US06.feature

Feature: US06 - Retroalimentación personalizada sobre el progreso en programación

    Como estudiante, quiero que SaferTech me brinde retroalimentación personalizada 
    sobre mis avances en programación, para identificar qué conceptos de programación me falta dominar

    Scenario: SaferTech proporciona retroalimentación personalizada correctamente
      Given que el estudiante se encuentra en la pantalla de seguimiento de progreso dentro de SaferTech
      When el estudiante solicita una retroalimentación completa sobre sus avances 
      recientes en ejercicios de programación 
      And el estudiante ha completado al menos una actividad previamente evaluada 
      Then SaferTech genera un informe con retroalimentación personalizada sobre el desempeño del estudiante
      And SaferTech muestra el mensaje: “Aquí te brindo una retroalimentación completa 
      y personalizada basada en tus avances más recientes.”.

    Scenario: SaferTech genera una retroalimentación imprecisa o genérica 
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      Cuando el estudiante solicita referencias bibliográficas o enlaces confiables 
      sin haber detallado suficiente contexto previo sobre el tema a tratar
      And el estudiante hace clic en el botón “Enviar mensaje” 
      Entonces SaferTech responde con enlaces o referencias poco relevantes o desconectadas del tema real 
      And SaferTech muestra un mensaje que diga: “Aquí te muestro algunas fuentes 
      que podrían ayudarte, pero te recomiendo ser más específico la próxima vez.”

---

### US07.feature

Feature: US07 - Traducción de código a diversos lenguajes de programación

    Como usuario que programa en Java, quiero que SaferTech sea capaz de traducir 
    código de otros lenguajes de programación (como Phyton o C++) a Java para que las 
    explicaciones se adapten a mis preferencias. 

    Scenario: SaferTech adapta código funcional a otro lenguaje de programación exitosamente y brinda una explicación confiable.
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech
      When el estudiante le escriba a SaferTech para pedirle que transforme 
      el lenguaje de programación del código propuesto a uno de su preferencia
      And el estudiante hace clic en el botón “Enviar mensaje”
      Then SaferTech genera un código confiable y funcional con el lenguaje propuesto 
      y una breve explicación de dicho código
      And SaferTech mostrará un mensaje en el chat diciendo “Aquí tienes el código adaptado 
      al lenguaje de programación propuesto.”. 

    Scenario: SaferTech no encuentra el lenguaje de programación propuesto. 
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante le escribe a SaferTech para pedirle de manera incoherente 
      que transforme el lenguaje de programación del código propuesto a uno no reconocible 
      And el estudiante hace clic en el botón “Enviar mensaje” 
      Then SaferTech mostrará un mensaje en el chat diciendo: “Lo siento, no he podido 
      reconocer el lenguaje de programación propuesto. Por favor, introduzca un lenguaje de programación existente.”

---

### US08.feature

Feature: US08 - Detección automática de un lenguaje de programación

    Como estudiante, quiero que SaferTech identifique automáticamente el lenguaje de 
    programación empleado en el código escrito para recibir respuestas adaptadas al lenguaje que estoy utilizando.

    Scenario: SaferTech identifica correctamente el lenguaje de programación
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech
      When el estudiante escribe un fragmento de código sin indicar el lenguaje de programación 
      And el estudiante hace clic en el botón "Enviar mensaje" 
      Then SaferTech analiza automáticamente el fragmento de código
      And SaferTech identifica correctamente el lenguaje de programación
      And SaferTech muestra una explicación del código adecuada al lenguaje identificado

    Scenario: SaferTech no puede identificar con certeza el lenguaje de programación 
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech
      When el estudiante envía un fragmento de código que es ambiguo o puede pertenecer a 
      múltiples lenguajes de programación 
      And el estudiante hace clic en el botón "Enviar mensaje"
      Then SaferTech muestra un mensaje indicando que no puede identificar con certeza el lenguaje de programación 
      And SaferTech solicita al estudiante que indique el lenguaje de forma manual para continuar con la explicación

---

### US09.feature

Feature: US09 - Comparación simultánea de varios fragmentos de código

    Como estudiante, quiero que SaferTech me permita comparar dos fragmentos de código, 
    para identificar cuál sigue mejores prácticas de codificación.

    Scenario: SaferTech compara correctamente dos fragmentos de código.
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante procede a introducir dos fragmentos de código y solicita una comparación 
      And el estudiante hace clic en el botón “Enviar mensaje” 
      Then SaferTech analiza ambos fragmentos 
      And SaferTech compara los fragmentos con base en eficiencia y buenas prácticas de programación 
      And SaferTech muestra un mensaje diciendo: “Análisis de comparación terminada. 
      El segundo fragmento es  considerado el más eficiente y sigue mejores prácticas 
      por estas razones: [explicación].”. 

    Scenario: SaferTech falla en procesar la comparación por error de entrada.
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante envía uno o ambos fragmentos con errores de sintaxis graves o formatos inválidos
      And el estudiante hace clic en el botón “Enviar mensaje” 
      Then SaferTech muestra un mensaje que dice: “Error al momento de comparar tus fragmentos 
      de código. Por favor, revisa si el código no posee errores de sintaxis e intenta nuevamente.”

---

### US10.feature

Feature: US10 - Sugerencia de ejercicios según fragmentos de código no comprendidos

    Como estudiante, quiero que SaferTech me sugiera ejercicios relacionados con fragmentos 
    de código que no entiendo para que pueda reforzar mi aprendizaje.

    Scenario: SaferTech sugiere ejercicios correctamente
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante escribe un fragmento de código que le cuesta entender  y solicita 
      sugerencias para practicar 
      And el estudiante hace clic en el botón "Enviar mensaje" 
      Then SaferTech analiza a detalle el fragmento de código 
      And SaferTech brinda una lista de ejercicios relacionados con el contenido del fragmento 
      And SaferTech presenta un mensaje que dice: "Aquí te propongo algunos ejercicios que 
      te ayudarán a practicar y reforzar este tema.".

    Scenario: SaferTech falla al procesar la solicitud 
      Given que el estudiante se encuentra en la pantalla de chat con SaferTech 
      When el estudiante envía un fragmento de código solicitando ejercicios 
      And SaferTech experimenta una falla técnica o una interrupción en la conexión 
      Then SaferTech muestra un mensaje en el chat que dice: "Lo siento, ocurrió un error 
      al procesar tu solicitud. Intenta nuevamente más tarde."

---

### US11.feature

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

---

### US12.feature

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

---

### US13.feature

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

---

### US14.feature

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

---

### US15.feature

Feature: US15 - Interacción mediante comando de voz 

    Como estudiante, quiero interactuar con SaferTech mediante comandos de voz para poder 
    usar el asistente sin necesidad de escribir.

    Scenario: El estudiante activa el reconocimiento por voz
      Given que el estudiante se encuentra en la pantalla principal de SaferTech
      When el estudiante procede a activar el comando de voz mediante un botón de micrófono 
      And el estudiante le habla con fuerza y claridad a SaferTech. 
      Then el sistema activa automáticamente el reconocimiento de voz 
      And el sistema de SaferTech escucha atentamente lo que pide el estudiante 
      And el sistema elabora su respuesta concisa en base a la información proporcionada

    Scenario: El estudiante activa el reconocimiento de voz, pero el sistema no logra interpretar el diálogo.
      Given que el estudiante se encuentra en la pantalla principal de SaferTech
      When el estudiante activa el comando de voz mediante un botón de micrófono
      And el estudiante no le habla con claridad y fluidez a SaferTech 
      Then el sistema activa el comando de voz 
      And el sistema no logra interpretar con total exactitud lo que menciona el estudiante.
      And el sistema le envía un mensaje al estudiante: “Perdona, no he logrado comprender 
      tu mensaje. Por favor, verifica tu sistema de audio o escribe tu petición directamente.”

---

### US16.feature

Feature: US16 - Código dividido en bloques visuales

    Como estudiante, quiero ver el código dividido en bloques visuales para entender mejor cada parte del programa.

    Scenario: Visualización del código en bloques estructurados
      Given que el estudiante accede a una explicación de código,
      When se muestra el contenido en la interfaz,
      Then el código debe estar dividido en bloques visuales con etiquetas que indiquen su función.

    Scenario: Descripción emergente al interactuar con un bloque
      Given que el usuario interactúa con un bloque
      When pasa el cursor sobre él
      Then debe mostrarse una breve descripción emergente del bloque.

---

### US17.feature

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

---

### US18.feature

Feature: US18 - Resaltado de código

    Como usuario, quiero ver ejemplos de código resaltados para identificar estructuras fácilmente.

    Scenario: Visualización de código con resaltado sintáctico
      Given que el usuario accede a un fragmento de código
      When se muestra en pantalla
      Then debe tener colores diferenciados para palabras clave, variables y comentarios.

    Scenario: Resaltado de errores en el código
      Given que el código contiene errores
      When se muestra en el editor
      Then los errores deben estar resaltados en rojo.

---

### US19.feature

Feature: US19 - Notificación Visual

    Como estudiante, quiero recibir una notificación cuando una explicación esté lista, para reforzar mi aprendizaje.

    Scenario: Notificación emergente al finalizar una explicación
      Given que el sistema genera una nueva explicación
      When esta esté lista
      Then debe aparecer una notificación emergente en la esquina inferior.

    Scenario: Redirección a la explicación desde la notificación
      Given que el usuario recibe una notificación
      When hace clic en ella
      Then debe redirigirlo a la explicación correspondiente.

---

### US20.feature

Feature: US20 - Seccion de preguntas frecuentes

    Como usuario, quiero acceder a una sección de preguntas frecuentes para resolver dudas comunes.

    Scenario: Despliegue de respuesta al seleccionar una pregunta
      Given que el usuario accede a la sección de preguntas frecuentes
      When hace clic en una pregunta
      Then debe desplegarse la respuesta debajo.

    Scenario: Búsqueda de preguntas mediante palabra clave
      Given que el usuario busca una duda específica
      When escribe una palabra clave en el buscador
      Then debe filtrarse la lista de preguntas relacionadas.

---

### US21.feature

Feature: US21 - Visualización de barra de progreso

    Como estudiante, quiero ver un resumen visual de mis avances académicos para conocer mi progreso.

    Scenario: Actualización de la barra de progreso al completar una explicación
      Given que el estudiante completa una explicación
      When finaliza el contenido,
      Then la barra de progreso debe aumentar su porcentaje.

    Scenario: Visualización del resumen general de avance
      Given que el usuario ha completado varias secciones
      When accede al panel de progreso
      Then debe ver un resumen visual de su avance.

---

### US22.feature

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

---

### US23.feature

Feature: US23 - Detección de nivel de experiencia

    Como estudiante, quiero que el sistema detecte mi nivel de experiencia para adecuar el contenido mostrado.

    Scenario: Asignación de nivel tras evaluación diagnóstica
      Given que el usuario inicia sesión por primera vez
      When responde preguntas de diagnóstico,
      Then el sistema debe asignar un nivel de experiencia.
      
    Scenario: Adaptación del contenido según el nivel del usuario
      Given que el usuario tiene un nivel asignado
      When accede a una explicación
      Then el contenido debe adaptarse a su nivel.

---

### US24.feature

Feature: US24 - Explicaciones interactivas con botones

    Como usuario, quiero recibir explicaciones interactivas con botones para expandir los detalles.

    Scenario: Expansión de contenido
      Given que el estudiante visualiza una explicación
      When hace clic en “ver más”
      Then debe desplegarse contenido adicional.

    Scenario: Contracción del contenido 
      Given que el usuario ha expandido una sección
      When hace clic en “ver menos”, 
      Then el contenido debe ocultarse nuevamente.

---

### US25.feature

Feature: US25 - Sugerencia según los errores frecuentes

    Como estudiante, quiero que el asistente me sugiera temas relacionados según 
    mis errores frecuentes para corregirlos.
    
    Scenario: Generación de sugerencias basadas en errores repetidos
      Given que el sistema detecta errores repetidos
      When el estudiante termina un ejercicio,
      Then debe recibir sugerencias de temas relacionados.
    
    Scenario: Redirección a contenido educativo desde una sugerencia
      Given que el usuario recibe una sugerencia,
      When hace clic en ella
      Then debe redirigirlo a una explicación o mini-lección.

---

### US26.feature

Feature: US26 - Guardar sesiones de estudio

    Como usuario, quiero guardar mis sesiones de estudio para retomarlas después.

    Scenario: Almacenamiento automático del progreso al cerrar sesión
      Given que el usuario estudia con frecuencia
      When cierra la sesión
      Then el sistema debe guardar su progreso localmente.

    Scenario: Continuación del estudio desde el último punto guardado
      Given que el usuario regresa a la plataforma
      When inicia sesión nuevamente
      Then debe ver la opción de continuar desde donde quedó.

---

### US27.feature

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

---

### US28.feature

Feature: US28 - Retroalimentación rápida 

    Como usuario, quiero recibir retroalimentación rápida al completar un ejercicio 
    para detectar posibles errores y puntos de mejora.

    Scenario: Notificación inmediata del resultado del ejercicio
      Given que el estudiante completa un ejercicio 
      When envía su respuesta
      Then debe recibir un mensaje indicando si fue correcta o incorrecta.

    Scenario: Explicación del resultado obtenido
      Given que el usuario recibe retroalimentación
      When revisa el resultado
      Then debe ver una explicación del porqué de su error o acierto.

---

### US29.feature

Feature: US29 - Buscador de palabras clave

    Como estudiante, quiero tener un buscador para encontrar explicaciones por tema o palabra clave.

    Scenario: Búsqueda de explicaciones mediante palabra clave
      Given que el usuario quiere encontrar una explicación
      When escribe una palabra clave en el buscador
      Then debe mostrarse una lista de resultados relevantes.

    Scenario: Apertura de una explicación desde los resultados
      Given que el usuario selecciona un resultado
      When hace clic en él
      Then debe abrirse la explicación correspondiente.

---

### US30.feature

Feature: US30 - Calificación del servicio mediante estrellas

    Como estudiante, quiero calificar cada explicación con estrellas para indicar si fue útil.

    Scenario: Registro de calificación mediante estrellas
      Given que el estudiante ha terminado de leer una explicación
      When selecciona una cantidad de estrellas
      Then el sistema debe registrar la calificación.

    Scenario: Restricción al intentar calificar nuevamente una explicación
      Given que el usuario ha calificado una explicación
      When intenta calificar nuevamente
      Then debe mostrarse un mensaje indicando que ya fue evaluada.
