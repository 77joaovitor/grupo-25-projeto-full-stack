import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommentCard } from "../../components/CommentCard";
import { Footer } from "../../components/Footer";
import { FormComment } from "../../components/FormComment";
import Header from "../../components/Header";
import InitialLetterName from "../../components/InitialLetterName";
import { AnnouncementContext } from "../../context";
import { getToken } from "../../context/session/auth";
import { UserContext } from "../../context/user/userContext";
import { BigImage, BoxTitle, BoxShowImage, Container, Message } from "./style";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonModal } from "../../components/Button";
import { IoMdClose } from "react-icons/io";

export const DetailAnnouncement = () => {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string>('')
  const [urlImage, setUrlImage] = useState<string>('')

  
  const { detailAnoucements, getAllAnnouncementByAdvertiser, setReload, reload } =
    AnnouncementContext();

  const { user, isDropdown, setIsDropDown } = UserContext();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      {selectedId && (
        <BigImage 
          layoutId={selectedId} 
          key={selectedId}
          onClick={() => {
            setSelectedId('')
            setUrlImage('')
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >

          <BoxShowImage
            onClick={(e) =>  e.stopPropagation()}
            initial={{scale: 0.5}}
            animate={{
                scale: 1,
                transition: { 
                    type: "spring", 
                    stiffness: 30
                }
            }}
            exit={{scale: 0.5,
                transition: { 
                    type: "spring", 
                    stiffness: 30
                }
            }}

          >

            <BoxTitle 
                onClick={(e) =>  e.stopPropagation()}
            >
            <motion.h3>Editar perfil</motion.h3>
            
            <ButtonModal
                type="button"
                className="btn_close"
                onClick={() => {
                  setSelectedId('')
                  setUrlImage('')
                }}
            >
                <IoMdClose />
            </ButtonModal>
                
            </BoxTitle>
            <motion.figure>
              <motion.img
                className="logoPrincipal"
                src={urlImage}
                alt=""
              />
            </motion.figure>

          </BoxShowImage>
        </BigImage>
      )}
      <Container
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <div className="container-main-detailAnnou"
          id="home"
        >
          <div className="container1"
            onClick={
              () => isDropdown && setIsDropDown(false)
            }
          >
            <div className="container-main-desktop">
              <div className="conteiner-first-desktop">
                <div className="fotoPrincipal">
                  <motion.img
                    className="logoPrincipal"
                    src={detailAnoucements?.vehicle?.coverImage}
                    alt=""
                    onClick={() => {
                      setSelectedId(detailAnoucements?.vehicle?.id)
                      setUrlImage(detailAnoucements?.vehicle?.coverImage)
                    }}
                  />

                </div>

                <div className="info">
                  <h1>{detailAnoucements?.title}</h1>
                  <div className="info-text">
                    <div className="info-text-span">
                      <span className="age">
                        {detailAnoucements?.vehicle?.year
                          .toString()
                          .substring(0, 4)}
                      </span>
                      <span>{detailAnoucements?.vehicle?.mileage} KM</span>
                    </div>
                    <p>R$ {detailAnoucements?.vehicle?.price}</p>
                  </div>
                  <button>Comprar</button>
                </div>

                <div className="descricao">
                  <h1>Descrição</h1>
                  <p>{detailAnoucements?.description}</p>
                </div>
              </div>
              <div className="container-second-desktop">
                <aside>
                  <div className="container2">
                    <h1>Fotos</h1>
                    <div className="fotos">
                      {
                        detailAnoucements?.vehicle?.galleryImages && 
                        detailAnoucements?.vehicle?.galleryImages.map((image, index) => (
                          <motion.img
                            key={image.id}
                            className="details"
                            src={image.imageUrl}
                            alt="Imagem da galeria" 
                            onClick={() => {
                              setSelectedId(image.id)
                              setUrlImage(image.imageUrl)
                            }}
                          />
                        ))
                      }
                    </div>
                  </div>

                  <div className="peapleAnnouncement">
                    <InitialLetterName
                      name={detailAnoucements?.advertiser?.name[0]}
                    />
                    <h2>{detailAnoucements?.advertiser?.name}</h2>
                    <p>
                      {detailAnoucements?.advertiser?.description}
                    </p>
                    <button
                      className="peapleAnnouncement-button"
                      onClick={() => {
                        localStorage.setItem("advertiserID", detailAnoucements?.advertiser.id);

                        getAllAnnouncementByAdvertiser(detailAnoucements?.advertiser.id)
                        
                        setReload(!reload)
                        navigate("/profile/")

                      }}
                    >
                      Ver todos anuncios
                    </button>
                  </div>
                </aside>
              </div>
              <div className="container-third-desktop">
                <div className="box">
                  <h2>Comentários</h2>
                  <ul className="coments">
                    { 
                      detailAnoucements?.comments?.length !== 0 &&
                      detailAnoucements?.comments?.map((comment, index) => (
                        <CommentCard
                          key={comment.id}
                          comment={comment}
                        />
                      )) 
                      }
                      {
                        detailAnoucements?.comments?.length === 0 &&
                      <Message>
                        <p>Anúncio não possui comentários</p>
                      </Message> 
                      }
                  </ul>
                </div>
                <FormComment />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Container >
    </AnimatePresence>

  );
};
