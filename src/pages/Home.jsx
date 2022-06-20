import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
            <Hero hero="defaultHero">
            </Hero>
            <Banner title="Grow your skills" subtitle="Best Courses starting at 299₹" >
                <Link to="/rooms" className="btn btn-primary">
                    Our Courses
                </Link>
            </Banner>
            <Services />
            <FeaturedRooms />
        </>

    )
}
