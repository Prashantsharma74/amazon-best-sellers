import React from 'react'
import Card from './Card';

function AllData() {

    const bookDetails = [
        {
          id:1,
          title: 'HOW INNOVATION WORKS',
          author: 'Matt Ridley',
          price: 380,
          image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww',
        },
        {
          id:2,
          title: 'The Psychology of Money',
          author: 'Morgan Housel',
          price: 295,
          image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id:3,
          title: 'Thinking Fast and Slow',
          author: 'Daniel Kahneman',
          price: 320,
          image: 'https://images.unsplash.com/photo-1593340010859-83edd3d6d13f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id:4,
          title: 'I Almost Forgot About You',
          author: 'Terry McMillan',
          price: 375,
          image: 'https://images.unsplash.com/photo-1580460848443-a5161ab7bde2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxib29rfGVufDB8fDB8fHww',
        },
        {
          id:5,
          title: 'Playing Big',
          author: 'Tara Mohr',
          price: 195,
          image: 'https://images.unsplash.com/photo-1584437893329-30e96b3cc324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id:6,
          title: 'All the Letters I Should Have',
          author: 'Rania Naim',
          price: 178,
          image: 'https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxib29rfGVufDB8fDB8fHww',
        },
      ];

    return (
        <>
            <h1 className='text-center display-3 text-decoration-underline'>Amazon Best-Sellers</h1>
            <div className='d-flex align-items-center justify-content-between m-3 flex-wrap'>
                {
                    bookDetails.map(bookDetail => <Card key={bookDetail.id} bookDetail={bookDetail} />)
                }
            </div>
        </>
    )
}

export default AllData
