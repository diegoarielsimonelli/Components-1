import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CardComponent = ({ name, description, img, date }) => (
	<Card style={{ height: 400, margin: 20 }}>
		<Image src={img} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{name}</Card.Header>
			<Card.Meta>
				<span className='date'>{date}</span>
			</Card.Meta>
			<Card.Description>{description}</Card.Description>
		</Card.Content>
	</Card>
);

export default CardComponent;
