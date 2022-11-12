import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function ArticleBlock({ article }) {
    return (
        <div className="overflow-hidden transition-shadow duration-300 border rounded-lg shadow-sm hover:shadow-lg ">
            {article.picture ? (
                <Link href={route('articles.show', article.slug)}>
                    <img src={article.picture} alt="" />
                </Link>
            ) : null}
            <div className="px-4 py-4">
                <div className="mb-1">
                    {article.tags.length ? (
                        <div className="text-[10px] font-semibold tracking-tight space-x-1 mb-2">
                            {article.tags.map((tag) => (
                                <Link
                                    key={tag.slug}
                                    href={route('tags.show', tag.slug)}
                                    className="px-2 py-1 text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600"
                                >
                                    {tag.name}
                                </Link>
                            ))}
                        </div>
                    ) : null}
                    <Link href={route('articles.show', article.slug)}>
                        <h1 className="text-sm font-semibold tracking-tight text-gray-800 md:line-clamp-1">
                            {article.title}
                        </h1>
                    </Link>
                </div>

                <small className="text-xs text-gray-500 md:mt-4">
                    {article.created_at} by{' '}
                    <Link className='underline' href={`/${article.author.username}`}>
                        {article.author.name}
                    </Link>
                </small>
            </div>
        </div>
    );
}
