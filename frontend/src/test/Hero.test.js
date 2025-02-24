import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

describe('Hero Component', ()=>{
    test("renders hero image",()=>{
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png")
    });
});

describe('renders signup button', ()=>{
    test("renders hero image",()=>{
        render(<Hero />);
        const signupButton = screen.getByRole("button",{name:"Sign up for free"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary")
    });
});
