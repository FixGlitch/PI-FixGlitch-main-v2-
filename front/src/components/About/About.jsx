import style from './About.module.css';

const About = () => {
  return (
    <div className={style.container}>
    <div className={style.aboutcard}>
        <div className={style.meta}>
          <div className={style.img}>
          <img src='https://hips.hearstapps.com/hmg-prod/images/rick-and-morty-s5-2-1625139647.jpg?crop=1xw:0.9956128509719222xh;center,top'></img>
          </div>
        </div>
        <div className={style.description}>
          <p>¡Bienvenidos a la página definitiva para todos los fanáticos de "Rick and Morty"! Aquí, en esta exhaustiva y meticulosa base de datos, te sumergirás en el intrigante y caótico universo creado por Dan Harmon y Justin Roiland. Prepárate para explorar y descubrir todo sobre los personajes, ya sean icónicos y famosos o incluso aquellos que solo han hecho fugaces apariciones en la serie.</p>
        </div>
      </div>
      <div className={style.aboutcard}>
        <div className={style.meta}>
          <div className={style.img}>
          <img src='https://elvertederodeideas.files.wordpress.com/2018/05/total-rickall.png?w=640'></img>
          </div>
        </div>
        <div className={style.description}>
          <p>Imagina navegar por una interfaz elegante y fácil de usar que te permite explorar todos los rincones del multiverso de "Rick and Morty". Desde los dimensiones alternativas visitadas por nuestros protagonistas hasta las civilizaciones alienígenas con las que han interactuado, nuestra base de datos te llevará en un viaje único a través de cada episodio y temporada. Cada personaje, ya sea un miembro recurrente de la familia Smith o un ser extraño encontrado en un planeta lejano, está meticulosamente documentado aquí.</p>
        </div>
      </div>
      <div className={style.aboutcard}>
        <div className={style.meta}>
          <div className={style.img}>
          <img src='https://2.bp.blogspot.com/-tw2Sruqsg6U/WbQY5Ugl_NI/AAAAAAAAZfw/FYw0VuZW_Kwbw8lQSIe1M8idAfnbx9BfwCLcBGAs/s640/RickAndMorty_teor%25C3%25ADa_header.jpg'></img>
          </div>
        </div>
        <div className={style.description}>
          <p>Pero esto no es solo una lista de nombres y descripciones. No, aquí encontrarás mucho más. Cada perfil de personaje está lleno de detalles, anécdotas y curiosidades que te ayudarán a comprender mejor el universo cósmico y a veces caótico de "Rick and Morty". Desde los antecedentes y motivaciones de los personajes hasta sus conexiones con otros en el multiverso, nuestra base de datos te brinda una visión completa de cada individuo que ha tenido el privilegio (o la desgracia) de aparecer en pantalla.</p>
        </div>
      </div>
      <div className={style.aboutcard}>
        <div className={style.meta}>
          <div className={style.img}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLyX-lroDGCZVFFAADHKtJtu9esz-aDOEBm0V8ygmHjmwppP-CaZ8x_puO6vDB_g5Jnwg&usqp=CAU'></img>
          </div>
        </div>
        <div className={style.description}>
          <p>En resumen, nuestra página de "Rick and Morty" es mucho más que una simple base de datos de personajes. Es un viaje en sí mismo, una odisea a través de los vastos y locos confines de la mente de Dan Harmon y Justin Roiland. Así que únete a nosotros mientras exploramos cada rincón y grieta del multiverso, revelando los secretos detrás de cada personaje, ya sea un protagonista central o un simple espectador en este espectáculo cósmico y absurdo. ¡Prepárate para sumergirte en el caos y la genialidad de "Rick and Morty" como nunca antes lo habías hecho!</p>
        </div>
      </div>
    </div>
  )
}

export default About;