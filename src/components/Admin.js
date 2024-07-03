import { motion } from "framer-motion"
export default function Admin () {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration:0.3}}>
            <h1>Admin</h1>
        </motion.div>
    )
}