export const movies = [
    {
      id: 1,
      title: 'Inception',
      image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
      category: 'Sci-Fi',
      year: 2010,
      rating: 8.8,
      synopsis: 'Un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, se le da la tarea inversa de plantar una idea en la mente de un CEO.',
      classification: 'PG-13',
      reviews: [
        {
          username: 'Manu',
          comment: 'Una obra maestra del cine moderno. Christopher Nolan demuestra su maestría en la narrativa compleja.'
        },
        {
          username: 'Ale',
          comment: 'Los efectos visuales siguen impresionando después de tantos años. La secuencia del pasillo giratorio es legendaria.'
        }
      ]
    },
    {
      id: 2,
      title: 'El Padrino',
      image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      category: 'Drama',
      year: 1972,
      rating: 9.2,
      synopsis: 'El patriarca envejecido de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su reacio hijo.',
      classification: 'R',
      reviews: [
        {
          username: 'Imdb',
          comment: 'Una película atemporal que define el género de gangsters. Marlon Brando está impresionante.'
        },
        {
          username: 'ReviewsMX',
          comment: 'Cada escena es una clase magistral de cinematografía y dirección. Coppola en su mejor momento.'
        }
      ]
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      image: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      category: 'Crimen',
      year: 1994,
      rating: 8.9,
      synopsis: 'Las vidas de dos sicarios, un boxeador, la esposa de un gángster y un par de bandidos se entrelazan en cuatro historias de violencia y redención.',
      classification: 'R',
      reviews: [
        {
          username: 'TarantinoFan',
          comment: 'La estructura no lineal y los diálogos inteligentes revolucionaron el cine de los 90s.'
        },
        {
          username: 'CultMovieLover',
          comment: 'Las actuaciones son sobresalientes. Samuel L. Jackson entrega líneas memorables.'
        }
      ]
    },
    // Resto de código
    {
      id: 4,
      title: 'El Señor de los Anillos: El Retorno del Rey',
      image: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      category: 'Fantasía',
      year: 2003,
      rating: 9.0,
      synopsis: 'Gandalf y Aragorn lideran el mundo de los hombres contra la armada de Sauron para distraer su atención de Frodo y Sam, quienes se aproximan al Monte del Destino con el Anillo Único.',
      classification: 'PG-13',
      reviews: [
        {
          username: 'TolkienFan',
          comment: 'Un final épico para la trilogía. Las batallas son espectaculares y el cierre emocional es perfecto.'
        },
        {
          username: 'FantasyLover',
          comment: 'Peter Jackson logró lo imposible al adaptar estos libros. Una obra maestra del cine fantástico.'
        }
      ]
    },
    {
      id: 5,
      title: 'Ciudad de Dios',
      image: 'https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      category: 'Crimen',
      year: 2002,
      rating: 8.6,
      synopsis: 'En las favelas de Río de Janeiro durante los años 70s, dos niños toman caminos diferentes en la vida: uno se convierte en fotógrafo, el otro en traficante.',
      classification: 'R',
      reviews: [
        {
          username: 'BrazilianCinema',
          comment: 'Una representación brutal pero honesta de la vida en las favelas. La cinematografía es innovadora.'
        },
        {
          username: 'WorldCinemaBuff',
          comment: 'La narrativa no lineal y el desarrollo de personajes hacen de esta película una experiencia inolvidable.'
        }
      ]
    },
    {
      id: 6,
      title: 'Parásitos',
      image: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
      category: 'Drama',
      year: 2019,
      rating: 8.5,
      synopsis: 'La familia Kim, todos desempleados, se interesan particularmente en la vida de la adinerada familia Park. Un incidente inesperado ocurre, lo que les da la oportunidad de infiltrarse más profundamente en la vida de la familia.',
      classification: 'R',
      reviews: [
        {
          username: 'OscarWatcher',
          comment: 'Una crítica social brillante envuelta en una película de género que mezcla comedia, drama y thriller.'
        },
        {
          username: 'KoreanFilmFan',
          comment: 'Bong Joon-ho combina magistralmente la tensión y el humor negro para crear algo verdaderamente único.'
        }
      ]
    },
    {
      id: 7,
      title: 'La La Land',
      image: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg',
      category: 'Musical',
      year: 2016,
      rating: 8.0,
      synopsis: 'Mientras navegan por sus carreras en Los Ángeles, un pianista y una actriz se enamoran mientras intentan conciliar sus aspiraciones para el futuro.',
      classification: 'PG-13',
      reviews: [
        {
          username: 'MusicLover',
          comment: 'Un homenaje maravilloso a la era dorada de Hollywood con música cautivadora y coreografías impresionantes.'
        },
        {
          username: 'ModernClassics',
          comment: 'Emma Stone y Ryan Gosling tienen una química innegable. El final es agridulce pero perfecto.'
        }
      ]
    },
    {
      id: 8,
      title: 'El Caballero de la Noche',
      image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      category: 'Acción',
      year: 2008,
      rating: 9.0,
      synopsis: 'Cuando la amenaza conocida como el Joker causa estragos y caos en la ciudad de Gotham, Batman debe aceptar una de las mayores pruebas psicológicas y físicas de su capacidad para combatir la injusticia.',
      classification: 'PG-13',
      reviews: [
        {
          username: 'BatmanFanatic',
          comment: 'Heath Ledger ofrece una actuación icónica como el Joker. Redefinió lo que puede ser una película de superhéroes.'
        },
        {
          username: 'ComicBookCritic',
          comment: 'La película trasciende el género de superhéroes para convertirse en un thriller criminal complejo y fascinante.'
        }
      ]
    },
    {
      id: 9,
      title: 'Interestelar',
      image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      category: 'Sci-Fi',
      year: 2014,
      rating: 8.6,
      synopsis: 'Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de garantizar la supervivencia de la humanidad.',
      classification: 'PG-13',
      reviews: [
        {
          username: 'SpaceEnthusiast',
          comment: 'La combinación de ciencia real y elementos emocionales crea una experiencia cinematográfica impactante.'
        },
        {
          username: 'PhysicsFan',
          comment: 'La representación de conceptos como la relatividad y los agujeros negros es fascinante y visualmente impresionante.'
        }
      ]
    },
    {
      id: 10,
      title: 'Roma',
      image: 'https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_.jpg',
      category: 'Drama',
      year: 2018,
      rating: 7.7,
      synopsis: 'Una crónica de un año en la vida de una empleada doméstica de clase media en la Ciudad de México a principios de los años 70.',
      classification: 'R',
      reviews: [
        {
          username: 'CinefiloMexicano',
          comment: 'La cinematografía en blanco y negro es impresionante. Cuarón captura la esencia del México de los 70s.'
        },
        {
          username: 'FilmArtLover',
          comment: 'Una película íntima y personal que se convierte en una obra de arte visual. Las actuaciones naturalistas son extraordinarias.'
        }
      ]
    }
  ]