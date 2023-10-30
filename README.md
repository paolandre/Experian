<p><img src="[https://github.com/leidypardo/DEV007-data-lovers/blob/main/src/gallery/vista3Final.png](https://github.com/AndreaRoa/Experian/blob/main/src/assets/logo.png?raw=true)">

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Prototipo de Alta Fidelidad](#3-prototipo-de-alta-fidelidad)
* [4. Historias de Usuario](#4-historias-de-usuario)
* [5. Herramientas Utilizadas](#5-herramientas-utilizadas)

***

## 1. Preámbulo

Posterior al periodo de pandemia Experian clasifico sus colaboradores en diferentes modalidades de Trabajo
Home: 100% Remoto
Hybrid: 8 dias al mes en oficina
*Roam: Visita de Clientes se toma como asistencias a la oficina. 8 dias al mes en oficina
A la fecha, estos compromisos se encuentran en el contrato laboral de cada empleado y H.R debe hacer seguimiento al cumplimiento de esta política mediante el Indicador FOW (Future Of Work). Las personas que incumplan la política son derivados a llamados de atención y posible incumplimiento de contrato.
Sin embargo, esta información se gestiona de manera manual por una sola persona lo que hace que el volumen de consultas por detalle de incumplimiento de FOW crezca exponencialmente y de otro lado no hay capacidad que pueda atender estas solicitudes.
Por ello,	 se requiere un módulo de auto consulta que permita a las/los colaboradores consultar mes vencido el indicador de cumplimiento del FOW, así como el histórico con el detalle que se indicará más adelante.
Adicional, este módulo también debe permitir una vista a los lideres que puedan ver el cumplimiento del indicador de sus colaboradores a cargo y con ello establecer planes de acción.

## 2. Resumen del Proyecto

El detalle de cada uno de estos módulos se encuentra a continuación:

MODULO AUTOCONSULTA – COLABORADOR/A
Este modulo debe permitir consultar la información del FOW  a un colaborador digitando su  Oracle ID, del mes actual, y meses anteriores de los que se tenga información. 
Vista Consulta UN MES:
Una vez con esta información el módulo debe cargar:
1. Información Personal: Sección donde se agrupa la información personal del colaborador que está consultando:
- Country
- Job Title
- VP
- Office Location
- FOW del mes 
2.Mostrar el indicador de cumplimiento del mes en consulta: Porcentaje de cumplimiento 
- Si el porcentaje de cumplimiento es 100% el número se mostrará en verde
- Si el porcentaje de cumplimiento es menos de 100% se mostrará en rojo
3. Mostrar en pantalla en formato calendario el mes que está en consulta resaltando los feriados a que haya lugar (Tener presente que este resaltado debe ser diferenciado de las convenciones expuestas a continuación en el punto 4)
4. En el calendario se debe mostrar las siguientes convenciones:
- Excepciones autorizadas (Color Amarillo): Debe ser resaltado desde la fecha de inicio hasta la fecha fin y el detalle de la inasistencia (campo: motivo de ausencia)
- Ausencias programadas (Color Verde): Debe ser resaltado desde la fecha de inicio hasta la fecha fin y el detalle de la inasistencia (campo: Tipo de ausencia)
- Ingreso oficina (BORDE Resaltado Morado): Debe ser resaltado el día
  La tabla de convenciones para cada item debe ser agregado en la lista.

5. Con una imagen de ayuda debe desplegar la siguiente información:
En caso de inquietudes o aclaraciones te puedes comunicar al correo Onehrsla@experian.com 
El diseño y experiencia de Usuario se deja a libertad del equipo del reto, tener en cuenta el manual de marca para respetar colores e imágenes de Experian.

Vista Consulta VARIOS MESES:
1. Si el colaborador desea consultar un histórico se debe presentar una tabla resumen del indicador por mes y el promedio de los meses consultados.
Cada indicador le permitirá al colaborador ingresar a la vista detalle que será la misma que lo revisado en consulta un mes.
2. El diseño y experiencia de Usuario se deja a libertad del equipo del reto, tener en cuenta el manual de marca para respetar colores e imágenes de Experian.

MODULO CONSULTA LÍDER
Este módulo debe permitir a un líder consultar la información de sus  colaboradores (SUPERVISOR ID) del mes actual, y meses anteriores de los que se tenga información 
Una vez con esta información el módulo debe:
Mostrar el indicador promedio del área por mes: Promedio de los indicadores de cumplimiento de los colaboradores a cargo.
Si se consulta más de un mes se debe mostrar una tabla de integre cada uno de los indicadores de cada mes.
Información Personal de los colaboradores: En esta sección a modo de tabla se debe mostrar la información de cada colaborador 
- Oracle ID colaborador
- Country
- Job Title
- Office Location
- FOW
- Indicador de cumplimiento Fow (mes consulta o meses consulta)
- Mostrar el indicador de cumplimiento del mes en consulta: Porcentaje de cumplimiento 
- Si el porcentaje de cumplimiento es 100% el número se mostrará en verde
- Si el porcentaje de cumplimiento es menos de 100% se mostrará en rojo
- La tabla debe permitir organizar por porcentaje de cumplimiento de mayor a menor o viceversa 
2. Para ver el detalle del indicador de cumplimiento de cada colaborador, cada Oracle id  debe linkear a la vista personal de ese colaborador con el mismo detalle que este ve. (vista abordada en el módulo anterior.
3. Con una imagen de ayuda debe desplegar la siguiente información:
En caso de inquietudes o aclaraciones te puedes comunicar al correo Onehrsla@experian.com 
El diseño y experiencia de Usuario se deja a libertad del equipo del reto, tener en cuenta el manual de marca para respetar colores e imagen de Experian.

CHAT BOT CONSULTA
Se plantea crear un Chatbot que permita al colaborador o líder tener rápidamente información del indicador de cumplimiento FOW
El chatbot debe estar en capacidad de:
- Preguntar el Oracle id para iniciar la consulta
- Preguntar de qué mes quiere consultar el FOW
- Responder con el indicador del FOW del mes señalado

Nice to have: 
- Entregar información del indicador de área de cada mes o de los meses consultados (En caso de que la consulta sea de un líder)
- Entregar la URL de consulta para ver en detalle el mes 
- En caso de inquietudes informar el correo de ayuda de Onehrsla@experian.com
- Diseño responsive

Nota: Se deja al equipo del reto otro tipo de consultas que pueda responder el chatbot de acuerdo al reto planteado.
Recursos: 
- Experian entregará una base de datos dummie en Excel con todos los parámetros necesarios para consumir y que serán insumo para lo que se muestra en el aplicativo. 
- Logo, manual de marca, y cualquier lineamiento gráfico que vean necesario para tener en cuenta en el diseño del aplicativo: https://www.experian.com/brand-central/ 


## 3. Prototipo de Alta Fidelidad

Se diseño una Interfaz de Usuario mediante la plataforma figma, en la cual podemos observar una idea general del proyectó, con funcionalidad, ingresando al siguiente link. <a href="https://www.figma.com/proto/wuTXc96v2vfLiM6MmIkwAI/Experian?type=design&node-id=160-41340&t=R1qZvLZESHAJGu06-1&scaling=min-zoom&page-id=158%3A3645&mode=design)https://www.figma.com/proto/wuTXc96v2vfLiM6MmIkwAI/Experian?type=design&node-id=160-41340&t=R1qZvLZESHAJGu06-1&scaling=min-zoom&page-id=158%3A3645&mode=design"> FIGMA </a>

## 4. Historias de Usuario
Primera historia de usuario: 

Yo como líder debería visualizar el botón de people portal FOW Indicator para redirigir a mi personal FOW. 

Segunda historia de usuario: 

Yo como líder debería ver la barra de navegación, mis datos, porcentaje de cumplimiento, días reportados, resumen de las convenciones del calendario, caja de información, calendario. 

Tercera historia de usuario: 

Yo como líder debería ver los días marcados en el calendario con colores de acuerdo a las convenciones como días festivos (holiday), excepciones autorizados, ausencias programadas (scheduled absences). 
	
Cuarta historia de usuario: 

Yo como líder debería ver las estadísticas de mi equipo en la pestaña Team FOW. 

Quinta historia de usuario: 

Yo como líder debería ver la barra de navegación, los miembros del equipo, el progreso del equipo, las opciones de filtro, el botón de exportar, tabla con información y estadísticas de los miembros, caja de información. 

Sexta historia de usuario: 

Yo como líder debería dar click en el ID del usuario para ver su información en otra página nueva. 

## 5. Herramientas Utilizadas

Lenguajes y frameworks: 

Javascript
React
CSS
Tailwind
HTML

Librerías: 
Sweet alert 
Canvas conffetti
React icons
datepicker de jQuery 
react-big-calendar
FlowiseChatEmbed
Chartjs-2
xlsx

Otras herramientas: 
- Flowise (plataforma de código abierto)
-Vercel


