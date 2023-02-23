import { Container } from "./style";
import car from '../../imgs/car.png'

const ProductCard = () => {
  return <Container>
            <main>
              <div className="main">
              <div className="fotoPrincipal">
                <img src={car} alt="" />
              </div>
              <div className="info">
                <h1>BMW</h1>
                <span>2023</span>
                <span>0 KM</span>
                <span>R$ 120.000</span>
                <button>Comprar</button>
              </div>
              <div className="descricao">
                <h1>Descrição</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, ex? Illum, incidunt numquam sed magnam vero esse natus explicabo aperiam ut odit nulla ipsam velit nam placeat deleniti harum animi!</p>
              </div>
              <div className="coments">
                <h1>Comentários</h1>
                <h3>JL</h3>
                <h3>Júlia Lima</h3>
                <span>há 3 dias</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ut nesciunt totam eligendi obcaecati culpa aliquam accusamus sapiente facere eius iusto et ipsam eum dolorum, enim quibusdam sequi magnam beatae.</p>
              </div>
              <div className="peapleComents">
                <h3>SL</h3>
                <h3>Samuel Leão</h3>
                <input type="text" placeholder="Digite algo" />
                <button>Comentar</button>
              </div>
              </div>
              <aside>
                <div className="container">
                  <h1>Fotos</h1>
                  <div className="fotos">
                    <img className="details" src={car} alt="" />
                    <img className="details" src={car} alt="" />
                    <img className="details" src={car} alt="" />
                    <img className="details" src={car} alt="" />
                    <img className="details" src={car} alt="" />
                    <img className="details" src={car} alt="" />
                  </div>
                  <div className="men">
                    <h1>SM</h1>
                    <h2>Samuel Leão</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magni, officia voluptates accusantium cumque laudantium atque facilis mollitia tempora recusandae praesentium hic, veritatis nisi dolor vitae repellat magnam cum quidem?</p>
                    <button>Ver todos anuncios</button>
                    
                  </div>
                </div>

              </aside>
            </main>
         </Container>;
};

export default ProductCard;
