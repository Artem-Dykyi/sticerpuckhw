import './App.css';
import {Sticker} from "./components/Sticker"
import stickers from "./stickers.json"

function App() {
  return (
    <>
      <Sticker stickers ={stickers}/>
    </>
  );
}

export default App;


// Створити компоненти Sticker, StickerList, Choice 
// Реалізувати логіку наступним чином, при кліку на Sticker в  Choice повинен відображатися текст з назвою обраного скікера.
