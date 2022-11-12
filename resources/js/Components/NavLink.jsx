import { Link } from '@inertiajs/inertia-react';
import clsx from 'clsx';
import React from 'react';

export default function NavLink({ active = false, children, ...props }) {
    return (
        <Link
            className={clsx(
                active && 'font-semibold text-white',
                'inline-block rounded px-4 py-2 text-gray-400 hover:bg-gray-700/40 transition'
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
