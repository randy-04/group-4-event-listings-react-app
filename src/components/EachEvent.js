import { Card, Icon, Image, Button } from 'semantic-ui-react'

function EachEvent({ event }) {
    // destructuring the event prop for easier access
    const {id, name, image, location, date, time, price, willAttend, description} = event;
    return (
        <Card>
            {/* <Image src={image} wrapped ui={true} /> */}
            <div className="rounded-top" style={{
                height: 240,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`
            }}></div>
            <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{location}</Card.Meta>
            <Card.Description>
                {description}
            </Card.Description>
            <br />
            <Card.Description>
                {date} | {time}
                <br />
                <p className='money-bill'>
                <Icon name="money bill alternate"/>
                {price}
                </p>
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