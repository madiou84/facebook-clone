import React from 'react';
import { UserCircleIcon, SearchIcon } from '@heroicons/react/solid';

import {
  Nav,
  Posts,
  FbIcon,
  NavItem,
  Stories,
  PostItem,
  StoryForm,
  StoryItem,
  FormWhatWouldYouSay,
} from '../../Shared'

// const BASE_URL = window.location.host
const navDimensionStyle = ['0 -743px', '0 -470px', '0 -638px', '0 -932px', '0 -323px', '0 -722px'];
const storiesData = [
  {
    id: 1,
    name: 'Amadou Tely',
    profileImg: `../../images/242340565_1746587375539262_2303448769995963116_n.jpg`,
    storyImage: `../../images/243764467_1756240981240568_5829903354009463907_n.jpg`,
  },
  {
    id: 2,
    name: 'Sow Issagha',
    profileImg: `../../images/20429681_683098385219482_7119833471420925375_n.jpg`,
    storyImage: `../../images/244064726_1713941435468500_4255253052009114782_n.jpg`,
  },
  {
    id: 3,
    name: 'Abdoul Karim',
    profileImg: `../../images/163561675_2859409790937850_3527660058315715255_n.jpg`,
    storyImage: `../../images/244231954_3001452930066868_3794428661372530268_n.jpg`,
  },
  {
    id: 4,
    name: 'Ramadan Diallo',
    profileImg: `../../images/241878927_904161993830478_3687540142760326231_n.jpg`,
    storyImage: `../../images/243547629_916167285963282_5299692049311410284_n.jpg`,
  },
  {
    id: 5,
    name: 'Mariama Bah',
    profileImg: `../../images/145708082_3330471897058188_4385192478233212502_n.jpg`,
    storyImage: `../../images/243921290_4012850388820332_1050396025967561108_n.jpg`,
  },
  {
    id: 6,
    name: 'Adama Hawa Barry',
    profileImg: `../../images/242581486_563370205090053_8742927191673567679_n.jpg`,
    storyImage: `../../images/244371300_570175854409488_7198649386015859816_n.jpg`,
  },
  {
    id: 7,
    name: 'Oury Tarran Jallow',
    profileImg: `../../images/202200483_3848826991894168_7382105905782509595_n.jpg`,
    storyImage: `../../images/243992213_4158170887626442_7759809070268579412_n.jpg`,
  },
  {
    id: 8,
    name: 'Ibrahima Sory Diané',
    profileImg: `../../images/243167505_4183122568481443_1881507701987262539_n.jpg`,
    storyImage: `../../images/244061868_4200843160042717_4036558810663011530_n.jpg`,
  },
  {
    id: 9,
    name: 'Liouxa Xaliou',
    profileImg: `../../images/213885551_3396119500614698_4045920386867883878_n.jpg`,
    storyImage: `../../images/243615094_3466781346881846_8000507893310659277_n.jpg`,
  },
  {
    id: 10,
    name: 'Ibrahima Issa Diallo',
    profileImg: `../../images/186037488_2924624531118918_4439914589093916999_n.jpg`,
    storyImage: `../../images/244361609_3047246475523389_4228151016554178690_n.jpg`,
  },
  {
    id: 11,
    name: 'Lamine Barry',
    profileImg: `../../images/236076749_2048814595272903_1930801971176022854_n.jpg`,
    storyImage: `../../images/243879603_2087589438062085_699281704491321278_n.jpg`,
  },
  {
    id: 12,
    name: 'Minkael Diallo',
    profileImg: `../../images/241510062_4281105218637029_3968939733603552938_n.jpg`,
    storyImage: `../../images/244103253_4366364436777773_4441191112120533777_n.jpg`,
  },
  {
    id: 13,
    name: 'Bastos Ibrahima Kindy',
    profileImg: `../../images/214835308_3099719000352948_5933918166019080015_n.jpg`,
    storyImage: `../../images/243648283_3151471745177673_8485981416065894863_n.jpg`,
  },
  {
    id: 14,
    name: 'Karim Benzema',
    profileImg: `../../images/197494218_338761560942243_130096358275316303_n.jpg`,
    storyImage: `../../images/244341202_414756746676057_4086925592276643520_n.jpg`,
  },
  {
    id: 15,
    name: 'Football.fr',
    profileImg: `../../images/12208449_10153801698838783_4868264509219059082_n.png`,
    storyImage: `../../images/244202625_10160037843363783_2451032290510906713_n.jpg`,
  },
  {
    id: 16,
    name: 'Adama Hawa Barry',
    profileImg: `../../images/171280513_300954124727579_4739714293798299815_n.jpg`,
    storyImage: `../../images/240664424_412635160226141_1892096083714688421_n.jpg`,
  },
  {
    id: 17,
    name: 'Adama Hawa Barry',
    profileImg: `../../images/94377508_918638458565635_5520442085410340864_n.png`,
    storyImage: `../../images/243921775_1305219969907480_7825956203732008049_n.jpg`,
  },
];

const posts = [
  {
    id: 1,
    content: `Elle n'a plus le temps <br />
    Tu es juste 👌👌 ma tokis
    <button  type="button" className="text-primary-300 focus:outline-none">Rougui Mo Hadja Binta</button> ❤️❤️`,
    photos: [
      '../../images/243590581_137412611945387_5545834831950766863_n.jpg',
      '../../images/243590613_137412618612053_660661076792563559_n.jpg',
    ],
    user: {
      name: 'Roughaya Jallow',
      imgProfil: '../../../../images/233154272_364326375228180_5723770479990960621_n.jpg',
    },
  },
  {
    id: 2,
    content: `Petit conseil: ne cliquez jamais sur un lien inconnu reçu Inbox sur Messenger ou WhatsApp. Surtout s'il est envoyé par un inconnu. En général, il faut se méfier des liens, ils sont souvent porteurs de virus ou représentent de dangereux chevaux de Troie pour prendre le contrôle de votre compte Facebook par exemple. Awa.`,
    photos: [],
    user: {
      name: 'Alimou Sow',
      imgProfil: '../../../../images/71043531_2768332406532037_4701645388342362112_n.jpg',
    },
  },
  {
    id: 3,
    content: `Toute la Guinée est heureuse, à l'exception d'une seule personne. <br/> #Kikala 😅`,
    photos: [],
    user: {
      name: 'Alimou Sow',
      imgProfil: '../../../../images/71043531_2768332406532037_4701645388342362112_n.jpg',
    },
  }
]

function App() {
  return (
    <div>
      <header className="px-4 py-2 flex items-center space-x-4 bg-primary-500">
        <div className="">
          <UserCircleIcon 
            className="text-white w-6 h-6"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-center items-center text-gray-300 space-x-1">
            <SearchIcon
              className="w-5 h-4"
            />
            <span>
              Rechercher
            </span>
          </div>
          <div className="border-b border-gray-200"/>
        </div>
        <div className="">
          <FbIcon />
        </div>
      </header>

      <Nav>
        {navDimensionStyle.map((item, key) => (
          <NavItem
            key={key}
            item={item}
            isActive={key === 0}
            notificationCount={key === 3 ? 7 : null}
          />
        ))}
      </Nav>
    
      <FormWhatWouldYouSay
      />

      <Stories
        className="mt-2 pb-3 bg-white px-2 overflow-x-auto"
      >
        <div className="flex items-center space-x-2">
          <StoryForm
            story={{
              id: null,
              name: 'Ajouter à la story',
              profileImg: null,
              storyImage: 'https://scontent.fdkr3-1.fna.fbcdn.net/v/t1.6435-9/164138734_110378421139999_7798075979519869159_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFqK6nG_fftUF3cWzUPCkZtyQ8TjlV_SMDJDxOOVX9IwJtiaAxta2SPgZiGBrBbiRrHGfAMSjHeTHUyZ7NhUJUR&_nc_ohc=Hu6ECKCMtR8AX9lFBxN&_nc_ht=scontent.fdkr3-1.fna&oh=e1b291845aaabe1f006eec30fd3d9277&oe=617D96A9'
            }}
          />

          {storiesData.map(story => (
            <StoryItem
              key={story.id}
              story={story}
              className="space-x-2"
            />
          ))}
        </div>
      </Stories>

      <Posts>
        {posts.map((post, key) => (
          <PostItem
            key={key}
            post={post}
            className="bg-white px-2 py-2 mt-2"
          />
        ))}
      </Posts>
    </div>
  );
}

export default App;
