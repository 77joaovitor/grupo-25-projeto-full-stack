import { Container } from "./style";
import car from '../../assets/car.png'

export const DetailAnnouncement = () => {
  return <Container>
            <main>
              <div className="container1">
                <div className="fotoPrincipal">
                  <img className="logoPrincipal" src={car} alt="" />
                </div>

                <div className="info">
                  <h1>bmw 320i</h1>
                  <div className="info-text">
                    <div className="info-text-span">
                      <span>2023</span>
                      <span>0 KM</span> 
                    </div>
                    <h4>R$ 120.000</h4>
                  </div>
                  <button>Comprar</button>
                </div>

                <div className="descricao">
                  <h1>Descrição</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, ex? Illum, incidunt numquam sed magnam vero esse natus explicabo aperiam ut odit nulla ipsam velit nam placeat deleniti harum animi!</p>
                </div>
                
                <div className="coments">
                  <h1>Comentários</h1>
                  <div className="coments-name">
                    <h3>JL</h3>
                    <h4>Júlia Lima</h4>
                    <h5>há 3 dias</h5>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ut nesciunt totam eligendi obcaecati culpa aliquam accusamus sapiente facere eius iusto et ipsam eum dolorum, enim quibusdam sequi magnam beatae.</p>
                </div>

                <div className="peapleComents">
                  <div className="peapleComents-peap">
                    <h3>SL</h3>
                    <h4>Samuel Leão</h4>
                  </div>
                  <div className="input">
                    <input type="text" placeholder="Digite algo" />
                    <button className="comentButton">Comentar</button>
                  </div>
                </div>
              </div>

              <aside>
                  <div className="container2">
                    <h1>Fotos</h1>
                    <div className="fotos">
                      <img className="details" src={car} alt="" />
                      <img className="details" src={car} alt="" />
                      <img className="details" src={car} alt="" />
                      <img className="details" src={car} alt="" />
                      <img className="details" src={car} alt="" />
                      <img className="details" src={car} alt="" />
                    </div>
                  </div>

                  <div className="peapleAnnouncement">
                    <h3 className="peapleAnnouncement-icon">SM</h3>
                    <h2>Samuel Leão</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magni, officia voluptates accusantium cumque laudantium atque facilis mollitia tempora recusandae praesentium hic, veritatis nisi dolor vitae repellat magnam cum quidem?</p>
                    <button className="peapleAnnouncement-button">Ver todos anuncios</button>
                  </div>
              </aside>
            </main>
         </Container>;
};
