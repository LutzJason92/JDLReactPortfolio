import React from "react";
import "./portfolio.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedMe from "../../assets/images/FeedMeApp.png";
import GivingTree from "../../assets/images/GivingTree.png";
import MileHi from "../../assets/images/milehi.png";
import DayPlanner from "../../assets/images/DayPlanner.png";
import ORMApp from "../../assets/images/ORM_coverphoto.png";
import CMSApp from "../../assets/images/JDLCMSAppscreenshot.png";
import REGEXgist from "../../assets/images/REGEXgist.png";

const Projects = [
  {
    title: "GivingTree Application",
    image: GivingTree,
    description:
      "Giving Tree helps users find IRS approve charities, making it easier to donate, and reap the tax beneftits of your contributions.",
    gitHubRepo_Link: "https://github.com/elliscj/GivingTree",
    deployedApp_Link: "https://awesome-giving-tree.herokuapp.com/",
  },
  {
    title: "FeedMe Application",
    image: FeedMe,
    description:
      "An application thats helps users make one of the hardest decisions we have to make everyday : What to Eat. Users input ingredients they have on hand and a 3rd party API returns the users various recipes they can make using those ingredients.",
    gitHubRepo_Link: "https://github.com/KerryEames-Vris/ClassProject1-FeedMe",
    deployedApp_Link: "https://kerryeames-vris.github.io/ClassProject1-FeedMe/",
  },
  {
    title: "MileHi",
    image: MileHi,
    description:
      "MileHi is a Database of Recreational Activites. Users sign in to share events they're interested in so others can join them and recreate together.",
    gitHubRepo_Link: "https://github.com/collink91/mile-hi",
    deployedApp_Link: "https://project2-milehi.herokuapp.com",
  },
  {
    title: "Day Planner",
    image: DayPlanner,
    description:
      "A Day Planner that helps users maintain their Schedule. Events remain persistent via Local Storage and can be updated or deleted upon completion.",
    gitHubRepo_Link: "https://github.com/LutzJason92/JDLDayPlanner",
    deployedApp_Link: "https://lutzjason92.github.io/JDLDayPlanner/",
  },
  {
    title: "JDL ORM Application",
    image: ORMApp,
    description:
      "Developed an Express.js API and used Sequalize to interact with the database and perform CRUD Operations. There is no deployed application as this is entirely backend, but click the link to view a walk-through video.",
    gitHubRepo_Link: "https://github.com/LutzJason92/JDLORMApp",
    deployedApp_Link:
      "https://drive.google.com/file/d/1DMnbiOO06LtHhcSrylbslMjIHtP4RiU8/view",
  },
  {
    title: "Content Managment System",
    image: CMSApp,
    description:
      "This CMS application demonstrates my ability to perform CRUD operations from the Terminal. There is no deployed application as this is entirely backend, but click the link to view a walk-through video.",
    gitHubRepo_Link: "https://github.com/LutzJason92/JDLCMSApp",
    deployedApp_Link:
      "https://drive.google.com/file/d/11ma49Kca7Nrx3BbzvxeteajXf-dGwxwT/view",
  },
  {
    title: "REGEX Tutorial",
    image: REGEXgist,
    description:
      "This gist is a tutorial about one of my favorite technologies, Regular Expressions, also known as REGEX. This gist walks readers through various components of a REGEX expression used to find URL's",
    gitHubRepo_Link: "https://github.com/LutzJason92/JDLRegexTutorial",
    deployedApp_Link:
      "https://gist.github.com/LutzJason92/1aba37a41f0093e8baf1b46b9d9e1948",
  },
];

export default function Project() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div>
      <div className="pro-wrapper">
        <h1>Projects</h1>
        <CardGroup className="pro-cardGroup">
          {/* project1 */}
          {Projects.map(
            ({
              image,
              title,
              description,
              gitHubRepo_Link,
              deployedApp_Link,
            }) => (
              <Card className="pro-cards">
                <Card.Img variant="top" src={image} className="pro-img" />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={gitHubRepo_Link}
                    >
                      <small className="text-muted">
                        View GitHub Repository:
                      </small>
                    </a>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={deployedApp_Link}
                  >
                    <small className="text-muted">
                      View Deployed Application:
                    </small>
                  </a>
                </Card.Footer>
              </Card>
            )
          )}
        </CardGroup>
      </div>
    </div>
  );
}
