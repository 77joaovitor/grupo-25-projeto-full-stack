import { Footer } from "../../components/Footer"
import Header from "../../components/Header"
import ProductCard from "../../components/ProductCard"
import { AnnouncementContext } from "../../context"
import { PresentationSection, ContainerMain,UserInformation, ProfileContent , ContainerList,  BoxContent } from "./style"

export const Profile = (): JSX.Element => {
    const { announcementsCars, announcementsMotorcycle } = AnnouncementContext()
    return (
        <>
            <Header />
            <PresentationSection id="home">

                <ProfileContent>

                    <UserInformation>
                        <span className="logoName">SL</span> <span>{'geovane'}</span>
                    </UserInformation>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
               
                </ProfileContent>
            </PresentationSection>

            <ContainerMain>

                {/* <ListSection> */}
                    <BoxContent id="cars">
                        <h3>Carros</h3>
                        <ContainerList>
                        {
                                announcementsCars && 
                                    announcementsCars.length > 0 && 
                                        announcementsCars.map((announcement, index) => (
                                            <ProductCard key={index} announcement={announcement}/>
                                        ))
                            }
                        </ContainerList>
                    </BoxContent>
                    <BoxContent id="motorcycles">
                        <h3>Motos</h3>
                        <ContainerList>
                        {
                                announcementsMotorcycle && 
                                    announcementsMotorcycle.length > 0 && 
                                        announcementsMotorcycle.map((announcement, index) => (
                                            <ProductCard key={index} announcement={announcement}/>
                                        ))                        
                            }
                        </ContainerList>

                    </BoxContent>
                {/* </ListSection > */}
            </ContainerMain>
            <Footer />

        </>
    )
}