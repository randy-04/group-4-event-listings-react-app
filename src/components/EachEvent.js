import { Card, Icon, Image, Button } from 'semantic-ui-react'

function EachEvent({ event }) {
    // destructuring the event prop for easier access
    const {id, name, image, location, date, time, price, willAttend, description} = event;

    const handleDelete = async (eventId) => {
        try {
          const response = await fetch(`http://localhost:3000/Events/${eventId}`, {
            method: "DELETE",
          });
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(error);
        }
      };


    
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
                <Button secondary onClick={handleDelete}><Icon name='delete calendar' />Delete</Button>
            </a>
            </Card.Content>
        </Card>
    )
    
}

export default EachEvent;