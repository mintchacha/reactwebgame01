import blue1 from './assets/blue1.svg'
import blue2 from './assets/blue2.svg'
import blue3 from './assets/blue3.svg'
import blue4 from './assets/blue4.svg'
import blue5 from './assets/blue5.svg'
import blue6 from './assets/blue6.svg'
import red1 from './assets/red1.svg'
import red2 from './assets/red2.svg'
import red3 from './assets/red3.svg'
import red4 from './assets/red4.svg'
import red5 from './assets/red5.svg'
import red6 from './assets/red6.svg'
const DicName = {
  blue:[blue1,blue2,blue3,blue4,blue5,blue6],
  red:[red1,red2,red3,red4,red5,red6]
}

function Dice({color='blue', num=1}){
  const src = DicName[color][num - 1];
  const alt = `${color}${num}`;
  return(
    <img src={src} alt={alt}/>
  )
}
export default Dice