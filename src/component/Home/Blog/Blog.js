import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleBlog from './SingleBlog';
const blog =[
    {
        id: 1,
        title: 'Check at least a doctor in a year for your teeth ',
        name: 'Dr. John Mitchel ',
        date: '23 April 2019',
        img :'https://i.ibb.co/7vxfRGQ/clinr2.png',
        description: 'It is a long established fact that by the readable content of a lot layout. The point'
    },
    {
        id: 2,
        title: 'The tooth cancer is taking a challenge ',
        name: 'Dr. Caudi',
        date: '22 April 2019',
        img :'https://i.ibb.co/dJgY5jm/clint.png',
        description: 'It is a long established fact that by the readable content of a lot layout. The point'
    },
     {
        id: 3,
        title: '2 times of brush in a day can Keep you healthy',
        name: 'ashed Kabir  ',
        date: '24 April 2019',
        img :'https://i.ibb.co/Y8hVBK9/clint1.png',
        description: 'It is a long established fact that by the readable content of a lot layout. The point'
    }
    
]

const Blog = () => {
    return (
        <Container className="mt-5 pt-5">
            <h4 align="center" className="section-name">Our Blog</h4>
            <h1 align="center" className="section-title mb-5">From Our Blog News</h1>
            <Row className="mt-5">
                {
                    blog.map(b=><SingleBlog key={b.id} info={b}/>)
                }
            </Row>
        </Container>
    );
};

export default Blog;