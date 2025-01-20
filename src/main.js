import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./corpse/notes1.jpg",
  "./corpse/notes2.jpg",
  "./corpse/notes3.jpg",
  "./corpse/notes4.jpg",
  
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];



document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Exquisite Corpse
        <div class="three-model">
         <a href= "./corpse/SquareCorpse.jpg" target="_blank">
           <img src="./corpse/SquareCorpse.jpg" id="model1" alt="Model 1 Image"/>
         </a>
        </div>
        <div id="images-description">
          <div id="images">
            <a href= "./corpse/notes1.jpg" target="_blank">
             <img src= "./corpse/notes1.jpg" alt="cube1" />
            </a>
            <a href="./corpse/notes2.jpg" target="_blank">
             <img src="./corpse/notes2.jpg" alt="cube2" />
            </a>
            <a href="./corpse/notes3.jpg" target="_blank">
             <img src="./corpse/notes3.jpg" alt="cube3" />
            </a>
            <a href="./corpse/notes4.jpg" target="_blank">
             <img src="./corpse/notes4.jpg" alt="cube4" />
            </a>
          </div>
          <h4 id="description">Aγάπη [agape]  


          (n.) A selfless, unconditional love, often described as the highest form of love. It transcends romantic or familial love, emphasizing compassion, care, and goodwill toward others, especially without expecting anything in return. In philosophical and theological contexts, agape is often associated with divine love or the love that one should show toward humanity.</h4>
        </div>
      </div>
      
      

      ${/*
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
*/""}

${/*
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => 
                  `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
*/""}

    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
