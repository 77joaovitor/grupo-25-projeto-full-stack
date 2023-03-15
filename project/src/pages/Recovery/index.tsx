import { Container } from "./style";
import { SubmitEmail } from "../../components/SubmitEmail";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { RecoverPass } from "../../components/SubmitEmail/recoverPass";
import { useEffect } from "react";


const Recovery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Header />

        <Container>
          <RecoverPass />
          <SubmitEmail />

      
        </Container> 
        <Footer />
    </>
  );
};

export default Recovery;