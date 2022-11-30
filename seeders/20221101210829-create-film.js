'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('films', [
      {
      id_film: 1,
      title: "Shrek",
      genre: "Comedia",
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
      genre: "Accion",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/kbeWnmnHNEnuVej6wcjUv0eY6IL.jpg",
      rating: 3,
      sinopsis: "Atormentado por haber visto morir a sus padres delante suyo, Bruce Wayne se enfunda cada noche en el traje de Batman, adopta la terrorífica forma de un murciélago y surca los tejados de Gotham City combatiendo el crimen y manteniendo a raya la corrupción de su ciudad. Pero esta vez Batman tendrá que enfrentarse a su más terrible enemigo, El Joker, que pretende someter a toda la ciudad bajo los deseos de su mente perturbada."
    },
    {
      id_film: 4,
      title: "Origen",
      genre: "Ciencia ficcion",
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
      genre: "Accion",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEiyyNU0CVZBgmH08l3GMgw4BfZ.jpg",
      rating: 6,
     sinopsis: "El ex operador de Fuerzas Especiales Frank Martin vive lo que parece ser una vida tranquila a orillas del Mediterráneo francés, donde presta sus servicios como un “transportador”, un mercenario que traslada bienes —humanos o de cualquier tipo— de un lugar a otro. Siempre sin preguntas de por medio. Frank, que en su Mercedes equipado lleva a cabo misiones secretas y a veces peligrosas, se apega a un estricto juego de 3 reglas que nunca rompe. Regla numero uno: Nunca modifiques el trato. Dos: Omitir nombres, Frank no quiere saber para quién trabaja o qué es lo que transporta. Tres: Nunca ver qué hay dentro del paquete. La carga más reciente de Frank aparenta ser igual a los incontables paquetes que ha entregado en el pasado. Ha sido contratado por un norteamericano conocido solamente como “Wall Street” para que lleve a cabo una entrega. Pero cuando Frank se detiene en el trayecto, se percata que su “paquete” se mueve..."
    },
    {
      id_film: 7,
      title: "Seven",
      genre: "Accion",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uVPcVz4b2hnSGrXYLdIGRXwcivs.jpg",
      rating: 7,
     sinopsis: "El teniente Somerset, del departamento de homicidios, está a punto de jubilarse y ser reemplazado por el ambicioso y brillante detective David Mills. Ambos tendrán que colaborar en la resolución de una serie de asesinatos cometidos por un psicópata que toma como base la relación de los siete pecados capitales: gula, pereza, soberbia, avaricia, envidia, lujuria e ira. Los cuerpos de las víctimas, sobre los que el asesino se ensaña de manera impúdica, se convertirán para los policías en un enigma que les obligará a viajar al horror y la barbarie más absoluta."
    },
    {
      id_film: 8,
      title: "El Francotirador",
      genre: "Accion",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/kSAdNmbIcmjtZrf9qtFwgHhZxl3.jpg",
      rating: 8,
     sinopsis: "El marine del grupo de operaciones especiales de la Marina de Estados Unidos Chris Kyle es enviado a Irak con una sola misión: proteger a sus compañeros de ejército. Su precisión milimétrica salva incontables vidas en el campo de batalla y, a medida que se extienden sus valientes hazañas, se gana el apodo de 'Leyenda'. Sin embargo, su reputación también crece detrás de las líneas enemigas, de manera que ponen precio a su cabeza y se convierte en objetivo prioritario de los insurgentes. Al mismo tiempo también se está enfrentando a otra batalla en casa: ser un buen marido y padre desde el otro lado del mundo."
    },
    {
      id_film: 9,
      title: "Sharknado",
      genre: "Comedia",
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
      genre: "Accion",
      minAge: 16,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v0eQLbzT6sWelfApuYsEkYpzufl.jpg",
      rating: 9,
      sinopsis: "Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro."
       },
    {
      id_film: 13,
      title: "Regreso al futuro",
      genre: "Ciencia ficcion",
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
      genre: "Ciencia ficcion",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w1280/4BGVZSwv5n0hMIAWwiSjMFDQ63K.jpg",
      rating: 8,
      sinopsis: "Truman Burbank es un hombre corriente y algo ingenuo que ha vivido toda su vida en uno de esos pueblos donde nunca pasa nada. Sin embargo, de repente, unos extraños sucesos le hacen sospechar que algo anormal está ocurriendo. Todos sus amigos son actores, toda su ciudad es un plató, toda su vida está siendo filmada y emitida como el reality más ambicioso de la historia."
       },
    {
      id_film: 17,
      title: "Coco",
      genre: "Comedia",
      minAge:6,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lUZZhYLLDU4g4XGQ5tvjYNVytxc.jpg",
      rating: 7,
      sinopsis: "Un joven aspirante a músico llamado Miguel se embarca en un viaje extraordinario a la mágica tierra de sus ancestros. Allí, el encantador embaucador Héctor se convierte en su inesperado amigo y le ayuda a descubrir los misterios detrás de las historias y tradiciones de su familia."
       },
    {
      id_film: 18,
      title: "El señor de los anillos: El retorno del Rey",
      genre: "Aventura",
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
      genre: "Accion",
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
      genre: "Ciencia ficcion",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lTeTHvfUHEJDK7o3jg06lYi2bLR.jpg",
      rating: 8,
     sinopsis: "El multimillonario John Hammond tiene una idea para un espectacular parque temático: una isla retirada donde los visitantes puedan observar dinosaurios reales. Con la última tecnología en el desarrollo de ADN, los científicos pueden clonar braquiosaurios, triceratops, velociraptors y un tiranosaurio rex, utilizando para ello la sangre fosilizada en ámbar contenida en insectos que los mordieron hace millones de años. Los paleontólogos Alan Grant, Ellie Sattler y Ian Malcolm visitan el parque y quedan muy sorprendidos con los resultados obtenidos. Pero cuando un problemático empleado manipula el sofisticado sistema de seguridad los dinosaurios escapan, obligando a los visitantes a luchar por su supervivencia."
       },
    {
      id_film: 24,
      title: "El caballero oscuro: La Leyenda renace",
      genre: "Accion",
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
      genre: "Aventura",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nHDpaLB6gMKyD8hMtSthtV7yPt9.jpg",
      rating: 6,
     sinopsis: "Después de buscar fortuna durante cinco años, Westley retorna a su tierra para casarse con su amada, la bella Buttercup, a la que había jurado amor eterno. Sin embargo, para recuperarla habrá de enfrentarse a Vizzini y sus esbirros. Una vez derrotados éstos, tendrá que superar el peor de los obstáculos: el príncipe Humperdinck pretende desposar a la desdichada Buttercup, pese a que ella no lo ama, ya que sigue enamorada de Westley."
       },
    {
      id_film: 27,
      title: "Tortugas Ninja",
      genre: "Ciencia ficcion",
      minAge: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uDJipJy4zwIN9F7stcaTGwfD9yP.jpg",
      rating: 8,
      sinopsis: "Después de haber sido contaminadas con una misteriosa sustancia química, llamada Ooze, cuatro tortugas que viven en las alcantarillas de Nueva York se transforman y mutan, de repente, en grandes tortugas. Ahora pueden hablar y caminar como un ser humano. Entrenadas por una vieja pero sabia rata (el Maestro Splinter) las cuatro tortugas, Leonardo, Miguel Ángel, Donatello y Rafael, aprenderán técnicas ninja para enfrentarse a los más peligrosos criminales. Sus enemigos son los miembros de una secta llamada El clan del pie, liderada por Shredder, quien quiere convertirse en el amo del mundo."
       },
    {
      id_film: 28,
      title: "Los Goonies",
      genre: "Aventura",
      minAge: 12,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h0QoQSodfdd3VTBqlFb2QP7wIbL.jpg",
      rating: 9,
      sinopsis: "Mikey, un muchacho de trece años, que junto con su hermano mayor y sus amigos se hacen llamar 'Los Goonies', decide subir a jugar al desván de su casa, donde su padre guarda antigüedades. Allí, el grupo encuentra el mapa de un tesoro."
       },
    {
      id_film: 29,
      title: "Rocky",
      genre: "Accion",
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