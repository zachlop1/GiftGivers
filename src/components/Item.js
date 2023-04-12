import React from 'react';
import { View, Text } from 'react-native';

import SegaGenesis from '../images/SegaGenesis.jpg'
import FidgetCube from '../images/fidgetCube.gif'
import FortniteHoodie from '../images/fortniteHoodie.jpg'
import Switch from '../images/MarioSwitch.jpg'
import RecordCoasters from '../images/recordCoasters.jpg'
import RazerBS from '../images/RazerBaseStation.jpg'
import AnarchistBook from '../images/AnarchistCookbook.jpg'
import RobotLamp from '../images/SittingLamp.jpg'
import MouseJiggler from '../images/mouseJiggler.jpg'
import StarWarsPlanter from '../images/StarWarsPlanter.jpg'
import LEDcube from '../images/LEDcube.jpg'
import TurtleSlippers from '../images/TurtleSlippers.jpg'
import Backbone from '../images/Backbone.jpg'
import MomBS from '../images/MomBS.jpg'
import SeekandFind from '../images/SeekandFind.jpg'
import corgiPants from '../images/corgiPants.jpg'
import LTwebcam from '../images/LTwebcam.jpg'



const items = [

//{ id: '', title: '', type: '', picture: (), url: '' },

  //KIDS
  { id: '1', title: 'SEGA Genesis Mini 2', type: 'Kids', picture: (SegaGenesis), url: 'https://www.amazon.com/sales-North-America%25E3%2580%2591SEGA-Genesis-Mini-%25E3%2583%259E%25E3%2582%25B7%25E3%2583%25B3%25E9%259D%259E%25E4%25BE%259D%25E5%25AD%2598/dp/B0B4D19JJ4/ref=sr_1_1?crid=2AU3Y4R3S2LPW&amp;keywords=%25E3%2580%2590For+sales+in+North+America%25E3%2580%2591SEGA+Genesis+Mini+2&amp;qid=1672762775&amp;sprefix=for+sales+in+north+america+sega+genesis+mini+2%252Caps%252C492&amp;sr=8-1&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=5bfef9a6ef958a5c61ca0ba8d5794ab9&camp=1789&creative=9325' },
  { id: '2', title: 'Fidget Cube', type: 'Kids', picture: (FidgetCube), url: 'https://www.amazon.com/Antsy-Labs-Graphite-Fidget-Cube/dp/B0749W9PGK/ref=sr_1_1?crid=2IQSUKBQRGG63&amp;keywords=Antsy+Labs+Antsy+Labs+Graphite+Fidget+Cube&amp;qid=1672764359&amp;sprefix=antsy+labs+antsy+labs+graphite+fidget+cube%252Caps%252C350&amp;sr=8-1&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=b0528039d2bb16b9d305daae28c89e3a&camp=1789&creative=9325' },
  { id: '3', title: 'Fortnite Hoodie', type: 'Kids', picture: (FortniteHoodie), url: 'https://www.amazon.com/wfukjre-Pullover-Hoodies-Outdoor-Sweatshirt/dp/B0BHYQ4SD1/ref=sr_1_1_sspa?crid=UUBM8YSKOCNK&amp;keywords=fortnite%252Bneff%252Bhoodie&amp;qid=1672764410&amp;sprefix=fortnite%252Bneff%252Bhoodi%252Caps%252C129&amp;sr=8-1-spons&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMFpMSjNXV1lKSktRJmVuY3J5cHRlZElkPUEwNTExMDgxMUJHWFEyVlkzTlJLWCZlbmNyeXB0ZWRBZElkPUEwNTAwMjMyM05GTUc0QVpJME5VQSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&amp;th=1&amp;psc=1&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=8085a01ba6b1ea0c02bf7cabfc9fb89b&camp=1789&creative=9325' },
  { id: '4', title: 'Switch Carrying Case', type: 'Kids', picture: (Switch), url: 'https://www.amazon.com/Nintendo-Carrying-All-Protective-Controller-Accessories-3DS/dp/B076GYVWRY/ref=sr_1_1?crid=2XDHLC1576D9R&amp;keywords=iVoler+Carrying+Storage+Case+for+Nintendo+Switch%252FSwitch+OLED+Model%252CPortable+Travel+All+Protective+Hard+Messenger+Bag+Soft+Lining+18+Games+for+Switch+Console+Pro+Controller+%2526+Accessories+Red%252BBlue&amp;qid=1672766999&amp;sprefix=ivoler+carrying+storage+case+for+nintendo+switch%252Fswitch+oled+model%252Cportable+travel+all+protective+hard+messenger+bag+soft+lining+18+games+for+switch+console+pro+controller+%2526+accessories+red%252Bblue%252Caps%252C137&amp;sr=8-1&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=2a91690bc64c0f801bea73e2d2456b6c&camp=1789&creative=9325' },

  //MEN
  { id: '5', title: 'Record Coasters', type: 'Men', picture: (RecordCoasters), url: 'https://www.amazon.com/Coaster-Glasses-Valdivia-Design-Coasters/dp/B092S8WYXS/ref=sr_1_1_sspa?crid=2FSK6F5BAQ72N&amp;amp;keywords=record%25252Bcoasters&amp;amp;qid=1674242789&amp;amp;sprefix=record%25252Bcoaster%25252Caps%25252C101&amp;amp;sr=8-1-spons&amp;amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNUNHUDVIOTY0WEtaJmVuY3J5cHRlZElkPUEwMzYyNDMxVVFFRVVZUDlBVExKJmVuY3J5cHRlZEFkSWQ9QTAzMTUxNDUzSlhPUTE1RVlQME44JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&amp;amp;th=1&amp;_encoding=UTF8&amp;tag=zachlop1-20&amp;linkCode=ur2&amp;linkId=a5c79844d5b753a53e05b2b434e483d8&amp;camp=1789&amp;creative=9325&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=278d5054c74cb7e29161331a9c20ba5d&camp=1789&creative=9325' },
  { id: '6', title: 'Sitting Robot Lamp', type: 'Men', picture: (RobotLamp), url: 'https://www.amazon.com/BAYCHEER-Industrial-Bedrooms-Restaurant-Creative/dp/B07M6QFQG9/ref=sr_1_2?crid=2GAI0AFO8SOZ5&amp;keywords=Sitting%252BRobot%252BIndustrial%252BLamp&amp;qid=1674429423&amp;sprefix=sitting%252Brobot%252Bindustrial%252Blamp%252Caps%252C134&amp;sr=8-2&amp;ufe=app_do%253Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc&amp;th=1&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=2c65f55dd195f38d0dc32bdbd58d9fa8&camp=1789&creative=9325' },
  
  //WOMEN
  { id: '7', title: 'Corgi Pants', type: 'Women', picture: (corgiPants), url: 'https://www.amazon.com/Corgi-Womens-Pajama-Pants-Lounge/dp/B088NRMXYP/ref=sr_1_3?crid=3REG495BZNKT3&amp;keywords=corgi+pants&amp;qid=1674443733&amp;sprefix=corgi+pant%252Caps%252C121&amp;sr=8-3&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=2bda1ebb128df90dd1f746e6e68177c5&camp=1789&creative=9325' },
  { id: '8', title: 'Houseplants & Hot Sauce', type: 'Women', picture: (SeekandFind), url: 'https://www.amazon.com/Houseplants-Hot-Sauce-Seek-Find/dp/1452163138/ref=sr_1_1?crid=4DOOVTGQJOC0&amp;keywords=Houseplants+and+Hot+Sauce%253A+A+Seek-and-Find+Book+for+Grown-Ups+%2528Seek+and+Find+Books+for+Adults%252C+Seek+and+Find+Adult+Games%2529&amp;qid=1674431421&amp;s=books&amp;sprefix=%252Cstripbooks%252C151&amp;sr=1-1&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=609156d2d4e63d96c78d8c240472c00c&camp=1789&creative=9325' },

  //MISC
{ id: '9', title: 'The Anarchist Cookbook', type: 'Misc', picture: (AnarchistBook), url: 'https://www.amazon.com/Anarchist-Cookbook-William-Powell/dp/1607966123/ref=sr_1_1?keywords=anarchist+cookbook&amp;qid=1674429107&amp;sr=8-1&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=73be144fd46351a07a1e89944eb7ef7b&camp=1789&creative=9325' },
  
  //FUNNY
  { id: '10', title: 'Mom Bumper Sticker', type: 'Funny', picture: (MomBS), url: 'https://www.amazon.com/Sticker-Custom-Caution-Safety-Family/dp/B09RP667KZ/ref=sr_1_1_sspa?keywords=meme+bumper+sticker&amp;qid=1674431191&amp;sr=8-1-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExM0dYTkk2N1IwVE8mZW5jcnlwdGVkSWQ9QTA2NjYxNjAySVM2U01ISVZUWEVDJmVuY3J5cHRlZEFkSWQ9QTA0NjA4NDAyQ0owSVZBTjc1UlFTJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=d0cff52680568ff8427edeafcd5aaa2d&camp=1789&creative=9325' },
  { id: '11', title: 'Animal Slippers', type: 'Funny', picture: (TurtleSlippers), url: 'https://www.amazon.com/Silver-Lilly-Turtle-Slippers-Novelty/dp/B0744R3D4Y/ref=sr_1_2?crid=60TPPUA8R7WO&amp;keywords=Frog+Slippers+Frog+Sandals+Unisex+Cartoon+Animal+Slippers+House%252CBathroom%2526Pool+Slippers&amp;qid=1674430324&amp;sprefix=frog+slippers+frog+sandals+unisex+cartoon+animal+slippers+house%252Cbathroom%2526pool+slippers%252Caps%252C90&amp;sr=8-2&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=19196403d77f2fa545d1da63606c9e44&camp=1789&creative=9325' },

  //UNDER30
  { id: '12', title: 'Razer Base Station', type: 'Under30', picture: (RazerBS), url: 'https://www.amazon.com/dp/B08J5WQTL5?tag=astb-20&amp;geniuslink=true&amp;th=1&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=f117d829a08c37e79f2f75d5222ad6e8&camp=1789&creative=9325' },

  //GAMERS
  { id: '13', title: 'Logitech Webcam', type: 'Gamers', picture: (LTwebcam), url: 'https://www.amazon.com/Logitech-C920x-Pro-HD-Webcam/dp/B085TFF7M1/ref=sr_1_3?crid=C5R3A5JAFE6S&amp;keywords=logitech+camera&amp;qid=1674512464&amp;s=electronics&amp;sprefix=logitech+camer%252Celectronics%252C106&amp;sr=1-3&amp;ufe=app_do%253Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=4e04e753baef4e67deb6ea942221e83f&camp=1789&creative=9325' },
  { id: '14', title: 'Backbone Phone Controller', type: 'Gamers', picture: (Backbone), url: 'https://www.amazon.com/Backbone-Mobile-Gaming-Controller-PlayStation-iOS/dp/B09ZXTRKQ9/ref=sr_1_1?crid=N2CV91ZHBYJ9&amp;keywords=BACKBONE+One+Mobile+Gaming+Controller+for+iPhone+%255BPlayStation+Edition%255D+-+Enhance+Your+Gaming+Experience+on+iPhone+-+Play+PlayStation%252C+Steam%252C+Fortnite%252C+Apex%252C+Call+of+Duty%252C+Genshin+Impact+%2526+More&amp;qid=1674431047&amp;s=videogames&amp;sprefix=%252Cvideogames%252C94&amp;sr=1-1&amp;ufe=app_do%253Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=9b19042a70fd503c0fc26f1f72a1f096&camp=1789&creative=9325' },
  { id: '15', title: 'Mouse Mover Jiggler', type: 'Gamers', picture: (MouseJiggler), url: 'https://www.amazon.com/HONKID-Undetectable-Drive-Free-Simulate-Automatically/dp/B08M388N7N/ref=sr_1_1_sspa?crid=3TBEUNODBIJ8M&amp;keywords=Undetectable+Mouse+Jiggler&amp;qid=1674429685&amp;s=electronics&amp;sprefix=undetectable+mouse+jiggler+%252Celectronics%252C93&amp;sr=1-1-spons&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzSFczWEdDREFaT1FPJmVuY3J5cHRlZElkPUEwMDY2NzA0TE1UWk5JRUFIU005JmVuY3J5cHRlZEFkSWQ9QTAyMDEyODQzU1owSVVVUjI4TlhSJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=8eecd89724b5c4422a30177351076d71&camp=1789&creative=9325' },
  //GEEKS
  { id: '16', title: 'Star Wars Planter', type: 'Geeks', picture: (StarWarsPlanter), url: 'https://www.amazon.com/TH-SMART-Concrete-Bathroom-planters/dp/B0BNGXZR6L/ref=sr_1_14?keywords=stormtrooper%252Bplanter&amp;qid=1674429876&amp;sr=8-14&amp;th=1&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=40f122f21285a08e113f03f680436eb5&camp=1789&creative=9325' },

  //TECHIES
  { id: '17', title: 'Razer Base Station', type: 'Techies', picture: (RazerBS), url: 'https://www.amazon.com/dp/B08J5WQTL5?tag=astb-20&amp;geniuslink=true&amp;th=1&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=f117d829a08c37e79f2f75d5222ad6e8&camp=1789&creative=9325' },
  { id: '18', title: 'LED Cube', type: 'Techies', picture: (LEDcube), url: 'https://www.amazon.com/HyperCube-Nano-Infinity-Light-Stand/dp/B0BP126PN2/ref=sr_1_1_sspa?crid=TNQEDXSC0K8N&amp;keywords=matrix+lamp&amp;qid=1674430076&amp;sprefix=matrix+lamp%252Caps%252C97&amp;sr=8-1-spons&amp;ufe=app_do%253Aamzn1.fos.f5122f16-c3e8-4386-bf32-63e904010ad0&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMjNISEQ3WDVENjEmZW5jcnlwdGVkSWQ9QTAxNzE2OTkyRlNSUE02VFRXMjFIJmVuY3J5cHRlZEFkSWQ9QTAwMjY5MTQ4SExaUk0yR1RWODMmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&_encoding=UTF8&tag=zachlop1-20&linkCode=ur2&linkId=efde98b2f59648082e53c89aab612e24&camp=1789&creative=9325' },

  

];
export default items;

