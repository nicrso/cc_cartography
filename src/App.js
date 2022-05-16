import './App.css'
import MapChart from './MapChart';
import a from './authors.jpg';

function App() {
  return (
    <>
      <header className="photobanner">
        <div className="items">
          <img
            src={a}
            alt="Banner"
          />
        </div>
      </header>
      <div className="container"> 
        <div>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <title>
            Canon and Cartography: Mapping the lives and ideas of Contemporary Civilizations’ authors
          </title>
        </div>
        <div className='body'>
          <article id="fe0fd663-e3b1-4ae3-9a47-309a847c5ef1" className="page serif">
            <header>
              <h1 
                className="page-title">
                Canon and Cartography: Mapping the Lives and Ideas of Contemporary Civilizations’ Authors
              </h1>
            </header>
            <div className="page-body">
              <p id="92c885a5-f1b5-4f69-b11d-940534fa43ba" className="">By Nicolas Ouporov </p>
              <p id="9142fe73-e90e-4c20-b6ed-9fd45c853dbc" className="block-color-gray">May 15th, 2022</p>
              <p id="1fdd74fc-c341-43c9-9adf-13de8f9f4047" className=""></p>
              <MapChart/>
              <h2 id="670b25e3-d235-4410-b2a2-977a24da1838" className="">Introduction </h2>
              <br></br>
              <p id="ae4b5753-58d4-4105-9b15-6f5560dbd047" className="">
              Contemporary Civilization, a year-long component of the Columbia Core Cirriculum, posits itself as an introduction to the arguments and ideas that have shaped our political and cultural history. Ostensibly, the aim of the course is to develop students into informed citizens and set them off with a working understanding of the values that inform community. The class carries out this mission through a cirriculum of “great books” in the philosophic tradition, a two-hour discussion session, and assignments that impell students to constuct philosohical arguments of their own.
              </p>
              <br></br>
              <p id="a8e86db7-d352-4ef5-9fce-d3c54171ad3f" className="">
              In recent years, however, this cirriculum has received immense scrutiny from students and professors alike, becoming the centerpiece in a rich discourse on representation and diversity in the Core Cirriculum. As the course adopts texts based on “historical influence, the presentation of ideas of enduring importance, and the demonstrated ability of a text to provoke productive discussion” (Rovane), the Contemporary Civilization’s texts and their authors are elevated as the cornerstones of the intellectual tradition — at least in the eyes of Columbia University. As such, a key component in the criticisms of Contemporary Civilizations is that the vast majority of the texts which are considered to meet the aforementioned criteria are composed by authors who are dead, white, and male. While the cirriculum has adapted overtime to become more inclusive after pressure by concerned students and faculty, the course as a whole still represents a distinctly Christian and European standpoint.  </p>
              <br></br>
              <p id="9e73391e-11ea-4860-9a85-3c8eebdea017" className="">
              When reflecting on my own experience in the course, this fact was often the source of many compelling conversations in class around the Core Cirriculum and the challenges present in establishing a philosophical canon. In this project, I aim to provide another entry into that converstation through the lens of a data-driven approach. By visualizing the authors of Contemporary Civilizations with respect to place and time, I hope to provide a tool to explore the development, focus, and potential biases of their works and the cirriculum as a whole.
              </p>
              <br></br>
              <h2 id="2ed2bcbe-8383-4bb0-a8ec-706d332661ab" className="">Methodology</h2>
              <br></br>
              <p id="ae4b5753-58d4-4105-9b15-6f5560dbd047" className="">
              To contruct this work, I collected data on the each contemporary civilizations author, their timeline, location they were born, and location where they died, dividing them into categories based on whether their work was required or optional in the course. Overall, I captured information on fifty-four unique authors, excluding author collectives and those who lacked comprehensive location or timeline records. 
              </p>
              <br></br>
              <p id="a8e86db7-d352-4ef5-9fce-d3c54171ad3f" className="">
              To visualize the data, I used react.js to provide the dynamic elements, react-simple-maps to plot points, Material UI for components like the timeline slider and buttons. The page was published and deployed through github pages.  </p>
              <br></br>
              <p id="9e73391e-11ea-4860-9a85-3c8eebdea017" className="">
              The end result is a interactive map that visualizes the timelines and locations of each author in the CC cirriculum throughout time. The slider provides a way to filter the timeline considered and reflect in the map. The play and pause button allow users to continuously scan through the map of the CC authors. Hovering over a circle provides the name of the corresponding author. 
              </p>
              <br></br>
              <h2 id="e1c26878-c223-4c40-a9ca-5ba61ee6c11f" className="">Conclusion</h2>
              <br></br>
              <p id="a9312367-5cfe-4fff-9dc4-1215bb67acf8" class="">
                While making this project and interacting with the map, I noticed a few interesting things about the distribution of the CC authors. The majority of authors appear between 1500 CE and 200 CE, primarily from Europe and North America. In Europe, most of the authors came from three countries: England, Germany, and France. European countries like Spain and Italy are more prevalent in the data between 1000 CE and 1500 CE. The distribution of Authors across North America is centered around the East coast, primarly in New England. 
              </p>
              <br></br>
              <p id="c0f31e10-eb7d-4259-81ad-f80e74fd7ec9" class="">
                When the cirriculum ventures outside those two major regions, it centers around India, the Caribbean, and the Middle East North Africa (MENA) region. The authors in India like Ghandi and Ambedkar are focused on through the lens of decolonialism and authors in the Middle East and North Africa primarly relate to Islamic medieval philsophy. In the Caribbean, the content is centered around responses to colonialism in Haiti and Fanon’s post-colonial thought.  
              </p>
              <br></br>
              <p id="c9b32998-fe33-4414-b6a3-f2d91463a3ec" class="">
                Another interesting perspective to consider in the difference made when including optional works on the map. When we include these authors, there is a significant impact in the regions of the world represented: we get work from areas like modern-day Peru, Cuba, the American south, Ireland, Afghanistan, and Czechia which were not present before. 
              </p>
              <br></br>
              <p id="55239ffc-3e1c-41a0-af17-edb78d782101" class="">
                In addition, it was interesting to see the relationship established not just by the distribution of the content, but also the meaning converyed by the way it was visualized. The way the content is plotted, will long lines extending between the sites of the author’s birth and death, convey a sense of movement through immagration. From this sparse data, we might catch a glimse of the way that the world was interconnected at different times through the travelling of these authors.  For example, we can see a trend of Islamic medieval authors growning up in the Iberian penisula and ending up in Eygpt and Morocco. We can also see a relationship building across the Atlantic, with authors like Paine and Arendt travelling from Europe to America, albiet in different times, while authors like Du Bois travelled from North America to West Africa. Most authors, however, seem to live and die in similair regions. This trend is particularly apparent in Western Europe. 
              </p>
              <br></br>
              <p id="d1bcddac-d4de-4135-a8cb-c625da5cdbee" class="">
                Looking to the future, there is still significant further work to be done visualizing the CC cirriculum. In my work, I did not include relgious texts like the Quran, Christian Bible, or Hebrew Bible, which consititued a huge focus of the course. While this decision was tough, I resolved that the fuzziness around their creation, the disparate time periods of the author(s), and their presentation as divinely authored made them too complicated to include on a chart that tracks the birth and death of different authors. In the future, I would be interested in incorporating data visualization techniques which can accomodate aspects of uncertainty around timelines. Going forward, it would also be highly valuable to map the major locations each author lived throughout their life, including where they wrote the works that appears on our cirriculum. This addition might be able to better capture rich information related to place and time in the CC cirriculum. To further investigate the history of CC as a whole, it would be interesting to include data on how the cirriculum has evolved over time. 
              </p>
              <br></br>
              <hr id="651bee6d-51ba-4f0a-ab5c-f5169df7f740"/>
              <p id="735aae86-c07d-499c-b381-ea2ff2165668" class="">
              </p>
              <p id="d2cc7d4b-9dd1-4960-9ecf-27b353fbd6de" class="">
                I want to extend a special thank you to Professor Sorett for his incredible guidence in and out of class. 
              </p>
              <br></br>
              <h2 id="076d0c4b-7585-4147-b900-8176b6699660" class="">
                Works Cited
              </h2>
              <br></br>
              <p id="dd13de96-5003-41cf-9952-be1eb771d54d" class="">
                “About Contemporary Civilization.” <em>About Contemporary Civilization | The Core Curriculum</em>, https://www.college.columbia.edu/core/classes/cc.php.
              </p>
              <p id="db24a5fc-2e0f-4ebc-a4b2-9aa263ba45db" class="">
                “Contemporary Civilization.” <em>Contemporary Civilization &lt; Columbia College | Columbia University</em>, https://bulletin.columbia.edu/columbia-college/core-curriculum/contemporary-civilization/.
              </p>
              <p id="6c3fd409-bd73-4414-83b1-cf883e3ca0f7" class="">
                “Contemporary Civilization.” <em>The Core Centennial</em>, https://core100.columbia.edu/course/contemporary-civilization.
              </p>
              <p id="7dbe8492-a9bb-4703-9032-d4c9cf987c6c" class="">
                Li, Charlotte. “Decolonizing CC: The Canon From a Computational Perspective.” <em>Decolonizing CC: The Canon from a Computational Perspective</em>, https://shallotly.github.io/decolonize_CC/.
              </p>
              <p id="c0b3f2a3-c475-4795-8bc3-05c456c9a0ef" class="">
                “A Location of Possibility and the Practice of Freedom: How A Decolonial Contemporary Civilization Section Is Transforming Columbia&#x27;s Classroom Culture.” <em>Columbia Daily Spectator</em>, https://www.columbiaspectator.com/the-eye/2022/02/22/a-location-of-possibility-and-the-practice-of-freedom-how-a-decolonial-contemporary-civilization-section-is-transforming-columbias-classroom-culture/.
              </p>
              <p id="171e6a4a-c1f9-4478-8f81-1234fc70a924" class="">
                <em>Pantheon</em>, https://pantheon.world/.
              </p>
              <p id="fc3489a2-6e4b-4ba8-a941-25c4f4070ac1" class="">
                Song, Tommy. “The Problematic Past of Contemporary Civilization - Columbia Spectator.” <em>Columbia Daily Spectator</em>, https://www.columbiaspectator.com/opinion/2017/10/26/the-problematic-past-of-contemporary-civilization/.
              </p>
              <p id="cb4f9bdc-ffd9-4b14-9361-efc78eb02d0b" class="">
                Song, Tommy. “The Problematic Past of Contemporary Civilization - Columbia Spectator.” <em>Columbia Daily Spectator</em>, https://www.columbiaspectator.com/opinion/2017/10/26/the-problematic-past-of-contemporary-civilization/.
              </p>
              <p id="dedb8bd3-e5e6-4c33-8935-0687386c5ff8" class="">
                <em>Stanford Encyclopedia of Philosophy</em>, Stanford University, https://plato.stanford.edu/.
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
