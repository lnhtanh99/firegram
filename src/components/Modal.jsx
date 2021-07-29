import { motion } from 'framer-motion'

const Modal = ({ selectedImage, setSelectedImage }) => {
    return ( 
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="backdrop" 
            onClick={() => setSelectedImage(null)}
        >
            <motion.img 
                src={ selectedImage } 
                alt="enlarge pic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    );
}
 
export default Modal;