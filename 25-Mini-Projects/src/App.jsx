import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import menus from "./components/tree-view/data";
import QRCodeGenerator from './components/qr-code-generator'
import LightDarkMode from './components/light-dark-mode'
import ScrollIndicator from './components/scroll-indicator'
import TabTest from './components/custom-tabs/tab-test'
import ModalText from './components/custom-modal-popup/modal-text'
import GithubProfileFinder from './components/github-profile-finder'
import TicTacToe from './components/tic-tac-toe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Accordian></Accordian> */}
    {/* <RandomColor></RandomColor> */}
    {/* <StarRating noOfStars={10}/> */}
    {/* <ImageSlider url={`https://picsum.photos/v2/list`} limit={'10'} page={1}></ImageSlider>  */}
    {/* <LoadMoreData></LoadMoreData>  */}
    {/* <TreeView menus={menus}/>  */}
    {/* <QRCodeGenerator></QRCodeGenerator> */}
    {/* <LightDarkMode></LightDarkMode> */}
    {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
    {/* <TabTest/> */}
    {/* <ModalText/> */}
    {/* <GithubProfileFinder/> */}
    <TicTacToe/>
    </>
  )
}

export default App
