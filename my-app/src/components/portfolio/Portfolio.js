import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "bootstrap/dist/css/bootstrap.min.css";
import FeedMe from "../../assets/images/FeedMeApp.png";
import MileHi from "../../assets/images/milehi.png";
import DayPlanner from "../../assets/images/DayPlanner.png";

export default function Project() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div>
      <h1>Portfolio</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={FeedMe} />
          <Card.Body>
            <Card.Title>FeedMe Application</Card.Title>
            <Card.Text>
              An application thats helps users make one of the hardest decisions
              we have to make everyday : What to Eat. Users input ingredients
              they have on hand and a 3rd party API returns the users various
              recipes that can make using those ingredients.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div>
              <small className="text-muted">GitHub Repository</small>
            </div>
            <small className="text-muted">Deployed Application</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={MileHi} />
          <Card.Body>
            <Card.Title>MileHi</Card.Title>
            <Card.Text>
              MileHi is a Database of Recreational Activites. Users sign in to
              share events theyre interested in so others can join them and
              recreate together.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div>
              <small className="text-muted">GitHub Repository</small>
            </div>
            <small className="text-muted">Deployed Application</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={DayPlanner} />
          <Card.Body>
            <Card.Title>Day Planner</Card.Title>
            <Card.Text>
              A Day Planner that helps users maintain thier Schedule. Events
              remain persistent via Local Storage and can be updated and
              deleted.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div>
              <small className="text-muted">GitHub Repository</small>
            </div>
            <small className="text-muted">Deployed Application</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
