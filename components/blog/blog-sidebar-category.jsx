import Link from 'next/link';
import React from 'react';

const BlogSidebarCategory = () => {
    return (
        <div className="sidebar__widget mb-30">
            <div className="sidebar__widget-head mb-35">
                <h4 className="sidebar__widget-title">Category</h4>
            </div>
            <div className="sidebar__widget-content">
                <div className="sidebar__category">
                    <ul>
                        <li><Link href="/blog"><a>Fruit and vegetables</a></Link></li>
                        <li><Link href="/blog"><a>Starchy food</a></Link></li>
                        <li><Link href="/blog"><a>Protein</a></Link></li>
                        <li><Link href="/blog"><a>Health & wellbeing</a></Link></li>
                        <li><Link href="/blog"><a>Eat Well, Your Way</a></Link></li>
                        <li><Link href="/blog"><a>Fresh vegetables</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebarCategory;