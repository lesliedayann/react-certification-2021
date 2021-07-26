import React from 'react';
import {render, screen} from '@testing-library/react';
import VideoCard from './VideoCard.component';

describe('<VideoCard />', ()=>{
    const correctProps={
        imageURL: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
        title: 'this is a little title',
        description: 'this is a description'
    }
    test('render component', ()=>{
        render (<VideoCard {...correctProps}/>)
        
    }); 
    test('render component by title', ()=>{
        render (<VideoCard {...correctProps}/>)
        const getByTitle = screen.getByText(/this is a little title/i);
        expect(getByTitle).toBeInTheDocument(); 
    }); 
    test('render component by description', ()=>{
        render (<VideoCard {...correctProps}/>)
        const getByDescription = screen.getByText(/this is a description/i);
        expect(getByDescription).toBeInTheDocument(); 
    });   
});
