import Link from 'next/link';
import React from 'react';

const BlogSidebarTags = () => {
    return (
        <div className="sidebar__widget mb-30">
            <div className="sidebar__widget-head mb-35">
                <h4 className="sidebar__widget-title">Tags</h4>
            </div>
            <div className="sidebar__widget-content">
                <div className="sidebar__tag">
                    <Link href="/blog"><a>Garden</a></Link>
                    <Link href="/blog"><a>Gardening</a></Link>
                    <Link href="/blog"><a>Planting</a></Link>
                    <Link href="/blog"><a>Grass trimming</a></Link>
                    <Link href="/blog"><a>Garden care</a></Link>
                    <Link href="/blog"><a>Vagitable</a></Link>
                    <Link href="/blog"><a>Tree plantation</a></Link>
                    <Link href="/blog"><a>Tips</a></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebarTags;