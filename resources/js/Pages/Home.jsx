import React from 'react';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/inertia-react';
import Container from '@/Components/Container';
import Header from '@/Components/Header';
import Grid from '@/Components/Grid';
import ArticleBlock from '@/Components/ArticleBlock';

export default function Home({ articles }) {
    return (
        <div>
            <Head title="Blog & Portfolio" />
            <Header>
                <Header.Title>Ahmad Ammar Bahtiar</Header.Title>
                <Header.Subtitle>
                @ammarbahtiarasli
                </Header.Subtitle>
                <Header.Content>
                Likes to learn something related to Web Development. Student of Informatics Engineering, Pasundan University, Bandung.
                </Header.Content>
                <div className="flex mt-8 mb-4 gap-x-2 md:mt-16">
                    <a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border-t border-gray-500 rounded-lg shadow lg:w-40 md:px-4 md:py-2 lg:px-6 lg:py-6 gap-x-1 md:h-11 md:gap-x-3 md:rounded-lg md:text-base" href="mailto:ammarbahtiasli@gmail.com">Hire Me!</a>
                    <a className="lg:w-40 px-4 py-2 md:px-4 md:py-2 lg:px-6 lg:py-6 border-blue-300 !bg-blue-600 inline-flex items-center justify-center gap-x-1 rounded-lg border-t text-sm font-medium text-white shadow md:h-11 md:gap-x-3 md:rounded-lg md:text-base" href="cv.pdf">Download CV</a>
                </div>
            </Header>

            <div id="social" className="pt-16 pb-16 mb-8 -mt-8 md:-mt-16 md:mb-16 bg-slate-100">
                <div className="max-w-screen-lg px-4 mx-auto lg:max-w-screen-2xl lg:px-8 xl:max-w-screen-xl xl:px-4">
                    <div className="w-full px-4">
                        <div className="flex flex-wrap items-center justify-center">
                            <a href="#" className="md:max-w-[56px] max-w-[48px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0
                                hover:opacity-100 lg:mx-6 xl:mx-8">
                                <img src="svg/visual-studio-code-1.svg" alt="Google" />
                            </a>
                            <a href="#" className="md:max-w-[56px] max-w-[48px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0
                                hover:opacity-100 lg:mx-6 xl:mx-8">
                                <img src="svg/github-2.svg" alt="Google" />
                            </a>
                            <a href="#" className="md:max-w-[56px] max-w-[48px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0
                                hover:opacity-100 lg:mx-6 xl:mx-8">
                                <img src="svg/php-1.svg" alt="laravel" />
                            </a>
                            <a href="#" className="md:max-w-[56px] max-w-[48px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0
                                hover:opacity-100 lg:mx-6 xl:mx-8">
                                <img src="svg/logo-javascript.svg" alt="laravel" />
                            </a>
                            <a href="#" className="md:max-w-[56px] max-w-[48px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0
                                hover:opacity-100 lg:mx-6 xl:mx-8">
                                <img src="svg/laravel.svg" alt="Google" />
                            </a>
                            <a href="#" className="md:max-w-[56px] max-w-[48px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0
                                hover:opacity-100 lg:mx-6 xl:mx-8">
                                <img src="svg/react-2.svg" alt="Google" />
                            </a>
                            <a href="#" className="md:max-w-[56px] max-w-[48px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0
                                hover:opacity-100 lg:mx-6 xl:mx-8">
                                <img src="svg/bootstrap-5.svg" alt="Google" />
                            </a>
                            <a href="#" className="md:max-w-[56px] max-w-[48px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0
                                hover:opacity-100 lg:mx-6 xl:mx-8">
                                <img src="svg/tailwindcss.svg" alt="Google" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Container>
                {articles.length ? (
                    <>
                        <Grid className='items-start'>
                            {articles.map((article) => (
                                <ArticleBlock article={article} key={article.slug} />
                            ))}
                        </Grid>
                        <Link className='block mt-10 text-blue-600' href={route('articles.index')}>Show more.</Link>
                    </>
                ) : (
                    <p>No articles yet.</p>
                )}
            </Container>
        </div>
    );
}

Home.layout = (page) => <App children={page} />;
