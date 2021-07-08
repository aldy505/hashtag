import React, {useState} from 'react';
import {copyText} from './clipboard';

function App() {
  const [hashtags, setHashtags] = useState('Put your hashtags here...');
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [hashtagsCopied, setHashtagsCopied] = useState(0);
  const [collections] = useState([{
    id: 1,
    name: 'Life',
    hashtags: '#life #life1 #life100 #life101 #life13 #life150 #life180 #life1945 #life1corvin #life1nyugati #life1p #life1taiwan #life2016 #life2017 #Life247 #life26 #life27 #life2follow #life2longisland #life2point0 #life2ride #LIFE2SHORT #Life2TheFull #life2wheels #life3 #life360 #life365 #life3d #life4 #life4alives #life4bike #life4bikeofficial #life4box #life4crafts #life4csk #life4cut #Life4Dance #life4follow #life4follower #life4like #life4likes #Life4luxus #life4music #life4pitts #life4ride #life4style #Australianewlife #artofmanslife #anglerlife #allsportlife #ayoislife #asweatlife #appreciatinglife #awplife #acquaforlife #afterworklife #annioutlife #amourshipping4life #activedutylife #arichlife #aritzialife #aarmau4life #adatewiththeloveofmylife #astanalife #acentaurslife #arubanightlife #avocadoforlife #arcticmonkeyslife #amplifylife #afitlife #adventurthatislife #artforlife #afventurethatislife #actor4life #AlchemyLife #atomskilife #amillionarieslife #advocacyislife #appgradeyourlife #advertsinglife #alittlebitoflife #africanlife #ABuggsLife #Apartylife #alightersidetolife #allottmentlife #ayawaskalife #artisticlife #artbarlife #actorslife #artlife #adeleislife',
  },
  {
    id: 2,
    name: 'Books',
    hashtags: '#books #books2017 #Books4Art #books4breakfast #books4business #books4life #Books4Sale #books4tradies #booksa #booksaboutbooks #booksaboutdepression #booksaboutdogs #booksaboutfoodclub #booksaboutlondon #booksaboutmakeup #booksaboutmovies #booksaboutmusic #booksaboutpets #booksaccount #booksactores #booksactually #booksaddict #booksaddictedclub #booksaddiction #booksadicted #abcbooks #ancientbooks #AssoulineBooks #awwcookbooks #abundleofbooks #Allaboutbooks #atlantisbooks #aTurnUpForTheBooks #alysbooks #allthepottytrainingbooks #animalbooks #AfterDarkBooks #architecturebooks #amandalovesbooks #albumnotebooks #agathabooks #albertinebooks #artdesignbooks #acupofbooks #abcsingbooks #arcturusbooks #AlberWhitmanBooks #academicbooks #affordablebooks #ayearinbooks',
  },
  {
    id: 3,
    name: 'Plants',
    hashtags: '#plant #plant15 #plant16 #plant17 #plant2016 #plant2k16 #plant3 #plant4food #plant51 #planta #PlantA6 #plantaacu #plantaacuatica #plantaaquatica #plantaardig #plantaardigeten #plantaardigmiddelburg #plantaartificial #plantaautoctona #plantabaixa #PlantaBaja #PlantaBali #plantabased #plantabilliontrees #plantablecards #plantablepaper #plantacarn #plantacarnivora #plantaccount #plantacia #plantaciondetabaco #plantacions #plantacja #plantacrasa #plantactives #Plantada #plantaddication #plantaddiction #plantadeaji #plantadeinterior #allabouttheloveoftheplant #AlienImplant #airplaneplant #airpurifierplant #avocadoplant #asphaltplant #almeerplant #aloeveraplant #awaitingtransplant #aishahairtransplant #annualplant #autologustransplant #artificialplant #almostreadyfortransplant #afterhairtransplant #arrowheadplant #adenidewiplant #arteiradeplant #animalandplant #anubiasplant #alienplant #artplant #aluminumplant #africanamericanhairtransplant #assemblyplant #aromaticsplant #aloeplant #buceplant #besttimetoplant #binnenplant #autologousstemcelltransplant #beardtransplant #ancientplant #aquascapeplant #aquaplant #aquariumplant #batchingplant #batplant #beanplant #blackplant',
  }]);

  async function copy30() {
    try {
      const splitted = hashtags.split(' ');
      const shuffled = shuffleArray(splitted);
      const array = shuffled.slice(0, 30);
      await copyText(array.join(' '));
      setHashtagsCopied(array.length);
      setCopySuccess(true);
    } catch (error) {
      setCopyFailed(true);
      console.error(error);
    }
  }

  async function copy10() {
    try {
      const splitted = hashtags.split(' ');
      const shuffled = shuffleArray(splitted);
      const array = shuffled.slice(0, 10);
      await copyText(array.join(' '));
      setHashtagsCopied(array.length);
      setCopySuccess(true);
    } catch (error) {
      setCopyFailed(true);
      console.error(error);
    }
  }

  function addToText(hashtag) {
    setHashtags(hashtag);
  }

  function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function resetAlert() {
    setHashtagsCopied(0);
    setCopySuccess(false);
    setCopyFailed(false);
  }

  return (
    <>
      <div className="font-inter dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto">
          <div className="min-h-screen lg:py-12 md:py-8 py-4 lg:px-24 md:px-12 sm:px-6 px-3">
            <h1 className="text-4xl font-bold">
            Paste your hashtags here!
            </h1>
            <div className="py-4">
              <textarea
                onFocus={() => resetAlert()}
                value={hashtags}
                onChange={event => setHashtags(event.target.hashtags)}
                cols="30"
                rows="10"
                className="w-full border-2 border-blue-500 dark:border-blue-400 px-4 py-2 rounded-xl ring-1 bg-gray-200 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800"
              >
            Put your hashtags here...
              </textarea>
              <p className="pt-6 px-4">
              or pick from a preset below..
              </p>
              <div className="py-4 flex flex-row">
                {collections.map((item, key) => (
                  <div
                    className="flex-1 px-4"
                    key={key}
                  >
                    <button
                      className="w-full px-4 py-2 border-2 border-emerald-500 dark:border-emerald-400 rounded-xl hover:bg-emerald-700 dark:hover:bg-emerald-400 hover:text-white text-emerald-700 dark:text-emerald-400"
                      onClick={() => addToText(item.hashtags)}
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
              </div>
              <p className="pt-6 px-4">
              A tip: 30 hashtags is for feed or IGTV related posts, 10 hashtags is for stories!
              </p>
              <div className="py-4 flex flex-row">
                <div className="flex-1 px-4">
                  <button
                    className="w-full px-4 py-2 border-2 border-blue-500 dark:border-blue-400 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-400 hover:text-white text-blue-700 dark:text-blue-400"
                    onClick={() => copy30()}
                  >
                  Copy 30 hashtags
                  </button>
                </div>
                <div className="flex-1 px-4">
                  <button
                    className="w-full px-4 py-2 border-2 border-blue-500 dark:border-blue-400 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-400 hover:text-white text-blue-700 dark:text-blue-400"
                    onClick={() => copy10()}
                  >
                  Copy 10 hashtags
                  </button>
                </div>
              </div>
              <div className="py-4">
                {
                  copySuccess ? (
                    <div
                      onClick={() => resetAlert()}
                      className="rounded-xl w-full text-lg px-6 py-4 bg-green-700 dark:bg-green-600 text-white"
                    >
                  😎 {hashtagsCopied} hashtags copied! (click/tap to dismiss)
                    </div>
                  ) : <></>
                }
                {
                  copyFailed ? (
                    <div
                      onClick={() => resetAlert()}
                      className="rounded-xl w-full text-lg px-6 py-4 bg-red-700 dark:bg-red-600 text-white"
                    >
                  😖 Oh no! Failed to copy those hashtags! (click/tap to dismiss)
                    </div>
                  ) : <></>
                }

              </div>
              <div className="py-4">
                <p className="text-sm text-center">
                &copy; 2021 <a
                    href="https://cpde.reinaldyrafli.com/"
                    className="underline hover:no-underline hover:text-blue-800 dark:hover:text-blue-200"
                  >Reinaldy Rafli</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
