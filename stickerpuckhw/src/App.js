import './App.css';
// import { Choice } from './components/Choice';
import {Sticker} from "./components/Sticker"
import stickers from "./stickers.json"

function App() {
  return (
    <>
      <Sticker stickers ={stickers}/>
      {/* <Choice stickers ={stickers}/> */}
    </>
  );
}

export default App;




// Створити компоненти Sticker, StickerList, Choice 
// Реалізувати логіку наступним чином, при кліку на Sticker в  Choice повинен відображатися текст з назвою обраного скікера.
