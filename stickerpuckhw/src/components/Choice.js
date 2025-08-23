// // import styled from "styled-components";
// import { Component } from "react";

// export class Choice extends Component{
//     state = {
//          selected: null,
//     };

//     handleSelect = (sticker) =>{
//         this.setState({selected: sticker})
//     }

//     render(){
//         const { stickers } = this.props; // stickers прийдуть із App
//         const { selected } = this.state;
//         return <div>
//            {stickers.map((sticker, index) => (
//             <img
//               key={index}
//               src={sticker.img}
//               alt={sticker.label}
//               onClick={() => this.handleSelect(sticker)}
//             />
//           ))}

//           {selected && (
//           <div>
//             <img src={selected.img} alt={selected.label} />
//             <p>{selected.label}</p>
//           </div>
//         )}
//         </div>
//     }
// }