import { Card, Icon, Image, Button } from 'semantic-ui-react'

function EachEvent({ event }) {
    // destructuring the event prop for easier access
    const {id, name, image, location, date, time} = event;
    return (
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{location}</Card.Meta>
            <Card.Description>
                {date} | {time}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                
                <Button primary><Icon name='time' />Attend</Button>
                <Button secondary><Icon name='delete calendar' />Delete</Button>
            </a>
            </Card.Content>
        </Card>
    )
    
}

export default EachEvent;