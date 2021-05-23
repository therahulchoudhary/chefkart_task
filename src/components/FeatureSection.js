import React from 'react';
import '../css/helper.css';
const styles = {
    title: {
        fontSize: 18,
        fontWeight: 700
    },
    description: {
        fontSize: 14,
        color: 'grey',
        fontWeight: 500
    }
}
const FeatureSection = (props) => {
    return (
        <div className="description_div my-5">
            <h4 style={styles.title}>{props.title}</h4>
            <p style={styles.description}>{props.description}</p>
        </div>
    );
}

export default FeatureSection;