import React from 'react';
import devashishportfolio from '../assets/portfolio/devashishportfolio.jpg';
import bloggingApp from '../assets/portfolio/bloggingApp.jpg';
import movieApp from '../assets/portfolio/movieApp.jpg';
// import devashishportfolio from '../assets/portfolio/devashishportfolio.jpg';
// import devashishportfolio from '../assets/portfolio/devashishportfolio.jpg';
// import devashishportfolio from '../assets/portfolio/devashishportfolio.jpg';
// import devashishportfolio from '../assets/portfolio/devashishportfolio.jpg';
// import devashishportfolio from '../assets/portfolio/devashishportfolio.jpg';

const Portfolio = () => {

    const portfolios = [
        {

            id: 1,
            src: devashishportfolio,
            href: 'https://clever-granita-cfabd0.netlify.app/',
        },

        {

            id: 2,
            src: bloggingApp,
            href: 'https://github.com/DEVELOPER22DEVASHISH/blogApp.git',
        },
        {

            id: 3,
            src: movieApp,
            href: 'https://github.com/DEVELOPER22DEVASHISH/JavaMoviesApp.git'
        },
        // {

        //     id:1,
        //     src:devashishportfolio
        // },
        // {

        //     id:1,
        //     src:devashishportfolio
        // },
        // {

        //     id:1,
        //     src:devashishportfolio
        // },
        // {

        //     id:1,
        //     src:devashishportfolio
        // },
        // {

        //     id:1,
        //     src:devashishportfolio
        // },
        // {

        //     id:1,
        //     src:devashishportfolio
        // },


    ]
    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className=" pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work here</p>

                </div>



                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ id, src, href }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <a href={href}
                                    target='_blank'
                                    rel='noreferrer'


                                >

                                    < img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />

                                </a>

                                <div className="flex items-center justify-center">

                                    {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button> */}

                                </div>

                            </div>

                        ))
                    }




                </div>
            </div>
        </div>
    )
}

export default Portfolio