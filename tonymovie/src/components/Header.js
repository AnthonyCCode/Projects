import React from "react";
import '../styles.css';

export default function Header(){
    return (
        <div className='header'>
            <img className='logo' src='movie.png' alt='TonyMovies' />
            <h2 className='app-subtitle'> Movies at your fingertips!</h2>
        </div>
    );
}