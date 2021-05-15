import React from 'react';
import '../css/HomeContainerStyle.css';
import profileImage from '../assets/cookCard.png';
import { ProgressBar } from 'react-bootstrap';
import moment from 'moment';

const HomeContainer = () => {
    const [weekDays, setweekDays] = React.useState([]);
    const [Blanks, setBlanks] = React.useState([]);
    const [daysInMonth, setDaysInMonth] = React.useState([]);
    const [markedAsLeave, setMarker] = React.useState(true);

    React.useEffect(() => {
        let weekDaysShort = moment.weekdaysShort();
        setweekDays(weekDaysShort);
    }, []);

    const weekdayshortname = weekDays.map((day) => {
        return (
            <th key={day} className="week-day">
                {day.slice(0, 1)}
            </th>
        );
    });

    const firstDayOfMonth = () => {
        var dateObject = moment();
        var firstDay = moment(dateObject).startOf("month").format('d');
        return firstDay;
    }

    React.useEffect(() => {
        let blanks = [];
        for (let i = 0; i < firstDayOfMonth(); i++) {
            blanks.push(
                <td key={`day ${i}`} className="calendar-day empty">{""}</td>
            );
        }
        let totalDaysInMonth = [];
        for (let d = 1; d <= moment().daysInMonth(); d++) {
            let currentDay = d == moment().format("D") ? "current_day" : "";
            totalDaysInMonth.push(
                <td key={d} className={`${currentDay}`}>
                    {d}{d == moment().format("D") ? <i className="fa fa-moon-o fa-lg moon_icon" style={{ color: '#F7993A' }} aria-hidden="true"></i> : <></>}
                </td>
            );
        }
        setDaysInMonth(totalDaysInMonth);
        setBlanks(blanks);
    }, [])

    var totalSlots = [...Blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            // let insertRow = cells.slice();
            rows.push(cells);
        }
    });

    const daysinmonth = rows.map((d, i) => {
        return <tr key={i}>{d}</tr>;
    });

    return (
        <>
            <div className="container-fluid">
                <div className="row toggle_tabs">
                    <div className="col-6 text-center active_toggle_tab">
                        <p className="tab_heading">ATTENDANCE</p>
                    </div>
                    <div className="col-6 text-center">
                        <p className="tab_heading">SUBSCRIPTION</p>
                    </div>
                </div>
                <div className="home_body my-4 mx-2">
                    <div className="profile_card">
                        <img src={profileImage} alt="cook_profile" width="40%" style={{ marginTop: -15, marginLeft: 10, marginRight: 10 }} />
                        <div className="profile_detail pr-3">
                            <h2 className="profile_name">Nazma Biwi</h2>
                            <p className="profile_subtitle m-0">Chef since 2012</p>
                            <div className="leaves_div pt-2">
                                <div style={{ fontSize: 10, display: 'flex', justifyContent: 'space-between', color: 'grey' }}>
                                    <p className="m-0">Total Leaves</p>
                                    <p className="m-0" style={{ color: '#F7993A', fontWeight: 'bold' }}>02</p>
                                </div>
                                <ProgressBar variant="warning" now={20} style={{ height: 5, marginTop: 3 }} />
                            </div>
                        </div>
                    </div>
                    <div className="calendar_block">
                        <h3 className="calendar_heading">Mark Attendance</h3>
                        <div className="selected_date_div">
                            <span>{moment().format('DD MMM YYYY')} <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                            <button className="primary_button" onClick={() => markedAsLeave ? setMarker(false) : setMarker(true)}>Mark Leave</button>
                        </div>
                        <table className="custom_calendar">
                            <thead>
                                <tr>{weekdayshortname}</tr>
                            </thead>
                            <tbody>
                                {daysinmonth}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="plus_button">
                    <i className="fa fa-plus fa-lg" aria-hidden="true"></i>
                </div>
            </div>
        </>
    );
}

export default HomeContainer;