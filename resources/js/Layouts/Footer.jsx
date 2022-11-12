import Container from '@/Components/Container';
import React from 'react';

export default function Footer() {
    return (
        <div className="py-10 mt-8 bg-gray-900 border-t border-gray-800 md:mt-16 circuit">
            <Container>
            <img src='logo.png' className="w-16 h-16 mx-auto fill-white" />
                <div className="max-w-2xl mx-auto text-center">
                    <p className="mt-5 text-gray-300">

                    </p>
                    <p className="max-w-lg mx-auto mt-10 font-mono text-sm text-gray-400">
                        Designed and built with all the love in the world by {' '}
                        <strong className="font-semibold text-white">
                        </strong>{' '}
                        Ammar Bahtiar.
                    </p>

                    <p className='mt-8 font-mono text-xs text-gray-400'>Copyright {import.meta.env.VITE_APP_NAME} {new Date().getFullYear()} All right reserved.</p>
                </div>
            </Container>
        </div>
    );
}
