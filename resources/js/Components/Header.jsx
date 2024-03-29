import clsx from 'clsx';
import React from 'react';

function Header({ className = '', children }) {
    return (
        <div
            className={clsx(
                className,
                '-mt-8 mb-8 md:mb-16 grid grid-cols-12 bg-gray-900 py-5 lg:py-28 circuit'
            )}
        >
            <div className="col-span-10 col-start-2">
                <div className="max-w-4xl">{children}</div>
            </div>
        </div>
    );
}
function Title({ children }) {
    return (
        <h1 className="text-3xl antialiased font-bold tracking-tight text-white lg:text-6xl">
            {children}
        </h1>
    );
}
function Subtitle({ children }) {
    return (
        <h4 className="mt-2 leading-relaxed text-gray-300 lg:mt-6 lg:text-2xl">
            {children}
        </h4>
    );
}
function Content({ children }) {
    return (
        <div className="mt-4 leading-relaxed text-gray-400 lg:text-xl">
            {children}
        </div>
    );
}

Header.Title = Title;
Header.Subtitle = Subtitle;
Header.Content = Content;

export default Header;
