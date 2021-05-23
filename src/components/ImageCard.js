import React from 'react';
import '../css/helper.css';
import { Card } from 'react-bootstrap';
import CardImage from '../assets/main_background.png';
const styles = {
    cardImage: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
}
const ImageCard = () => {
    return (
        <Card style={{ borderRadius: 10 }}>
            <Card.Img style={styles.cardImage} variant="top" src={CardImage} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ fontSize: 14, color: 'grey' }}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ImageCard;