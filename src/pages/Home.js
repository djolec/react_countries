import React from 'react'
import SearchAndFilter from '../components/HomePageComponents/SearchAndFilter'
import Feed from '../components/HomePageComponents/Feed'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
        <SearchAndFilter />
        <Feed />
    </motion.div>
  )
}

export default Home