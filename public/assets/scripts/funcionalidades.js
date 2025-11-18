
const selects = document.querySelectorAll(".form-group select");
const btnEnviar = document.querySelector(".btn-enviar");
const resultadoCard = document.querySelector(".resultado-card p");


const respuestas = {
    "Bucles": {
        "Principiante": `Un bucle es una parte del código que se repite varias veces. 
        Sirve para no escribir lo mismo una y otra vez. Por ejemplo, repetir un mensaje 
        10 veces o revisar cada elemento de una lista. Los tipos más comunes son for y while.`,

        "Intermedio": `Un bucle es una estructura de control que ejecuta un bloque de instrucciones 
        mientras se cumpla una condición o durante un número específico de iteraciones. En este nivel 
        ya se entienden patrones como recorrer arreglos, usar contadores, romper ciclos con break, 
        y evitar ciclos infinitos asegurando que la condición cambie.`,

        "Avanzado": `Los bucles son mecanismos iterativos optimizados para procesar colecciones y 
        flujos de datos. Aquí se entiende la diferencia entre iteración interna y externa, complejidad 
        computacional de diferentes patrones de loop, uso de iteradores, bucles anidados y cómo afectan 
        el rendimiento. También se usan estructuras de control como forEach, generadores o loops sobre streams.`,

        "Experto": `Los bucles se manejan desde una perspectiva de diseño y optimización: se analizan 
        en función de su coste computacional, se reemplazan por técnicas como vectorización, programación 
        funcional (map/reduce), iteradores perezosos, paralelismo y optimización de CPU (caching y branch prediction). 
        Se entiende cómo el compilador optimiza los loops y cuándo es mejor evitar iteración explícita.`
    },

    "Funciones": {
        "Principiante": `Una función es un bloque de código que hace una tarea específica. La usas para no 
        repetir código y para organizar mejor tu programa. Le puedes enviar datos (parámetros) y puede devolverte un resultado.`,

        "Intermedio": `Una función es una unidad lógica de código que recibe entradas, ejecuta un conjunto 
        de instrucciones y devuelve un valor o realiza una acción. Aquí ya se entiende parámetros, retorno, 
        alcance de variables (scope) y cómo dividir un programa en funciones para ordenarlo mejor.`,

        "Avanzado": `Las funciones se manejan como entidades de primer orden: pueden pasarse como argumentos, 
        retornarse, almacenarse en variables y componerse. Se comprenden conceptos como funciones puras, 
        closures, inmutabilidad, scopes avanzados, recursividad optimizada y buen diseño modular.`,

        "Experto": `Las funciones se entienden desde un nivel arquitectónico y de rendimiento. Se consideran 
        currificación, programación declarativa, optimizaciones del compilador (inline expansion, tail call optimization),
        manejo del stack frame, higher-order functions, pipelines y diseño de APIs funcionales.`
    },

    "Estructuras de datos": {
        "Principiante": `Una estructura de información es una forma de guardar datos para usarlos más adelante. 
        Ejemplos simples son listas, arreglos o tablas. Sirven para organizar información y acceder a ella fácilmente.`,

        "Intermedio": `Una estructura de información es una forma organizada de almacenar y gestionar datos 
        para facilitar operaciones como buscar, insertar, eliminar o actualizar. Se conocen arreglos, colas, 
        pilas, listas enlazadas y diccionarios, y cuándo usar cada uno.`,

        "Avanzado": `Las estructuras de información se analizan por su eficiencia (Big-O) y cómo afectan al rendimiento. 
        Se dominan árboles, grafos, heaps, tablas hash, implementación interna y ventajas según tipo de acceso 
        o modificación requerida.`,

        "Experto": `Las estructuras de información se diseñan y optimizan según el hardware, patrones de acceso 
        y restricciones del sistema. Se manejan localidad de caché, compresión, estructuras persistentes y perezosas, 
        B-Trees, AVL, Red-Black, grafos dinámicos y optimizaciones reales basadas en comportamiento en producción.`
    }
};


btnEnviar.addEventListener("click", () => {

    const area = selects[0].value;  
    const nivel = selects[1].value;
    const tema = selects[2].value;


    if (respuestas[tema] && respuestas[tema][nivel]) {
        resultadoCard.textContent = respuestas[tema][nivel];
    } else {
        resultadoCard.textContent = "No hay información disponible para esa combinación.";
    }
});
