import AuctionCard from "../../components/AuctionCard"
import { Button } from "../../components/Button"
import Header from "../../components/Header"
import ProductCard from "../../components/ProductCard"
import { AnnouncementContext } from "../../context"
import { PresentationSection, BoxButton, ContainerList, ListSection, BoxContent } from "./style"


export const Home = (): JSX.Element => {
    const { announcementsCars, announcementsMotorcycle } = AnnouncementContext()
    return (
        <div>
            <Header />
            <PresentationSection >
                <p>Velocidade e experiência em um lugar feito para você</p>
                <span>Um ambiente feito para você explorar o seu melhor</span>

                <BoxButton >
                    <Button>
                        Carros
                    </Button>
                    <Button>
                        Motos
                    </Button>
                </BoxButton>
            </PresentationSection>

            <ListSection>
                <BoxContent>
                    <h3>Leilão</h3>
                    <ContainerList>
                    
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    </ContainerList>
                </BoxContent>
            </ListSection>
            <ListSection>
                <BoxContent>
                <h3>Carros</h3>
                    <ContainerList>

                       {
                            announcementsCars && announcementsCars.length > 0 && announcementsCars.map((announcement, index) => (
                                <ProductCard key={index} announcement={announcement}/>
                            ))
                        
                        }
                    </ContainerList>

                </BoxContent>
                <BoxContent>
                <h3>Motos</h3>
                    <ContainerList>

                       {
                            announcementsMotorcycle && announcementsMotorcycle.length > 0 && announcementsMotorcycle.map((announcement, index) => (
                                <ProductCard key={index} announcement={announcement}/>
                            ))
                        
                        }
                    </ContainerList>

                </BoxContent>
            </ListSection >

        </div>
    )
}