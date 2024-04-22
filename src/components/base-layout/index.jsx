import React from 'react';
import Headers from '../header/index'
import Footer from '../footer/index'


const BaseLayout = ({ children }) => {
    return (
        <>
            <header>
                <Headers/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default BaseLayout;