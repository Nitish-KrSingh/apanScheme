import React from 'react';
import Card from './ui/Card';

const About = () => {
    return (
        <div>
            <Card>
            <h2 className='pt-5'>#GOVERNMENTSCHEMESFORYOU</h2>
            <p>apnaScheme is an web application proposed to help citizens choose the right government schemes for their needs.<br />
                In India government provides various welfare schemes to citizens across different categories, including education, health, agriculture, etc.
                <br />
                However it can often challenging for people to navigate through the vast number of schemes and select the ones that best suit their needs.<br />
                The Objective of apnaScheme is to simplify the process of identifying and selecting government schemes for citizens by providing a user friendly 
                platform that enables them to easily search, browse and select schemes based on their eligibility criteria location and specific needs.
            </p>
            </Card>
        </div>
    )
}

export default About;