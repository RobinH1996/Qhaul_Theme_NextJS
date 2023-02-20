import React from 'react';

const ContactMap = () => {
    return (
        <div className="bd-google__map-area pb-125">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-10 col-xl-11">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24187.924717451475!2d-74.17913762136895!3d40.72922934784896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1655544592973!5m2!1sen!2sbd"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;