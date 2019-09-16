import React, { Component } from 'react';
import { Timeline, Icon } from 'antd';

class MainTimeline extends Component {

  render() {
    return (
      <Timeline mode="alternate">
        <Timeline.Item>...</Timeline.Item>
        <Timeline.Item color="#97d700">Joined OANDA (A FinTech company based in Toronto) - 2019</Timeline.Item>
        <Timeline.Item dot={<Icon type="flag" style={{ fontSize: '16px', color: 'red' }}/>}>2019 - Moved to Canada</Timeline.Item>
        <Timeline.Item color="#fc0">Accepted a role as an Engineering Manager (Team Lead) - 2017</Timeline.Item>
        <Timeline.Item dot={<Icon type="flag" style={{ fontSize: '16px' }}/>}>2015 - Expedia acquires Orbitz</Timeline.Item>
        <Timeline.Item color="purple">Promoted to Sr. Software Engineer - 2015</Timeline.Item>
        <Timeline.Item color="purple">2014 - Joined Orbitz Worldwide as a Software Engineer II (Hotel Experimentation, Research and Development)</Timeline.Item>
        <Timeline.Item color="green">Moved to Chicago. Joined Deloitte & Touche as a Tech Consultant. (Served several clients across the US) - 2012 </Timeline.Item>
        <Timeline.Item dot={<Icon type="flag" style={{ fontSize: '16px' }}/>}>2012 - Graduated with MS in Electrical & Computer Engineering</Timeline.Item>
        <Timeline.Item color="red">Interned at Motorola Mobility - 2011</Timeline.Item>
        <Timeline.Item>2010 - Back to school for Masters</Timeline.Item>
        <Timeline.Item>Graduated from Purdue University - 2009</Timeline.Item>
        <Timeline.Item dot={<Icon type="flag" style={{ fontSize: '16px' }}/>}>2006 - Moved to USA!</Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle" style={{ fontSize: '16px' }}/>}>Got my first computer - 2000</Timeline.Item>
      </Timeline>
    );
  }

}

export default MainTimeline;
