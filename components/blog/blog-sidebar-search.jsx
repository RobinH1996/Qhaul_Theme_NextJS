import React from 'react';

const BlogSidebarSearch = () => {
    return (
        <div className="sidebar__search p-relative mb-30">
            <form action="#">
                <input type="text" placeholder="Search for blogs..." />
                <button type="submit">
                    <i className="flaticon-magnifiying-glass"></i>
                </button>
            </form>
        </div>
    );
};

export default BlogSidebarSearch;