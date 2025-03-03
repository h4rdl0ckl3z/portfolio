"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import classNames from 'classnames';

export const SectionWork = () => {
    const { theme } = useTheme();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const border = theme === 'light' ? 'border-black' : 'border-white';
    const bg = theme === 'light' ? 'bg-black' : 'bg-white';

    const events = [
        { year: 'Full Stack Developer | 11/12/2024 - 5/3/2025', title: 'Elegance Consultant Co.,Ltd.', description: 'Full Stack Developer with Devops and CI/CD', details: ['SingleSignOn (KeyCloak Provider)', 'SSO Client Realm Management (NextJS)'] },
        { year: 'Student Project | 2023', title: 'Development of A Management System For Teaching Materials', description: 'Management durable articles of Science and Technology faculty, add the durable articles to the system, lending and return, fixing, sale and tracking', details: ['Design the database (MySQL)', 'Coding in PHP, JavaScript, J-Query, AJAX', 'Manual Testing'] },
        { year: 'Application Developer | 2022', title: 'STS System & Development Co, Ltd', description: '', details: ['Programming the Auto e-GP (Thai Government Procurement)', 'Convert Database (Access to MariaDB)', 'IT-Support (Network and Server, Install and Update OS, Hardware)', 'Customer-Support', 'Assistance (Developer, Design UX/UI for the website, Web service-Planning)'] }
    ];

    const EventItem = ({ year, title, description, details }: { year: string, title: string, description: string, details: string[] }) => (
        <div className="flex items-center mb-8">
            <div className="w-1/2 text-right pr-8">
                <p className="text-lg">{year}</p>
            </div>
            <div className="relative w-1/2">
                <div className={classNames('absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full', isClient ? bg : 'bg-transparent')}></div>
                <div className="ml-8">
                    <p className="mb-4 font-bold">{title}</p>
                    <p className="mb-4">{description}</p>
                    {details.map((detail, index) => (
                        <p key={index} className="mb-4">· {detail}</p>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section id="work" className="py-20">
            <div className="mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Work</h2>
            </div>
            <div className="relative py-4 pr-4">
                <div className={classNames('absolute left-1/2 transform -translate-x-1/2 h-full border-l-2', isClient ? border : 'border-transparent')}></div>
                {events.map((event, index) => (
                    <EventItem key={index} year={event.year} title={event.title} description={event.description} details={event.details} />
                ))}
            </div>
        </section>
    );
}
