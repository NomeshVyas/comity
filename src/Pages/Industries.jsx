import TopTemplete from '../Components/utils/TopTemplete'
import FirstBlock from '../Components/industriesBlocks/FirstBlock'
import SecondBlock from '../Components/industriesBlocks/SecondBlock'
import Footer from '../Components/utils/Footer'

const Industries = () => {
  return (
    <>
    <TopTemplete
    background={"https://cdn.pixabay.com/photo/2016/11/29/06/22/buildings-1867772_1280.jpg"}
    
    title={"Comity Edutech and you"}
    tagLine={"Working together to deliver value to your business."} 
    />
    <FirstBlock />
    <SecondBlock />

    <Footer />
    </>
  )
}

export default Industries