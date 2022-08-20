import React from 'react';
import Card from 'react-bootstrap/Card';

const cardStyle = {
    width: '18rem',
    margin: '10px',
    padding: '10px',
    border: '1px solid black',
    backgroundColor: 'aliceblue'
}

const GitHubCard = (props) => {
    
  return (
    <Card className="text-center" style={cardStyle}>
      <Card.Header>{props.data.name}</Card.Header>
      <Card.Body>
        <Card.Title>User ID: {props.data.login}</Card.Title>
        <Card.Img variant="top" src={props.data.avatar_url} />
        <Card.Link href={props.data.url}>My GitHub Page</Card.Link>
        <Card.Text>Location: {props.data.location}</Card.Text>
      </Card.Body>
      <Card.Footer>{props.data.bio}</Card.Footer>
    </Card>
  );
};

export default GitHubCard;
