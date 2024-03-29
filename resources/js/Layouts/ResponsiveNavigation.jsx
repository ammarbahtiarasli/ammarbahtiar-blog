import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import DropdownMenu from '../Components/DropdownMenu';

export default function ResponsiveNavigation() {
    const { auth } = usePage().props;
    return (
        <nav className="px-4 py-4 bg-gray-900 border-b border-gray-800 lg:hidden">
            <div className="flex items-center justify-between">
                <Link className="text-xl font-semibold text-white" href="/">
                <img src='logo.png' className="w-8 h-8 mx-auto fill-white" />
                </Link>
                <DropdownMenu
                    toggleAnimate={false}
                    label={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    }
                >
                    <DropdownMenu.Link href={'/'}>Home</DropdownMenu.Link>
                    <DropdownMenu.Link href={'/articles'}>
                        Articles
                    </DropdownMenu.Link>
                    {auth.user ? (
                        <>
                            <DropdownMenu.Link href={route('dashboard')}>
                                Dashboard
                            </DropdownMenu.Link>
                            <DropdownMenu.Link href={`/${auth.user.username}`}>
                                My profile
                            </DropdownMenu.Link>
                            <DropdownMenu.Divider/>
                            {auth.user.hasRole ? (
                                <>
                                    <DropdownMenu.Link
                                        href={route(
                                            'articles.table'
                                        )}
                                    >
                                        My articles
                                    </DropdownMenu.Link>
                                    <DropdownMenu.Link
                                        href={route(
                                            'articles.create'
                                        )}
                                    >
                                        New article
                                    </DropdownMenu.Link>
                                </>
                            ) : null}
                            <DropdownMenu.Divider/>
                            <DropdownMenu.Link
                                href={route('logout')}
                                method="POST"
                                as="button"
                            >
                                Logout
                            </DropdownMenu.Link>
                        </>
                    ) : (
                        <>
                            <DropdownMenu.Divider/>
                            <DropdownMenu.Link href={route('login')}>
                                Login
                            </DropdownMenu.Link>
                            <DropdownMenu.Link href={route('register')}>
                                Register
                            </DropdownMenu.Link>
                        </>
                    )}
                </DropdownMenu>
            </div>
        </nav>
    );
}
