import React from "react";
import "./portfolio.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import FeedMe from "../../assets/images/FeedMeApp.png";
import MileHi from "../../assets/images/milehi.png";
import DayPlanner from "../../assets/images/DayPlanner.png";

const Projects = [
  {
    title: "FeedMe Application",
    image: FeedMe,
    description:
      "An application thats helps users make one of the hardest decisions we have to make everyday : What to Eat. Users input ingredients they have on hand and a 3rd party API returns the users various recipes that can make using those ingredients.",
    gitHubRepo_Link: "https://github.com/KerryEames-Vris/ClassProject1-FeedMe",
    deployedApp_Link: "https://kerryeames-vris.github.io/ClassProject1-FeedMe/",
  },
  {
    title: "MileHi",
    image: MileHi,
    description:
      "MileHi is a Database of Recreational Activites. Users sign in to share events theyre interested in so others can join them and recreate together.",
    gitHubRepo_Link: "https://github.com/collink91/mile-hi",
    deployedApp_Link: "https://project2-milehi.herokuapp.com",
  },
  {
    title: "Day Planner",
    image: DayPlanner,
    description:
      "A Day Planner that helps users maintain thier Schedule. Events remain persistent via Local Storage and can be updated or deleted upon completion.",
    gitHubRepo_Link: "https://github.com/LutzJason92/JDLDayPlanner",
    deployedApp_Link: "https://lutzjason92.github.io/JDLDayPlanner/",
  },
  {
    title: "",
    image: "",
    description: "",
    gitHubRepo_Link: "",
    deployedApp_Link: "",
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
                    href={Projects[0].deployedApp_Link}
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
