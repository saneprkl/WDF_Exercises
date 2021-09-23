import React from 'react'
import styles from './MainNews.module.css';
import turvallisuus from './img/turvallisuus.webp';
import komentajat from './img/komentajat.jpg';
import haavisto from './img/haavisto.jpg';

export default function MainNews() {
    return (
        <div className={ styles.background }>
        <div className={ styles.container }>
            <div className={ styles.bigTopic }>Turvallisuuspolitiikka</div>
            <div><img src={ turvallisuus } className={ styles.bigPicture }></img></div>
            <div className={ styles.title }><span className={ styles.bigTitle }>Ulkopolitiikka</span><span className={ styles.line }> |</span>
                EU on asettanut Suomessa vierailevan Venäjän asevoimien komentajan matkustuskieltoon - Haavisto: "Poikkeus voidaan tehdä"
                <div className={ styles.topic }>Politiikka<span className={ styles.time }>22.9. 20:11</span><span className={ styles.bookmark}><i class="far fa-bookmark"></i></span></div>
                <div className={ styles.seperator }></div>
            
           
                <div className={ styles.smallNews }><div><span className={ styles.smallTitle }>Turvallisuuspolitiikka</span><span className={ styles.line2 }>|</span>
                <span className={ styles.smallText }>Venäjän ja Yhdysvaltaint asevoimien komentajat tapasivat Suomessa - "Strategisella tasolla tämä on todella merkittävää"</span></div>
                <img src={ komentajat } className={ styles.smallPicture }></img></div>
                <div className={ styles.topic }>Ulkomaat<span className={ styles.time }>22.9. 20:20</span><span className={ styles.bookmark}><i class="far fa-bookmark"></i></span></div>
                <div className={ styles.seperator }></div>

                <div className={ styles.smallNews }><div><span className={ styles.smallTitle }>Ulkopolitiikka</span><span className={ styles.line2 }>|</span>
                <span className={ styles.smallText }>Haavisto: Afganistania uhkaa "pelottava kehityskulku", romahdus aiheuttaisi Eurooppaan ulottuvan muuttoliikkeen.</span></div>
                <img src={ haavisto } className={ styles.smallPicture }></img></div>
                <div className={ styles.topic }>Politiikka<span className={ styles.time }>22.9. 21:47</span><span className={ styles.bookmark}><i class="far fa-bookmark"></i></span></div>
                <div className={ styles.seperator }></div>
            </div>
        </div>
        <div className={ styles.sideNews }>
            <div className={ styles.sideHeader }>Luetuimmat</div>
            <div className={ styles.sideUnderline }></div>
            <div className={ styles.sideContainer }><span className={ styles.number }>1</span><div><span className={ styles.sideTitle }>Tulipalot</span><span className={ styles.sideLine} >|</span><span className={ styles.sideTeaser }>Rivitalo palaa Helsingin Tapulikaupungissa, yksi loukkaantunut</span></div></div>
            <div className={ styles.sideSeperator }></div>
            <div className={ styles.sideContainer }><span className={ styles.number }>2</span><div><span className={ styles.sideTitle }>Energia</span><span className={ styles.sideLine} >|</span><span className={ styles.sideTeaser }>Onko tässä uusi ilmalämpöpumppu? Trendiksi noussut tekniikka tekee kerrostalokodeista miellyttäviä ympäri vuoden</span></div></div>
            <div className={ styles.sideSeperator }></div>
            <div className={ styles.sideContainer }><span className={ styles.number }>3</span><div><span className={ styles.sideTitle }>HS-gallup</span><span className={ styles.sideLine} >|</span><span className={ styles.sideTeaser }>Kokoomus vahvisti asemiaan gallupkärjessä, Spd:n kannatus hupeni hieman</span></div></div>
            <div className={ styles.sideSeperator }></div>
            <div className={ styles.sideContainer }><span className={ styles.number }>4</span><div><span className={ styles.sideTitle }>Suurvaltasuhteet</span><span className={ styles.sideLine} >|</span><span className={ styles.sideTeaser }>Kiinan ja USA:n väliset jännitteet kiristyvät Tyynellämerellä, mutta jos sota syttyisi, kumpi voittaisi?</span></div></div>
            <div className={ styles.sideSeperator }></div>
            <div className={ styles.sideContainer }><span className={ styles.number }>5</span><div><span className={ styles.sideTitle }>Terveys</span><span className={ styles.sideLine} >|</span><span className={ styles.sideTeaser }>Tommi lääkitsee itseään laittomalla kannabiksella, sillä ilman sitä hänen arkensa pysähtyisi - Yhä useampi suomalainen käyttää kannabista kivunhoidossa, asiantuntijat ovat erimielisiä sen tehosta</span></div></div>
            <div className={ styles.subscriber }><i class="far fa-gem"></i><span className={ styles.subText }>TILAAJILLE</span></div>
            <div className={ styles.sideSeperator }></div>
            <div className={ styles.sideContainer }><span className={ styles.number }>6</span><div><span className={ styles.sideTitle }>Ravintola-arvio</span><span className={ styles.sideLine} >|</span><span className={ styles.sideTeaser }>"Maut ovat Helsingin parhaimmistoa" - pitkään suljettuna ollut klassikko ravintola hurmasi kriitikon</span></div></div>
            <div className={ styles.subscriber }><i class="far fa-gem"></i><span className={ styles.subText }>TILAAJILLE</span></div>
            <div className={ styles.sideSeperator }></div>
            <div className={ styles.sideContainer }><span className={ styles.number }>7</span><div><span className={ styles.sideTitle }>Raha</span><span className={ styles.sideLine} >|</span><span className={ styles.sideTeaser }>Mikkelin kaupunki saa todennäköisesti pöydälleen valtavan laskun - Pieni sisäoppilaitos muuttui ilman lupaa verkko-opintojen tehtaaksi</span></div></div>
            <div className={ styles.sideSeperator }></div>
            <button className={ styles.sideBtn }>Näytä lisää</button>
        </div>
        </div>
    )
}
