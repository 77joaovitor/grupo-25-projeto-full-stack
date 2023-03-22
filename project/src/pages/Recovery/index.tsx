import { Container } from "./style";
import { SubmitEmail } from "../../components/SubmitEmail";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { RecoverPass } from "../../components/SubmitEmail/recoverPass";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Recovery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
    initial={{ opacity: .5 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .5 }}
    >
    <Header />

        <Container>
          <RecoverPass />
          <SubmitEmail />

      
        </Container> 
        <Footer />
    </motion.div>
  );
};

export default Recovery;