import React from 'react';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/inertia-react';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import Markdown from '@/Components/Markdown';

export default function Show(props) {
    const { data: article, related: articles } = props.article;
    return (
        <div>
            <Head title={article.title} />
            <Header>
                <div className="mb-4">
                    <div className="mb-4 text-sm text-gray-400">
                        Fill in:{' '}
                        <Link
                            className="text-white underline"
                            href={route(
                                'categories.show',
                                article.category.slug
                            )}
                        >
                            {article.category.name}
                        </Link> by <Link
                            className="text-white underline"
                            href={`/${article.author.username}`}
                        >
                            {article.author.name}
                        </Link>
                    </div>
                    {article.tags.length ? (
                        <div className="flex items-center gap-x-2">
                            {article.tags.map((tag) => (
                                <Link
                                    className="px-2 py-1 text-xs font-medium text-white transition duration-200 bg-gray-700 border-t border-gray-600 rounded shadow hover:bg-gray-600"
                                    key={tag.slug}
                                    href={route('tags.show', tag.slug)}
                                >
                                    {tag.name}
                                </Link>
                            ))}
                        </div>
                    ) : null}
                </div>
                <Header.Title>{article.title}</Header.Title>
                <Header.Subtitle>{article.teaser}</Header.Subtitle>
            </Header>
            <Container>
                <div className="grid grid-cols-12 gap-16">
                    <div className="col-span-8">
                        {article.picture ? (
                            <img
                                className="w-full mb-6 rounded"
                                src={article.picture}
                                alt=""
                            />
                        ) : null}
                        <Markdown>{article.body}</Markdown>
                    </div>
                    <div className="col-span-4">
                        <h4 className="pb-2 mb-4 text-xl font-semibold text-black border-b">
                            More about {article.category.name}
                        </h4>
                        {articles.length ? (
                            <ul className="space-y-2">
                                {articles.map((article) => (
                                    <li key={article.slug}>
                                        <Link
                                            className='text-blue-600 underline line-clamp-2 decoration-blue-500'
                                            href={route(
                                                'articles.show',
                                                article.slug
                                            )}
                                        >
                                            {article.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
