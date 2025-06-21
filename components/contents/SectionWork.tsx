"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';
import classNames from 'classnames';

type EventItem = {
    year: string;
    title: string;
    description: string;
    details: string[];
};

export const SectionWork = () => {
    const { theme } = useTheme();
    const [isClient, setIsClient] = useState(false);
    const [events, setEvents] = useState<EventItem[]>([]);

    useEffect(() => {
        setIsClient(true);

        const fetchData = async () => {
            const res = await import('@/data/work-events.json');
            setEvents(res.default);
        };

        fetchData();
    }, []);

    const border = theme === 'light' ? 'border-black' : 'border-white';
    const bg = theme === 'light' ? 'bg-black' : 'bg-white';

    const TimelineItem = ({ year, title, description, details }: EventItem) => (
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
        <section id="works" className="py-20">
            <div className="mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Works</h2>
            </div>
            <div className="relative py-4 pr-4">
                <div className={classNames('absolute left-1/2 transform -translate-x-1/2 h-full border-l-2', isClient ? border : 'border-transparent')}></div>
                {events.map((event, index) => (
                    <TimelineItem key={index} {...event} />
                ))}
            </div>
        </section>
    );
};
