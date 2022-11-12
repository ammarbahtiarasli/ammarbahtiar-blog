import React from 'react';
import { usePage, Link } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';
import ResponsiveNavigation from '@/Layouts/ResponsiveNavigation';

export default function Navbar() {
    const { auth, categories_global } = usePage().props;
    return (
        <>
            <ResponsiveNavigation />
            <nav className="hidden py-4 bg-gray-900 border-b border-gray-800 border-dashed shadow lg:block">
                <div className="px-4 mx-auto max-w-screen-2xl">
                    <div className="flex items-center justify-between">
                        <Link
                            href={route('home')}
                            className="mr-3 text-lg font-semibold text-white capitalize"
                        >
                            <img src='logo.png' className="w-8 h-8 mx-auto fill-white" />
                        </Link>

                        <div className="flex items-center justify-between flex-1">
                            <div>
                                <NavLink
                                    href={route('home')}
                                    active={route().current('home')}
                                >
                                    Home
                                </NavLink>
                                {categories_global.map((category) => (
                                    <NavLink
                                        key={category.slug}
                                        active={route().current(
                                            'categories.show',
                                            category.slug
                                        )}
                                        href={route(
                                            'categories.show',
                                            category.slug
                                        )}
                                    >
                                        {category.name}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="flex items-center">
                                {auth.user ? (
                                    <div className="flex items-center">
                                        <DropdownMenu label={auth.user.name}>
                                            <DropdownMenu.Link
                                                href={route('dashboard')}
                                            >
                                                Dashboard
                                            </DropdownMenu.Link>
                                            <DropdownMenu.Link href={`/${auth.user.username}`}>
                                                My profile
                                            </DropdownMenu.Link>
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
                                            <DropdownMenu.Link
                                                href={route('logout')}
                                                method="POST"
                                                as="button"
                                            >
                                                Logout
                                            </DropdownMenu.Link>
                                        </DropdownMenu>
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        <NavLink href={route('login')}>
                                            Login
                                        </NavLink>
                                        <NavLink href={route('register')}>
                                            Register
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
