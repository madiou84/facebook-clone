import {
  ConversationUserProps,
  PostsProps,
  SidbarProps,
  UsersProps,
} from "../types";

export const NAV_DIMENSION_STYLE = [
  "0 -743px",
  "0 -470px",
  "0 -638px",
  "0 -932px",
  "0 -323px",
  "0 -722px",
];

export const REGEX_TO_RECOGNIZE_SPACE = /\n/g;
export const REGEX_TO_RECOGNIZE_HTAG = /#(\w+)/g;
export const REGEX_TO_RECOGNIZE_LINKS = /(https?:\/\/\S+)/g;

export const SOTRIES_DATA = [
  {
    id: 1,
    name: "Amadou Tely",
    profileImg: `/images/242340565_1746587375539262_2303448769995963116_n.jpg`,
    storyImage: `/images/243764467_1756240981240568_5829903354009463907_n.jpg`,
  },
  {
    id: 2,
    name: "Sow Issagha",
    profileImg: `/images/20429681_683098385219482_7119833471420925375_n.jpg`,
    storyImage: `/images/244064726_1713941435468500_4255253052009114782_n.jpg`,
  },
  {
    id: 3,
    name: "Abdoul Karim",
    profileImg: `/images/163561675_2859409790937850_3527660058315715255_n.jpg`,
    storyImage: `/images/244231954_3001452930066868_3794428661372530268_n.jpg`,
  },
  {
    id: 4,
    name: "Ramadan Diallo",
    profileImg: `/images/241878927_904161993830478_3687540142760326231_n.jpg`,
    storyImage: `/images/243547629_916167285963282_5299692049311410284_n.jpg`,
  },
  {
    id: 5,
    name: "Mariama Bah",
    profileImg: `/images/145708082_3330471897058188_4385192478233212502_n.jpg`,
    storyImage: `/images/243921290_4012850388820332_1050396025967561108_n.jpg`,
  },
  {
    id: 6,
    name: "Adama Hawa Barry",
    profileImg: `/images/242581486_563370205090053_8742927191673567679_n.jpg`,
    storyImage: `/images/244371300_570175854409488_7198649386015859816_n.jpg`,
  },
  {
    id: 7,
    name: "Oury Tarran Jallow",
    profileImg: `/images/202200483_3848826991894168_7382105905782509595_n.jpg`,
    storyImage: `/images/243992213_4158170887626442_7759809070268579412_n.jpg`,
  },
  {
    id: 8,
    name: "Ibrahima Sory Diané",
    profileImg: `/images/243167505_4183122568481443_1881507701987262539_n.jpg`,
    storyImage: `/images/244061868_4200843160042717_4036558810663011530_n.jpg`,
  },
  {
    id: 9,
    name: "Liouxa Xaliou",
    profileImg: `/images/213885551_3396119500614698_4045920386867883878_n.jpg`,
    storyImage: `/images/243615094_3466781346881846_8000507893310659277_n.jpg`,
  },
  {
    id: 10,
    name: "Ibrahima Issa Diallo",
    profileImg: `/images/186037488_2924624531118918_4439914589093916999_n.jpg`,
    storyImage: `/images/244361609_3047246475523389_4228151016554178690_n.jpg`,
  },
  {
    id: 11,
    name: "Lamine Barry",
    profileImg: `/images/236076749_2048814595272903_1930801971176022854_n.jpg`,
    storyImage: `/images/243879603_2087589438062085_699281704491321278_n.jpg`,
  },
  {
    id: 12,
    name: "Minkael Diallo",
    profileImg: `/images/241510062_4281105218637029_3968939733603552938_n.jpg`,
    storyImage: `/images/244103253_4366364436777773_4441191112120533777_n.jpg`,
  },
  {
    id: 13,
    name: "Bastos Ibrahima Kindy",
    profileImg: `/images/214835308_3099719000352948_5933918166019080015_n.jpg`,
    storyImage: `/images/243648283_3151471745177673_8485981416065894863_n.jpg`,
  },
  {
    id: 14,
    name: "Karim Benzema",
    profileImg: `/images/197494218_338761560942243_130096358275316303_n.jpg`,
    storyImage: `/images/244341202_414756746676057_4086925592276643520_n.jpg`,
  },
  {
    id: 15,
    name: "Football.fr",
    profileImg: `/images/12208449_10153801698838783_4868264509219059082_n.png`,
    storyImage: `/images/244202625_10160037843363783_2451032290510906713_n.jpg`,
  },
  {
    id: 16,
    name: "Adama Hawa Barry",
    profileImg: `/images/171280513_300954124727579_4739714293798299815_n.jpg`,
    storyImage: `/images/240664424_412635160226141_1892096083714688421_n.jpg`,
  },
  {
    id: 17,
    name: "Adama Hawa Barry",
    profileImg: `/images/94377508_918638458565635_5520442085410340864_n.png`,
    storyImage: `/images/243921775_1305219969907480_7825956203732008049_n.jpg`,
  },
];

export const POSTS: PostsProps[] = [
  {
    id: 3,
    content: `Petit conseil: ne cliquez jamais sur un lien inconnu reçu Inbox sur Messenger ou WhatsApp. Surtout s'il est envoyé par un inconnu. En général, il faut se méfier des liens, ils sont souvent porteurs de virus ou représentent de dangereux chevaux de Troie pour prendre le contrôle de votre compte Facebook par exemple. Awa.`,
    photos: [],
    user: {
      name: "Alimou Sow",
      imgProfil: "/images/71043531_2768332406532037_4701645388342362112_n.jpg",
    },
  },
  {
    id: 4,
    content: `Toute la Guinée est heureuse, à l'exception d'une seule personne. <br/> #Kikala 😅`,
    photos: [],
    user: {
      name: "Alimou Sow",
      imgProfil: "/images/71043531_2768332406532037_4701645388342362112_n.jpg",
    },
  },
  {
    id: 6,
    content: `✅Nouvel arrivage ✅
      Dell latitude 3160 <br/>
      Processeur: Intel celeron <br/>
      Disque: 500gb et rame 4gb <br/>
      Ecran: 11.6” tactile <br/>
      Autonomie 3heures minimum <br/>
      PRIX: 2.100.000Fg <br/>
      Contactez nous sur le: 624400576
      `,
    photos: [
      "/images/245216815_4740540232623479_3364449148623674748_n.jpg",
      "/images/245287785_4740540255956810_8540907426553901649_n.jpg",
      "/images/245451075_4740540265956809_6098066633139069410_n.jpg",
    ],
    user: {
      name: `Diallo boutique en ligne`,
      imgProfil: "/images/56580546_2394887927188733_4690832563361546240_n.jpg",
    },
  },
];

export const USERS: UsersProps[] = [
  {
    name: "Saïkou Bah",
    src: "/images/192039023_1565284050344847_6471514319054447771_n.jpg",
  },
  {
    name: "Roughaya Diallo",
    src: "/images/233154272_364326375228180_5723770479990960621_n.jpg",
  },
  {
    name: "Mamadou Idrissa Balde",
    src: "/images/203455874_1623815441155783_8387142564935611831_n.jpg",
  },
  {
    name: "Rouguiatou Konkorein Diallo",
    src: "/images/96427937_2256581151303767_8731072152263983104_n.jpg",
  },
  {
    name: "Nna Aissata Bah",
    src: "/images/175679753_3655416378016891_1991107932190602366_n.jpg",
  },
  {
    name: "Amara Barry",
    src: "/images/72703598_3002076486683356_7047303388635070464_n.jpg",
  },
  {
    name: "Thierno Saïdou Bah",
    src: "/images/245195472_3701122970113214_4668903033666220174_n.jpg",
  },
  {
    name: "Bobo Diallo",
    src: "images/14333582_934058276695283_3799181793717664076_n.jpg",
  },
  {
    name: "Tahirou Kadi Baldet",
    src: "/images/125270121_1308803629465884_4314461455530527621_n.jpg",
  },
  {
    name: "Ismael Diallo",
    src: "/images/213607849_2858360291090858_6237210887753245921_n.jpg",
  },
  {
    name: "Harouna Diallo",
    src: "/images/170560296_1798929373611679_9101331927310180007_n.jpg",
  },
  {
    name: "Marwane Jjallow",
    src: "/images/67508546_1355547327925581_7546746881875902464_n.jpg",
  },
  {
    name: "Idiatou Diallo",
    src: "/images/93670727_1262342493973881_7389464591085862912_n.jpg",
  },
  {
    name: "Tahirou Kadi Baldet",
    src: "/images/125270121_1308803629465884_4314461455530527621_n.jpg",
  },
  {
    name: "Lamine Barry",
    src: "/images/236443034_2048814598606236_4609504631600559338_n.jpg",
  },
  {
    name: "Lamine Diallo",
    src: "/images/247068867_3146213972289263_8372778648829815646_n.jpg",
  },
  {
    name: "Roughaya Diallo",
    src: "/images/233154272_364326375228180_5723770479990960621_n.jpg",
  },
  {
    name: "Mamadou Idrissa Balde",
    src: "/images/203455874_1623815441155783_8387142564935611831_n.jpg",
  },
  {
    name: "Rouguiatou Konkorein Diallo",
    src: "/images/96427937_2256581151303767_8731072152263983104_n.jpg",
  },
  {
    name: "Nna Aissata Bah",
    src: "/images/175679753_3655416378016891_1991107932190602366_n.jpg",
  },
  {
    name: "Amara Barry",
    src: "/images/72703598_3002076486683356_7047303388635070464_n.jpg",
  },
  {
    name: "Thierno Saïdou Bah",
    src: "/images/245195472_3701122970113214_4668903033666220174_n.jpg",
  },
  {
    name: "Bobo Diallo",
    src: "images/14333582_934058276695283_3799181793717664076_n.jpg",
  },
  {
    name: "Ismael Diallo",
    src: "/images/213607849_2858360291090858_6237210887753245921_n.jpg",
  },
  {
    name: "Harouna Diallo",
    src: "/images/170560296_1798929373611679_9101331927310180007_n.jpg",
  },
  {
    name: "Marwane Jjallow",
    src: "/images/67508546_1355547327925581_7546746881875902464_n.jpg",
  },
  {
    name: "Idiatou Diallo",
    src: "/images/93670727_1262342493973881_7389464591085862912_n.jpg",
  },
  {
    name: "Tahirou Kadi Baldet",
    src: "/images/125270121_1308803629465884_4314461455530527621_n.jpg",
  },
  {
    name: "Lamine Barry",
    src: "/images/236443034_2048814598606236_4609504631600559338_n.jpg",
  },
];

export const SIDBAR_DATA: SidbarProps[] = [
  {
    srcXl: "/images/277534201_348047017373137_9156270968365312241_n.jpg",
    src: "/images/277534201_348047017373137_9156270968365312241_n.jpg",
    title: "Madiou Samantan",
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeFGKgqD1LsI7jSl_kHZoMIqGpLuRymxhR8aku5HKbGFH8gVQSVLTdW-e7TNZYXUGLCbYwJk68-HPIwccmc2533T",
    title: "Amis",
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeEN_oNCsw0DvTDDUdvNvT-QTcwq9_8HWZBNzCr3_wdZkE2NsVXSl5sOfXyTrMNdgmZYmVX-GiW5IEqpxL51zic3",
    title: `Groupes`,
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeGxvUMwCID9FM7788-9lWttyXl61KMasVHJeXrUoxqxUWd8HcfnT24xkdU4HbW-j0KGFU_40knHjSY7Sd5vb6KA",
    title: `Marketplace`,
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeEivT2HB4S3p6ifYS1dc4iWnx7hpL1dI8WfHuGkvV0jxcp5YMFPUWOOtPGlLv7UZ-FGjlQ9kLbehp8N1SLbXugw",
    title: `Watch`,
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeGuWGrYE-4CRNPipzbMan4d3hPcvs_L437eE9y-z8vjfrk1rcOAudbzBMOpWcgmpEj5tEzUpiYH5aGYPAkBcno8",
    title: `Souvenir`,
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeGF_wEyIsCsCRX6DlttAjJwAAtpqSJeaM4AC2mpIl5ozik-V4hl5QdRMcGM7QjJ0-Vv8KfGPVtBWpMrYu5k6kl3",
    title: `Enregistrement`,
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeF547Ojs-ARWICtHeoT5rrM65w5XJW3OETrnDlclbc4RFjOd8cG1AebxFf5qS1hbi1gzigWMQsILob96U3Kcadi",
    title: `Pages`,
  },
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/WMOYDeEqIYv.png",
    title: `évènement`,
  },
  {
    src: "https://www.facebook.com/rsrc.php/v3/ye/r/w-vdKCGzCy1.png?_nc_eui2=AeGCHy4UM85ADJG1j4NkUusuumuJABfr-dG6a4kAF-v50Qoki3wghHioqV8JAB8CvcjejS6MdyubipxfYZaWTotC",
    title: `Les plus récents`,
  },
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png?_nc_eui2=AeHfWH1SY6HG0ps8HHvpXAS285aAcSfQVKbzloBxJ9BUpkQNyxdrrKtt9IsqdSwS1-DBC97yv28sIch4y0vNWnE5",
    title: `Activité publicitaire récente`,
  },
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png?_nc_eui2=AeEa5JLyzpwB1Dw2r-DtQpaMGHN9ptS2mJ0Yc32m1LaYnaVcX_XXpGKCDOJ96Q8tZApnelY1hh0aObOzmOLwIcHW",
    title: `Collectes de dons`,
  },
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png?_nc_eui2=AeEw8NdVwNz731GOTWf1hBhxFjhaWUpP68wWOFpZSk_rzLAHGUVDgveOtHLf4hPi5Ror4qiePvGAei_A4bIm5BKv",
    title: `COVID-19 - Centre d'information`,
  },
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png?_nc_eui2=AeErKZ_1kQuXlrUaC08j0Rp8dJ1I9kdbuqh0nUj2R1u6qPiE3o7ZiZFXP39DxWq1IvQdDavpuHC7yyGzZrE-Gbsq",
    title: `Espace Pubs`,
  },
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png?_nc_eui2=AeFrnkArzE6GqwzYwplaeTZmBcsI70keWaQFywjvSR5ZpPlh9TpfSldrdW4W-UkyI0hY46Zv6RKwMcS3kQ5vtCbY",
    title: `Facebook Pay`,
  },
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png?_nc_eui2=AeGd7Yj24gRGczrCTq7MW8BiVivWqxwsAktWK9arHCwCSx_r0Jx3hfXpjKmuYvGdY-b-9S9ht3zziNKCUnbr323x",
    title: `Favoris`,
  },
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/9s7nhm949yb.png?_nc_eui2=AeEqqmnqdbBX_-70Mg5tCqzVeGGnOd3v9yJ4Yac53e_3Ivp2U1kJT5UAdCKkvCjOxzNbIDCQCTttS4s6DY8jThUy",
    title: `Forum d'aide`,
  },
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png?_nc_eui2=AeEMnwPcI0j5E979p1mlCxpm1AOmmFeO9TXUA6aYV471NadMhy6U1Uwagteg41LGnaIecPMVeD_Tz94Wdrvg7Tai",
    title: `Gestionnaire de publicités`,
  },
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png?_nc_eui2=AeGUSFYk5xYWvFJYO4HXv93pnh-wUgbTF8ueH7BSBtMXy_fxnkwlSd4A-WTtPSGVa9j1q_4BERPatqxtCf6Wmje9",
    title: `Jouer à des jeux`,
  },
  {
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png?_nc_eui2=AeHlAqrur0ck1XRZPPxOn2IZhcFGLuoBbQiFwUYu6gFtCMR-zQRL7VE6VL2cz_GqPo5w8XNqxbzWb0_Wt0-OtZ5m",
    title: `Messager`,
  },
];

export const USER_IN_CONVERSATION: ConversationUserProps[] = [
  {
    name: "Amdoury Breezy",
    className: "bottom-52",
    src: "/images/82541167_2699305243510482_5271575840440713216_n.jpg",
  },
  {
    name: "Roughaya Jallow",
    className: "bottom-36",
    src: "/images/233154272_364326375228180_5723770479990960621_n.jpg",
  },
  {
    name: "Saïkou Bah",
    className: "bottom-20",
    src: "/images/192039023_1565284050344847_6471514319054447771_n.jpg",
  },
];

export const CONVERSATION_USER_DEFAULT_VALUE = {
  isOpen: false,
  data: { name: "", src: "" },
};
