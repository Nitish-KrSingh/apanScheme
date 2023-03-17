import React from 'react';
import MinistryList from "./Ministries/MinistryList";

const DUMMY_Ministry = [
    {
        id: 'm1',
        title: 'Finance Ministry',
        image: 'https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZpbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        address: 'Ministry of Finance Department, New Delhi',
        description: "This is Finance Department's Schemes List"
    },
    {
        id: 'm2',
        title: 'Defence Ministry',
        image: 'https://images.unsplash.com/photo-1616348036778-e709c34901d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwYXJteXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        address: 'Minitry of Defence Department, New Delhi',
        description: 'This is Defence Department Scheme List'
    },
    {
        id: 'm4',
        title: 'Agriculture Ministry',
        image: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        address: 'Ministry of Agriculture Department, Delhi',
        description: 'This is Agriculture Department Scheme List'
    },
    {
        id: 'm4',
        title: 'Home Ministry',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        address: 'Ministry of Home Department, Delhi',
        description: 'This is Home Department Scheme List'
    }
    

]

const Ministries = () => {
    return (
        <MinistryList meetups={DUMMY_Ministry} />
    )
}

export default Ministries;