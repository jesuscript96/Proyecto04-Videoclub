'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('films', [
      {
      id_film: 1,
      title: "Shrek",
      genre: "Infantil",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/jTQONM7jt1yv2lL972TtmWO0UIZ.jpg",
         rating: 1,
      sinopsis: "Hace mucho, mucho tiempo, en una lejanísima ciénaga vivía un intratable ogro llamado Shrek. Pero de repente, un día, su absoluta soledad se ve interrumpida por una invasión de sorprendentes personajes de cuento. Hay ratoncitos ciegos en su comida, un enorme y malísimo lobo en su cama, tres cerditos sin hogar y otros muchos seres increíbles que han sido deportados de su reino por el malvado Lord Farquaad. Para conseguir salvar su terreno, y de paso a sí mismo, Shrek hace un pacto con Farquaad y emprende viaje para conseguir que la preciosa princesa Fiona sea la novia del Lord. En tan importante misión le acompañan un burro chistoso, dispuesto a hacer cualquier cosa por Shrek. Todo, menos estarse calladito. Rescatar a la princesa de una dragona enamoradiza que suelta fuego al respirar va a resultar una tontería comparado con lo que ocurre cuando el oscuro secreto que la joven guardaba es revelado."
    },
    {
      id_film: 2,
      title: "Los Increibles",
      genre: "Infantil",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zXP4sSS03NzzYxmut0hUufNyTcD.jpg",
      rating: 2,
      sinopsis: "Como Mr. Increíble y Elastigirl, Bob y su esposa Helen estaban entre los mejores luchadores contra el crimen. Por fin pueden volver a la acción cuando una misteriosa llamada cita a Bob en una isla remota."
    },
    {
      id_film: 3,
      title: "Batman",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/kbeWnmnHNEnuVej6wcjUv0eY6IL.jpg",
      rating: 3,
      sinopsis: "Atormentado por haber visto morir a sus padres delante suyo, Bruce Wayne se enfunda cada noche en el traje de Batman, adopta la terrorífica forma de un murciélago y surca los tejados de Gotham City combatiendo el crimen y manteniendo a raya la corrupción de su ciudad. Pero esta vez Batman tendrá que enfrentarse a su más terrible enemigo, El Joker, que pretende someter a toda la ciudad bajo los deseos de su mente perturbada."
    },
    {
      id_film: 4,
      title: "Origen",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg",
      rating: 4,
      sinopsis: "Dom Cobb es un ladrón hábil, el mejor de todos, especializado en el peligroso arte de extracción: el robo de secretos valiosos desde las profundidades del subconsciente durante el estado de sueño cuando la mente está más vulnerable. Esta habilidad excepcional de Cobb le ha hecho un jugador codiciado en el traicionero nuevo mundo de espionaje corporativo, pero al mismo tiempo, le ha convertido en un fugitivo internacional y ha tenido que sacrificar todo que le importaba. Ahora a Cobb se le ofrece una oportunidad para redimirse. Con un último trabajo podría recuperar su vida anterior, pero solamente si logra lo imposible"
    },
    {
      id_film: 5,
      title: "Up",
      genre: "Infantil",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rVxTlEt3myculPtdnEHx53o8mjW.jpg",
      rating: 5,
      sinopsis: "Tras atar miles de globos a su casa, Carl Fredricksen, un vendedor de globos jubilado, se embarca en el mundo de los sueños de la infancia. Pero sin que Carl lo sepa, Russell, un explorador de 8 años, se encuentra en el lugar equivocado en el momento equivocado: el porche delantero de la casa. El dúo más improbable conoce a fantásticos amigos como Dug, un perro con un collar especial que le permite hablar, y Kevin, un pájaro de cuatro metros de altura que no vuela. Atrapados en la selva, Carl se da cuenta de que a veces las mayores aventuras de la vida son las que menos esperabas."
    },
    {
      id_film: 6,
      title: "Transporter",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEiyyNU0CVZBgmH08l3GMgw4BfZ.jpg",
      rating: 6,
     sinopsis: "El ex operador de Fuerzas Especiales Frank Martin vive lo que parece ser una vida tranquila a orillas del Mediterráneo francés, donde presta sus servicios como un “transportador”, un mercenario que traslada bienes —humanos o de cualquier tipo— de un lugar a otro. Siempre sin preguntas de por medio. Frank, que en su Mercedes equipado lleva a cabo misiones secretas y a veces peligrosas, se apega a un estricto juego de 3 reglas que nunca rompe. Regla numero uno: Nunca modifiques el trato. Dos: Omitir nombres, Frank no quiere saber para quién trabaja o qué es lo que transporta. Tres: Nunca ver qué hay dentro del paquete. La carga más reciente de Frank aparenta ser igual a los incontables paquetes que ha entregado en el pasado. Ha sido contratado por un norteamericano conocido solamente como “Wall Street” para que lleve a cabo una entrega. Pero cuando Frank se detiene en el trayecto, se percata que su “paquete” se mueve..."
    },
    {
      id_film: 7,
      title: "Seven",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uVPcVz4b2hnSGrXYLdIGRXwcivs.jpg",
      rating: 7,
     sinopsis: "El teniente Somerset, del departamento de homicidios, está a punto de jubilarse y ser reemplazado por el ambicioso y brillante detective David Mills. Ambos tendrán que colaborar en la resolución de una serie de asesinatos cometidos por un psicópata que toma como base la relación de los siete pecados capitales: gula, pereza, soberbia, avaricia, envidia, lujuria e ira. Los cuerpos de las víctimas, sobre los que el asesino se ensaña de manera impúdica, se convertirán para los policías en un enigma que les obligará a viajar al horror y la barbarie más absoluta."
    },
    {
      id_film: 8,
      title: "El Francotirador",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/kSAdNmbIcmjtZrf9qtFwgHhZxl3.jpg",
      rating: 8,
     sinopsis: "El marine del grupo de operaciones especiales de la Marina de Estados Unidos Chris Kyle es enviado a Irak con una sola misión: proteger a sus compañeros de ejército. Su precisión milimétrica salva incontables vidas en el campo de batalla y, a medida que se extienden sus valientes hazañas, se gana el apodo de 'Leyenda'. Sin embargo, su reputación también crece detrás de las líneas enemigas, de manera que ponen precio a su cabeza y se convierte en objetivo prioritario de los insurgentes. Al mismo tiempo también se está enfrentando a otra batalla en casa: ser un buen marido y padre desde el otro lado del mundo."
    },
    {
      id_film: 9,
      title: "Sharknado",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/l525ueVZgelZoCSMgPZKKOEJMEC.jpg",
      rating: 9,
     sinopsis: "Se centra en una ciudad que está aterrorizada por miles de tiburones que fueron traídos por un huracán. Cuando los tornados se empiezan a formar y criar a los tiburones de la tierra, los asesinos mortales comienzan su destrucción en el agua, la tierra y en el aire."
    },
    {
      id_film: 10,
      title: "The One",
      genre: "Comedia",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ca9kj9JV4bIaHtr17JxjNJMBGk.jpg",
      rating: 7,
     sinopsis: "Esta comedia dramática trata sobre un joven banquero de inversiones en Manhattan, que lleva una vida de mucho exito y que está a punto de casarse con la mujer de sus sueños. Pero un mes antes de su boda, se reúne inesperadamente con un carismático hombre de su pasado."
       },
    {
      id_film: 11,
      title: "El Rey león",
      genre: "Infantil",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
      rating: 10,
      sinopsis: "La sabana africana es el escenario en el que tienen lugar las aventuras de Simba, un pequeño león que es el heredero del trono. Sin embargo, se ve forzado a exiliarse al ser injustamente acusado de la muerte de su padre. Durante su destierro, hará buenas amistades y, finalmente, regresará para recuperar lo que legítimamente le corresponde."
       },
    {
      id_film: 12,
      title: "Joker",
      genre: "Acción",
      minAge: 16,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v0eQLbzT6sWelfApuYsEkYpzufl.jpg",
      rating: 9,
      sinopsis: "Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro."
       },
    {
      id_film: 13,
      title: "Regreso al futuro",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ldJzO9D40mCVeDaZQ1986t8rguZ.jpg",
      rating: 7,
      sinopsis: "Marty McFly, un estudiante de secundaria de 17 años, es enviado accidentalmente treinta años al pasado en un DeLorean que viaja en el tiempo, inventado por su gran amigo, el excéntrico científico Doc Brown."
       },
    {
      id_film: 14,
      title: "El club de los poetas muertos",
      genre: "Drama",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rP92uZg0Azxjk9Lj5juRA8TEMR5.jpg",
      rating: 6,
      sinopsis: "En un elitista y estricto colegio privado de Nueva Inglaterra, un grupo de alumnos descubrirá la poesía, el significado de Carpe Diem -aprovechar el momento- y la importancia de perseguir los sueños, gracias a un excéntrico profesor que despierta sus mentes por medio de métodos poco convencionales."
       },
    {
      id_film: 15,
      title: "Gladiator",
      genre: "Accion",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/90QFOG5zSN4cbrIVs4DL4ePAuA5.jpg",
      rating: 10,
      sinopsis: "En el año 180, el Imperio Romano domina todo el mundo conocido. Tras una gran victoria sobre los bárbaros del norte, el anciano emperador Marco Aurelio decide transferir el poder a Máximo, bravo general de sus ejércitos y hombre de inquebrantable lealtad al imperio. Pero su hijo Cómodo, que aspiraba al trono, no lo acepta y trata de asesinar a Máximo."
       },
    {
      id_film: 16,
      title: "El Show de Truman",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/4BGVZSwv5n0hMIAWwiSjMFDQ63K.jpg",
      rating: 8,
      sinopsis: "Truman Burbank es un hombre corriente y algo ingenuo que ha vivido toda su vida en uno de esos pueblos donde nunca pasa nada. Sin embargo, de repente, unos extraños sucesos le hacen sospechar que algo anormal está ocurriendo. Todos sus amigos son actores, toda su ciudad es un plató, toda su vida está siendo filmada y emitida como el reality más ambicioso de la historia."
       },
    {
      id_film: 17,
      title: "Coco",
      genre: "Infantil",
      minAge:6,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lUZZhYLLDU4g4XGQ5tvjYNVytxc.jpg",
      rating: 7,
      sinopsis: "Un joven aspirante a músico llamado Miguel se embarca en un viaje extraordinario a la mágica tierra de sus ancestros. Allí, el encantador embaucador Héctor se convierte en su inesperado amigo y le ayuda a descubrir los misterios detrás de las historias y tradiciones de su familia."
       },
    {
      id_film: 18,
      title: "El señor de los anillos: El retorno del Rey",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mWuFbQrXyLk2kMBKF9TUPtDwuPx.jpg",
      rating: 9,
      sinopsis: "Las fuerzas de Saruman han sido destruidas, y su fortaleza sitiada. Ha llegado el momento de que se decida el destino de la Tierra Media, y por primera vez en mucho tiempo, parece que hay una pequeña esperanza. La atención del señor oscuro Sauron se centra ahora en Gondor, el último reducto de los hombres, y del cual Aragorn tendrá que reclamar el trono para ocupar su puesto de rey. Pero las fuerzas de Sauron ya se preparan para lanzar el último y definitivo ataque contra el reino de Gondor, la batalla que decidirá el destino de todos. Mientras tanto, Frodo y Sam continuan su camino hacia Mordor, a la espera de que Sauron no repare en que dos pequeños Hobbits se acercan cada día más al final de su camino, el Monte del Destino."
       },
    {
      id_film: 19,
      title: "Bohemian Rapsody",
      genre: "Drama",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gk6IErM0acV6HJRwKZy8ecBoddc.jpg",
      rating: 9,
      sinopsis: "Bohemian Rhapsody es una rotunda y sonora celebración de Queen, de su música y de su extraordinario cantante Freddie Mercury, que desafió estereotipos e hizo añicos tradiciones para convertirse en uno de los showmans más queridos del mundo. La película plasma el meteórico ascenso al olimpo de la música de la banda a través de sus icónicas canciones y su revolucionario sonido, su crisis cuando el estilo de vida de Mercury estuvo fuera de control, y su triunfal reunión en la víspera del Live Aid, en la que Mercury, mientras sufría una enfermedad que amenazaba su vida, lidera a la banda en uno de los conciertos de rock más grandes de la historia. Veremos cómo se cimentó el legado de una banda que siempre se pareció más a una familia, y que continúa inspirando a propios y extraños, soñadores y amantes de la música hasta nuestros días."
       },
    {
      id_film: 20,
      title: "El gran Torino",
      genre: "Acción",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w1280/7w54KRHdRokgXqxL59GKVau8e6l.jpg",
      rating: 7,
      sinopsis: "Walt Kowalski (Clint Eastwood), un veterano de la guerra de Corea, es un obrero jubilado del sector del automóvil. Su máxima pasión es cuidar de su más preciado tesoro: un coche Gran Torino de 1972. Es un hombre inflexible y con una voluntad de hierro, al que le cuesta trabajo asimilar los cambios que se producen a su alrededor. Sin embargo, las circustancias harán que se vea obligado a replantearse sus ideas."
       },
    {
      id_film: 21,
      title: "Toy Story",
      genre: "Infantil",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4bxprr56U0bguis9PgjKTLE08KD.jpg",
      rating: 7,
      sinopsis:"Los juguetes de Andy, un niño de seis años, temen que haya llegado su hora y que un nuevo regalo de cumpleaños les sustituya en el corazón de su dueño. Woody, un vaquero que ha sido hasta ahora el juguete favorito de Andy, trata de tranquilizarlos hasta que aparece Buzz Lightyear, un héroe espacial dotado de todo tipo de avances tecnológicos. Woody es relegado a un segundo plano., pero su constante rivalidad se transformará en una gran amistad cuando ambos se pierden en la ciudad sin saber cómo volver a casa."
       },
    {
      id_film: 22,
      title: "El gran Showman",
      genre: "Aventura",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4ssLEvNQ5oM9sJnV6FkDVgOtyAE.jpg",
      rating: 8,
      sinopsis: "Biopic sobre Phineas Taylor Barnum (1810-1891), un empresario circense estadounidense que fundó el Ringling Bros. and Barnum & Bailey Circus, conocido como el mayor espectáculo en la tierra."
       },
    {
      id_film: 23,
      title: "Jurassic Park",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lTeTHvfUHEJDK7o3jg06lYi2bLR.jpg",
      rating: 8,
     sinopsis: "El multimillonario John Hammond tiene una idea para un espectacular parque temático: una isla retirada donde los visitantes puedan observar dinosaurios reales. Con la última tecnología en el desarrollo de ADN, los científicos pueden clonar braquiosaurios, triceratops, velociraptors y un tiranosaurio rex, utilizando para ello la sangre fosilizada en ámbar contenida en insectos que los mordieron hace millones de años. Los paleontólogos Alan Grant, Ellie Sattler y Ian Malcolm visitan el parque y quedan muy sorprendidos con los resultados obtenidos. Pero cuando un problemático empleado manipula el sofisticado sistema de seguridad los dinosaurios escapan, obligando a los visitantes a luchar por su supervivencia."
       },
    {
      id_film: 24,
      title: "El caballero oscuro: La Leyenda renace",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rrS7K8tXVFUBliIKWaRuSq65nWr.jpg",
      rating: 10,
      sinopsis: "Hace ocho años que Batman desapareció, dejando de ser un héroe para convertirse en un fugitivo. Al asumir la culpa por la muerte del fiscal del distrito Harvey Dent, el Caballero Oscuro decidió sacrificarlo todo por lo que consideraba, al igual que el Comisario Gordon, un bien mayor. La mentira funciona durante un tiempo, ya que la actividad criminal de la ciudad de Gotham se ve aplacada gracias a la dura Ley Dent. Pero todo cambia con la llegada de una astuta gata ladrona que pretende llevar a cabo un misterioso plan. Sin embargo, mucho más peligrosa es la aparición en escena de Bane, un terrorista enmascarado cuyos despiadados planes obligan a Bruce a regresar de su voluntario exilio."
       },
    {
      id_film: 25,
      title: "La Bella y la Bestia",
      genre: "Infantil",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1FxMtEUc6DP1MXsTBftOFaoCVVO.jpg",
      rating: 8,
      sinopsis: "Una hermosa joven llamada Bella acepta alojarse en un castillo con una bestia a cambio de la libertad de su padre. La bestia es, en realidad, un príncipe encantado. Para romper el hechizo, deberá ganarse el amor de una preciosa dama antes de que caiga el último pétalo de una rosa encantada."
       },
    {
      id_film: 26,
      title: "La princesa prometida",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nHDpaLB6gMKyD8hMtSthtV7yPt9.jpg",
      rating: 6,
     sinopsis: "Después de buscar fortuna durante cinco años, Westley retorna a su tierra para casarse con su amada, la bella Buttercup, a la que había jurado amor eterno. Sin embargo, para recuperarla habrá de enfrentarse a Vizzini y sus esbirros. Una vez derrotados éstos, tendrá que superar el peor de los obstáculos: el príncipe Humperdinck pretende desposar a la desdichada Buttercup, pese a que ella no lo ama, ya que sigue enamorada de Westley."
       },
    {
      id_film: 27,
      title: "Tortugas Ninja",
      genre: "Acción",
      minAge: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uDJipJy4zwIN9F7stcaTGwfD9yP.jpg",
      rating: 8,
      sinopsis: "Después de haber sido contaminadas con una misteriosa sustancia química, llamada Ooze, cuatro tortugas que viven en las alcantarillas de Nueva York se transforman y mutan, de repente, en grandes tortugas. Ahora pueden hablar y caminar como un ser humano. Entrenadas por una vieja pero sabia rata (el Maestro Splinter) las cuatro tortugas, Leonardo, Miguel Ángel, Donatello y Rafael, aprenderán técnicas ninja para enfrentarse a los más peligrosos criminales. Sus enemigos son los miembros de una secta llamada El clan del pie, liderada por Shredder, quien quiere convertirse en el amo del mundo."
       },
    {
      id_film: 28,
      title: "Los Goonies",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h0QoQSodfdd3VTBqlFb2QP7wIbL.jpg",
      rating: 9,
      sinopsis: "Mikey, un muchacho de trece años, que junto con su hermano mayor y sus amigos se hacen llamar 'Los Goonies', decide subir a jugar al desván de su casa, donde su padre guarda antigüedades. Allí, el grupo encuentra el mapa de un tesoro."
       },
    {
      id_film: 29,
      title: "Rocky",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mQKvObSEYESsDQXFWxfe0FARIP7.jpg",
      rating: 8,
     sinopsis: "Rocky Balboa es un desconocido boxeador a quien se le ofrece la posibilidad de pelear por el título mundial de los pesos pesados. Con mucha fuerza de voluntad, Rocky se preparará concienzudamente para este combate, y también para los cambios que producirá en su vida."
       },
    {
      id_film: 30,
      title: "Monstruos S.A.",
      genre: "Infantil",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTE3BLVCpYaR71L2U8SHV22HvEr.jpg",
      rating: 7,
     sinopsis: "Monsters Inc. es la mayor empresa de miedo del mundo, y James P. Sullivan es uno de sus mejores empleados. Asustar a los niños no es un trabajo fácil, ya que todos creen que los niños son tóxicos y no pueden tener contacto con ellos. Pero un día una niña se cuela sin querer en la empresa, provocando el caos."
       },
     {
      id_film: 31,
      title: "Encanto",
      genre: "Infantil",
      minAge: 3,
      poster: "	https://www.themoviedb.org/t/p/w1280/4JCyBaUJmMgmnDkLiOI8P3tDpqS.jpg",
      rating: 7,
     sinopsis: "Los Madrigal son una familia extraordinaria que vive en una casa mágica de un pueblo vibrante en las montañas de Colombia, escondidas en un 'Encanto'. La magia ha bendecido a cada niño de la familia con un don único, desde la superfuerza hasta el poder de sanar. A todos, excepto Mirabel, quien desea ser tan especial como el resto de su familia. Pero cuando la magia que rodea al Encanto está en peligro, Mirabel decide que ella, la única Madrigal sin ningún tipo de don único, puede ser la única esperanza de su excepcional familia."
       },
      {
      id_film: 32,
      title: "Top Gun: Maverick",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/AlWpEpQq0RgZIXVHAHZtFhEvRgd.jpg",
      rating: 6,
     sinopsis: "Después de más de 30 años de servicio como uno de los mejores aviadores de la Armada, Pete Maverick Mitchell se encuentra dónde siempre quiso estar, empujando los límites como un valiente piloto de prueba y esquivando el alcance en su rango, que no le dejaría volar emplazándolo en tierra. Cuando se encuentra entrenando a un destacamento de graduados de Top Gun para una misión especializada, Maverick se encuentra allí con el teniente Bradley Bradshaw, el hijo de su difunto amigo Goose."
       },
       {
      id_film: 33,
      title: "Thor: Love and Thunder",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/z9ajF6E39Hg2pXUofmUYgZHvdX.jpg",
      rating: 8,
     sinopsis: "El Dios del Trueno emprende un viaje que no se parece en nada a lo que se ha enfrentado hasta ahora: una búsqueda de la paz interior. Pero el retiro de Thor se ve interrumpido por un asesino galáctico conocido como Gorr el Carnicero de Dioses. Para hacer frente a la amenaza, Thor solicita la ayuda de Valkiria, de Korg y de su ex novia Jane Foster que, para sorpresa de Thor, empuña su martillo mágico, Mjolnir, como la Poderosa Thor. Juntos, se embarcan en una aventura cósmica en la que tendrán que descubrir el misterio de la venganza del Carnicero de Dioses y detenerlo antes de que sea demasiado tarde."
       },
        {
      id_film: 34,
      title: "Jurassic World: Dominion",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/VEZtsEQwsItZUoIdqzMwjvkwxI.jpg",
      rating: 6,
     sinopsis: "Cuatro años después de la destrucción de Isla Nublar, los dinosaurios conviven y cazan  con los seres humanos en todo el mundo. Este frágil equilibrio cambiará el futuro y decidirá, de una vez por todas, si los seres humanos seguirán en la cúspide de los depredadores en un planeta que comparten con los animales más temibles de la creación."
       },
         {
      id_film: 35,
      title: "Sin novedad al frente",
      genre: "Infantil",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w1280/jPYPRS7LVmLDXGJ7VfBjXaV9eZr.jpg",
      rating: 6,
     sinopsis: "Paul Baumer y sus amigos Albert y Muller, incitados por sueños románticos de heroísmo, se alistan voluntariamente en el ejército alemán. Llenos de emoción y fervor patriótico, los muchachos marchan con entusiasmo hacia una guerra en la que creen. Pero una vez en el frente occidental, descubren el horror destructor del alma de la Primera Guerra Mundial"
       },
          {
      id_film: 36,
      title: "Spider-man: No way Home",
      genre: "Acción",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w1280/miZFgV81xG324rpUknQX8dtXuBl.jpg",
      rating: 7,
     sinopsis: "Peter Parker es desenmascarado y por tanto no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un súper héroe. Cuando pide ayuda a Doctor Strange, los riesgos pasan a ser aún más peligrosos, obligándole a descubrir lo que realmente significa ser Spider-Man."
       },
           {
      id_film: 37,
      title: "Avatar",
      genre: "Acción",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kUAG4ZQcsNbRyiPyAr3hLdsVgAq.jpg",
      rating: 9,
     sinopsis: "Ambientada más de una década después de los acontecimientos de la primera película, 'Avatar: The Way of Water' empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren."
       },
            {
      id_film: 38,
      title: "Sonic 2: La película",
      genre: "Infantil",
      minAge: 3,
      poster: "	https://www.themoviedb.org/t/p/w1280/sJiHVM0A3OXDVxl4Z6a7ihMPHfm.jpg",
      rating: 5,
     sinopsis: "Después de establecerse en Green Hills, Sonic se muere por demostrar que tiene madera de auténtico héroe, pero Robotnik regresa con nuevo compañero Knuckles, en busca de una esmeralda que tiene el poder de destruir civilizaciones, pero Sonic no está solo, le ayudará Tails."
       },
        {
      id_film: 39,
      title: "El país de los sueños",
      genre: "Infantil",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w1280/xvsftW0ai916VTtH2gPjSFC7mGN.jpg",
      rating: 7,
     sinopsis: "Una niña busca a su padre, desaparecido en un místico país de los sueños, con la ayuda de una gran criatura mitad hombre y mitad monstruo."
       },
         {
      id_film: 40,
      title: "Black Adam",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/moDLTCdLx38kMhN53KOTw0LdWMh.jpg",
      rating: 6,
     sinopsis: "Casi 5.000 años después de haber sido dotado de los poderes omnipotentes de los antiguos dioses y encarcelado con la misma rapidez, Black Adam es liberado de su tumba terrenal, listo para desatar su forma única de justicia en el mundo moderno."
       },
          {
      id_film: 41,
      title: "Socios y sabuesos",
      genre: "Comedia",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w1280/mPRTuakCxvN5hm20vPHzSgmB52n.jpg",
      rating: 5,
     sinopsis: "Scott Turner es un meticuloso detective que está investigando un difícil caso de homicidio. Un día encuentra en la calle a un perro desgarbado, vulgar y con muy malos modales, al que decide adoptar. El chucho se convierte en el mejor ayudante que nunca ha tenido."
       },
           {
      id_film: 42,
      title: "El ultimo gran héroe",
      genre: "Comedia",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w1280/wsqkU03Ujr4L6f0KoW1c5YTcjQP.jpg",
      rating: 5,
     sinopsis: "Danny Madigan es un fantasioso chico, ferviente admirador de Jack Slater, el mayor héroe del cine de acción. Nunca se pierde ninguna de sus películas, así que, ante el estreno de su última superproducción, el viejo acomodador del cine le regala al joven fan una entrada para que la vea en primicia. Gracias a esa entrada, que resulta tener poderes mágicos, Danny consigue introducirse en la pantalla y vivir trepidantes aventuras con Jack."
       },
            {
      id_film: 43,
      title: "Noche en el museo",
      genre: "Comedia",
      minAge: 3,
      poster: "	https://www.themoviedb.org/t/p/w1280/5XG0xupSju8QS4KBnM8181Ebt0B.jpg",
      rating: 7,
     sinopsis: " Un padre divorciado trata de establecerse, impresionar a su hijo y encontrar su destino. Él se presenta para un trabajo como vigilante nocturno en el Museo Americano de Historia Natural de la ciudad de Nueva York y, posteriormente, descubre que los objetos expuestos, animados por un artefacto mágico de Egipto, vuelven a la vida durante la noche. Al principio le va muy mal tratando de mantener el orden y la calma en el museo, pero al final se vuelve muy buen amigo de todos y juntos ayudan a recuperar aquel artefacto mágico egipcio, ya que ha sido robado por los antiguos vigilantes del museo."
       },
             {
      id_film: 44,
      title: "La Máscara",
      genre: "Comedia",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w1280/sW0tABq2gGGzdwHKhBs2hupEK11.jpg",
      rating: 7,
     sinopsis: "Stanley es un ingenuo empleado de banca incapaz de enterarse de cuándo se aprovechan de él, al que su jefe mangonea, al que su casera humilla, y al que solamente su perro parece ser capaz de aguantar. Su amigo Charlie le invita a ir al cabaret Coco Bongo para intentar estimularle y conseguir que espabile, pero antes de que eso ocurra, aparece la bella Tina Carlyle, que entra en el banco para hablar con Stanley y de paso fotografiar la caja fuerte con una mini cámara. Es entonces cuando Stanley encuentra una máscara que le da grandes poderes y que también le quita todos sus miedos: ahora es libre de actuar como quiera."
       },
              {
      id_film: 45,
      title: "Dos tontos muy tontos",
      genre: "Comedia",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w1280/1Z8qsIw3c8YFPXu1MbAeNHehZJw.jpg",
      rating: 7,
     sinopsis: " Lloyd y Harry son dos amigos bastantes idiotas cuyas vidas son un auténtico desastre. El primero trabaja como chófer de una limousina, y el segundo se dedica a transportar perros. Su situación se complica aún más, cuando Lloyd se enamora de una chica adinerada que desaparece dejando olvidado un maletín. A partir de ese instante, Lloyd y Harry emprenderán un viaje por todo el país para devolvérselo."
       },
               {
      id_film: 46,
      title: "Solo en casa",
      genre: "Comedia",
      minAge: 8,
      poster: "https://www.themoviedb.org/t/p/w1280/rjc2a9N5pro1xGsSvvnJ1JDXRGm.jpg",
      rating: 8,
     sinopsis: "Kevin McAllister es un niño de ocho años, miembro de una familia numerosa, que accidentalmente se queda abandonado en su casa cuando toda la familia se marcha a pasar las vacaciones a Francia. Kevin aprende a valerse por sí mismo e incluso a protegerse de Harry y Marv, dos bribones que se proponen asaltar todas las casas cerradas de su vecindario. Cuando su madre Kate lo hecha en falta, realiza un pintoresco viaje de vuelta contra reloj a Chicago para recuperar a su hijo."
       },
                {
      id_film: 47,
      title: "Dragon Ball Z: La resurreción de Freezer",
      genre: "Acción",
      minAge: 8,
      poster: "	https://www.themoviedb.org/t/p/w1280/mbgpEDDQFFFQz2Q7T8bXpbeUkY9.jpg",
      rating: 9,
     sinopsis: "Después de que Bills, el Dios de la destrucción, decidiera no destruir la Tierra, se vive una gran época de paz. Hasta que Sorbet y Tagoma, antiguos miembros élite de la armada de Freezer, llegan a la Tierra con el objetivo de revivir a su líder por medio de las Bolas de Dragón. Su deseo es concedido y ahora Freezer planea su venganza en contra de los Saiyajin. La historia hace que una gran oleada de hombres bajo el mando de Freezer lo acompañe."
       },
                 {
      id_film: 48,
      title: "Los gemelos golpean dos veces",
      genre: "Comedia",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/z17mNScwFyZ9sOplnd2R9aQOmlr.jpg",
      rating: 6,
     sinopsis: "Dos gemelos que vinieron al mundo por un experimento de carácter científico se encuentran al cabo de los años, tras haber pasado la mayor parte de sus vidas separados. Una vez juntos tratan de encontrar a su madre que según parece reside cerca de la frontera de México. El viaje hasta allí será aprovechado por uno de ellos para entregar una valiosa mercancía."
       },
         {
      id_film: 49,
      title: "Terminator",
      genre: "Acción",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w1280/kbPqRWsGS1siVUeEFVtLKloTG0Y.jpg",
      rating: 8,
     sinopsis: "Un cyborg ha sido enviado desde el futuro en una misión mortal: eliminar a Sarah Connor, una joven cuya vida tendrá una gran importancia en los próximos años. Sarah tiene sólo un protector —Kyle Reese— también enviado desde el futuro. El Terminator utiliza su inteligencia excepcional y fuerza para encontrar a Sarah, pero ¿hay alguna forma de detener al cyborg aparentemente indestructible?"
       },
          {
      id_film: 50,
      title: "Scary Movie",
      genre: "Comedia",
      minAge: 18,
      poster: "	https://www.themoviedb.org/t/p/w1280/fHWR3YplPQWciYzxEity2kyDoDn.jpg",
      rating: 8,
     sinopsis: "Tras el asesinato de una bella estudiante, un grupo de adolescentes descubren que hay un asesino entre ellas. La heroína, Cindy, y su grupo de desconcertantes amigos, serán aterrorizados por un singular psicópata enmascarado que pretende vengarse de ellos por haberlo atropellado el pasado Halloween."
       },
           {
      id_film: 51,
      title: "Ace Ventura",
      genre: "Comedia",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/nITLSFHonQJGVrnfDzfNqvtbOjO.jpg",
      rating: 6,
     sinopsis: "El detective Ace Ventura, especializado en rescatar animales secuestrados, recibe el encargo de localizar y rescatar el delfin Copo de Nieve, mascota del equipo de fútbol de Miami, que ha sido secuestrado el día anterior a la gran final que debe disputar el equipo."
       },
            {
      id_film: 52,
      title: "Resacón en las Vegas",
      genre: "Comedia",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w1280/rqeim09TdaflSvPNVnCTBjUHlKu.jpg",
      rating: 9,
     sinopsis: "Es la historia de una desmadrada despedida de soltero en la que el futuro novio y sus tres amigos, dos días antes de la boda, se montan la juerga padre en Las Vegas. Doug viaja a la ciudad del juego con sus mejores amigos Phil y Stu, así como su futuro cuñado Alan. La juerga es de campeonato y, como era de esperar, a la mañana siguiente tienen una resaca monumental. El problema es que, siendo incapaces de recordar nada de lo ocurrido durante la noche anterior, se encuentran con que el prometido ha desaparecido, topándose en su lugar con otras dos sorpresas en la suite del hotel: un tigre y un bebé."
       },
             {
      id_film: 53,
      title: "101 Dálmatas",
      genre: "Infantil",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wny5QtN4D9KYRaW3jDCNMSCQ8gc.jpg",
      rating: 7,
     sinopsis: "Pongo y Perdita, los dalmatas protagonistas, son una feliz pareja canina que vive rodeada de sus cachorros junto a sus amos, Roger y Anita. Pero la felicidad no es eterna y hay una malvada mujer, que vive en una gran mansion, que es la mayor enemiga del perro.Cuando se entera de que los protagonistas tienen nada menos que quince cachorros dalmatas, su sueño de obtener un exclusivo abrigo de piel de los pequeños perros, se convierte en una obsesion. Para conseguirlo contrata a dos ladrones y pone en marcha un malvado plan con el unico fin de secuestrar a los dalmatas."
       },
              {
      id_film: 54,
      title: "Forrest Gump",
      genre: "Comedia",
      minAge: 12,
      poster: "	https://www.themoviedb.org/t/p/w1280/azV6hV99lYkdhydsQbJCI6FqMl4.jpg",
      rating: 9,
     sinopsis: "Forrest Gump es un chico con deficiencias mentales no muy profundas y con alguna incapacidad motora que, a pesar de todo, llegará a convertirse, entre otras cosas, en un héroe durante la Guerra del Vietnam. Su persistencia y bondad le llevarán a conseguir una gran fortuna, ser objeto del clamor popular y a codearse con las más altas esferas sociales y políticas del país. Siempre sin olvidar a Jenny, su gran amor desde que era niño."
       },
               {
      id_film: 55,
      title: "Hércules",
      genre: "Infantil",
      minAge: 3,
      poster: "	https://www.themoviedb.org/t/p/w1280/xlqfsD5hFohzDL0Cf11bxbUrMuZ.jpg",
      rating: 9,
     sinopsis: "Hércules, el hijo de Hera y el dios Zeus, es robado del Olimpo por los secuaces de Hades, que tienen la misión de despojarle de su inmortalidad. Hércules crecerá en un mundo de mortales hasta que le llegue la hora de regresar al Olimpo."
       },
                {
      id_film: 56,
      title: "El Grinch",
      genre: "Comedia",
      minAge: 8,
      poster: "	https://www.themoviedb.org/t/p/w1280/yCZ3xAPM5009ltBUUwPtCeWKQWy.jpg",
      rating: 6,
     sinopsis: "Cada año, en Navidad, los lugareños perturban su pacífica soledad con celebraciones cada vez más desmesuradas, luminosas y ruidosas. Cuando los Quién declaran que ese año van a preparar una Navidad el triple de grande, el Grinch se da cuenta de que solo hay un modo de recuperar algo de paz y silencio: robar la Navidad. Para ello, decide hacerse pasar por Santa Claus en Nochebuena, haciéndose con un reno muy peculiar para tirar de su trineo. Mientras tanto, en Villa Quién, una dulce niña llamada Cindy-Lou, desbordante de espíritu navideño, planea con sus amigos atrapar a Papá Noel durante su visita en Nochebuena para darle las gracias por ayudar a su trabajadora madre. Sin embargo, a medida que se acerca la noche mágica, sus buenas intenciones amenazan con chocar con las del Grinch, mucho más perversas."
       },
                 {
      id_film: 57,
      title: "La Familia Adams",
      genre: "Comedia",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/6RqnaUcDH2dpR2kmdnmSEHTcS0V.jpg",
      rating: 6,
     sinopsis: "El delirante y gótico estilo de vida de la peculiar familia Addams se ve amenazado peligrosamente cuando el codicioso dúo que forman madre e hijo, con la ayuda de un abogado sin ningún escrúpulos, conspiran para hacerse con la fortuna familiar..."
       },
                  {
      id_film: 58,
      title: "Los Simpsons: La película",
      genre: "Infantil",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xLy8FyvbSDCnl66lKS8i2Qc6hE3.jpg",
      rating: 6,
     sinopsis: "Homer debe salvar al mundo de una catástrofe que él mismo ha provocado. Todo comienza con Homer, su nueva mascota, un cerdo, y un silo lleno de excrementos que tiene una fuga, una combinación que desencadena un desastre distinto a todo lo que Springfield haya experimentado jamás. Mientras Marge está indignada por la monumental metedura de pata de su patán marido, una turba vengativa cae sobre el hogar de los Simpson..."
       },
                   {
      id_film: 59,
      title: "El bebé jefazo: Negocios de familia",
      genre: "Infantil",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w1280/hvO2pc9X7kt7HZr5liSlk2MQA0Z.jpg",
      rating: 6,
     sinopsis: "Los hermanos Templeton se han convertido en adultos y se han alejado el uno del otro, pero un nuevo jefe bebé con un enfoque de vanguardia está a punto de unirlos nuevamente e inspirar un nuevo negocio familiar."
       },
                    {
      id_film: 60,
      title: "Rambo: Acorralado Parte II",
      genre: "Acción",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w1280/pDsrygpyGl5o5hkvpV5JzK85dYE.jpg",
      rating: 8,
     sinopsis: "Rambo es excarcelado y enviado de vuelta al Vietnam con una nueva misión: averiguar el paradero de unos soldados norteamericanos desaparecidos. Tras saltar en paracaídas en la jungla, portando únicamente un cuchillo y un arco con flechas, se le dice que no ataque al enemigo y que sólo haga fotografías de reconocimiento. Pero el plan no saldrá como estaba previsto"
       },
                     {
      id_film: 61,
      title: "Conan, el destructor",
      genre: "Acción",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w1280/m5i7S46DT1ESy7URkh2l92awGRr.jpg",
      rating: 9,
     sinopsis: "La poderosa Reina Taramis promete a Conan hacer volver a su amada del reino de la muerte, pero le impone una condición: debe traerle un legendario cuerno incrustado de piedras preciosas y una bella y joven princesa. Lo que Conan ignora es que la Reina quiere utilizar el cuerno para despertar al durmiente dios Dagoth y sacrificarle a la joven princesa. Enfrentado con enemigos mortales y sobrenaturales, Conan debe convocar a las fuerzas del Bien para derrotar a Taramis e incluso al mismísimo dios Dagoth."
       },
                      {
      id_film: 62,
      title: "Kill Bill",
      genre: "Acción",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lfj709InbmljVqAXgUk2qjnujNN.jpg",
      rating: 8,
     sinopsis: "Uma Thurman es una asesina que, el día de su boda, es atacada por los miembros de la banda de su jefe, Bill (David Carradine). Logra sobrevivir al ataque, aunque queda en coma. Cinco años después despierta con un trozo de metal en la cabeza y un gran deseo de venganza en su corazón."
       },
                       {
      id_film: 63,
      title: "Los Vengadores",
      genre: "Acción",
      minAge: 12,
      poster: "	https://www.themoviedb.org/t/p/w1280/ugX4WZJO3jEvTOerctAWJLinujo.jpg",
      rating: 8,
     sinopsis: "Cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury, director de la Agencia SHIELD, decide reclutar a un equipo para salvar al mundo de un desastre casi seguro."
       },
                        {
      id_film: 64,
      title: "Superman",
      genre: "Acción",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/d7px1FQxW4tngdACVRsCSaZq0Xl.jpg",
      rating: 8,
     sinopsis: "Desde una galaxia remota, un recién nacido es enviado por sus padres al espacio debido a la inminente destrucción del planeta donde viven. La nave aterriza en la Tierra, y el niño es adoptado por unos granjeros que le inculcan los mejores valores humanos. Con los años el joven se irá a Metrópolis y allí usará sus poderes sobrenaturales para luchar contra el mal..."
       },
                         {
      id_film: 65,
      title: "Cars",
      genre: "Infantil",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w1280/nqii8TqllZRainaNhQkJLNoSbMv.jpg",
      rating: 9,
     sinopsis: "El aspirante a campeón de carreras Rayo McQueen está sobre la vía rápida al éxito, la fama y todo lo que él había soñado, hasta que por error toma un desvío inesperado en la polvorienta y solitaria Ruta 66. Su actitud arrogante se desvanece cuando llega a una pequeña comunidad olvidada que le enseña las cosas importantes de la vida que había olvidado."
       },
                          {
      id_film: 66,
      title: "Ocean's Eleven",
      genre: "Acción",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w1280/dHEqsdjGL17XB7SZH9It4ntbReT.jpg",
      rating: 7,
     sinopsis: "Danny Ocean es un carismático ladrón que, tan sólo 24 horas después de cumplir una larga condena en prisión, ya está planeando su próximo delito. Su objetivo: realizar el mayor atraco de casinos de la historia. Para ello formará un equipo de once hombres, cada uno de ellos el mejor en su campo. Sin embargo surgirá un problema inesperado: el dueño de los locales, Terry Benedic, está saliendo con Tess, su ex-mujer."
       },
                           {
      id_film: 67,
      title: "Predator: La presa",
      genre: "Acción",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w1280/sNAMqQ9T7YnXnvUSufeWzaRgK6Y.jpg",
      rating: 6,
     sinopsis: "Ambientada hace 300 años en la Nación Comanche. Naru es una joven guerrera, feroz y altamente hábil, que se crió a la sombra de algunos de los cazadores más legendarios que deambulan por las Grandes Llanuras. Cuando el peligro amenaza su campamento, se dispone a proteger a su gente. La presa a la que acecha y, en última instancia, se enfrenta, resulta ser un depredador alienígena evolucionado con un arsenal técnicamente avanzado, lo que deriva en un enfrentamiento cruel y aterrador entre los dos adversarios."
       },
                            {
      id_film: 68,
      title: "Alien, el octavo pasajero",
      genre: "Acción",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pZ9cAe5FxexJjpCaeiETbXzz3Fs.jpg",
      rating: 8,
     sinopsis: "De regreso a la Tierra, la nave de carga Nostromo interrumpe su viaje y despierta a sus siete tripulantes. El ordenador central, MADRE, ha detectado la misteriosa transmisión de una forma de vida desconocida, procedente de un planeta cercano aparentemente deshabitado. La nave se dirige entonces al extraño planeta para investigar el origen de la comunicación."
       },
      {
      id_film: 69,
      title: "A todo tren 2: Sí, les ha pasado otra vez",
      genre: "Infantil",
      minAge: 3,
      poster: "https://www.themoviedb.org/t/p/w1280/cIiADRt9KGEqYy1293BBBm2IQG.jpg",
      rating: 9,
     sinopsis: "Hace un año Ricardo (Santiago Segura) y Felipe (Leo Harlem), encargados de llevar a los niños a un campamento, se quedaron fuera del tren dejando a los niños dentro. Clara (Paz Vega) no se fía ya de ellos y decide este año llevar a los niños personalmente con ayuda de su amiga Susana (Paz Padilla). Sin embargo, ahora serán ellas las que a raíz de un accidente se separen de los niños. Secuela de 'A todo tren. Destino Asturias'."
       },
       {
      id_film: 70,
      title: "Torrente, el brazo tonto de la ley",
      genre: "Comedia",
      minAge: 18,
      poster: "https://www.themoviedb.org/t/p/w1280/3wAeqkJ8vq7TjkfUp4ikHT15oVn.jpg",
      rating: 10,
     sinopsis: "Torrente es un policía español, fascista, machista, racista, alcohólico y del Atleti. En su mismo inmueble vive un chaval, Rafi, al que le gustan las peliculas de acción y las pistolas, y que vive con su madre y su prima Amparito, una ninfómana. Juntos, Torrente y Rafi, patrullarán por la noche las calles de la ciudad."
       },
  ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};