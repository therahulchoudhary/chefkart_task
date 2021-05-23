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
const FooterList = (props) => {
    return (
        <div className="description_div">
            <h4 style={styles.title}>{props.title}</h4>
            {props.items.map((element, index) => (<p style={styles.description} key={"footerItem#" + index}>{element}</p>))}
        </div>
    );
}

export default FooterList;