import '../css/helper.css';
import { Card } from 'react-bootstrap';
const styles = {
    cardSubTitle: {
        fontWeight: 500,
        fontSize: 12,
        color: 'grey',
        marginBottom: 25
    },
    cardDetails: {
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 600,
        fontSize: 12
    },
    smallText: {
        fontSize: 12,
        fontWeight: 600
    },
    cardButton: {
        background: '#f5f6ff',
        border: '1px solid #8cc8ff',
        borderRadius: 3,
        color: 'black',
        fontSize: 14,
        fontWeight: 600,
        marginRight: 5,
        padding: '4px 8px'
    }
}
const CampaignItem = () => {
    return (
        <Card className="p-2" style={{ borderRadius: 10, border: 0 }}>
            <Card.Body>
                <h6 className="font-weight-bold">Name</h6>
                <p style={styles.cardSubTitle}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy …</p>
                <div style={styles.cardDetails}>
                    <span><i className="fa fa-users" style={{ color: '#ff8896', fontSize: 16 }} aria-hidden="true"></i> 15,000</span>
                    <span>1000-2000 <i className="fa fa-inr" style={{ color: '#ff8896', fontSize: 16 }} aria-hidden="true"></i></span>
                </div>
                <p className="pt-3 m-0 mb-2" style={styles.smallText}><i class="fa fa-map-marker" style={{ color: '#ff8896', fontSize: 16 }} aria-hidden="true"></i> Location</p>
                <div className="ml-3">
                    <span style={styles.cardButton}>Goa</span>
                    <span style={styles.cardButton}>Mysore</span>
                </div>
                <p className="pt-3 m-0 mb-2" style={styles.smallText}><i class="fa fa-database" style={{ color: '#ff8896', fontSize: 16 }} aria-hidden="true"></i> Categories</p>
                <div className="ml-3">
                    <span style={styles.cardButton}>Food</span>
                    <span style={styles.cardButton}>Fashion</span>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CampaignItem;