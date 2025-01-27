"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./index.module.css";
import Image from "next/image";

const ClientReviews = () => {
    const clientReviewsData = [
        {
            title: "consectetur adipiscing elit.",
            subTitle:
                "consectetur adipiscing elit. In sagittis, mauris vitae gravida lobortis, lorem eros imperdiet ligula, eu vestibulum mauris metus fringilla dolor. Phasellus commodo ornare felis id auctor. Quisque condimentum, ipsum non aliquet laoreet,",
            image: "./images/Ellipse 2.png",
            name: "Kartik Singh",
            designation: "HR",
            company: "ABC company",
        },
        {
            title: "Innovative Solution",
            subTitle:
                "Lorem ipsum dolor sit amet, adipiscing elit. In sagittis, mauris vitae consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
            image: "./images/Ellipse 3.png",
            name: "Priya Patel",
            designation: "CTO",
            company: "Tech Innovations Inc.",
        },
        {
            title: "Exceptional Service",
            subTitle: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "./images/Ellipse 4.png",
            name: "Rahul Sharma",
            designation: "CEO",
            company: "Global Solutions",
        },
        {
            title: "Game Changing Approach",
            subTitle: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            image: "./images/Ellipse 5.png",
            name: "Ananya Gupta",
            designation: "Product Manager",
            company: "Innovative Startups",
        },
        {
            title: "Transformative Partnership",
            subTitle: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
            image: "./images/Ellipse 6.png",
            name: "Vikram Mehta",
            designation: "COO",
            company: "Enterprise Solutions",
        },
        {
            title: "Outstanding Results",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae gravida lobortis, lorem eros imperdiet ligula, eu vestibulum mauris metus fringilla dolor.",
            image: "./images/Ellipse 7.png",
            name: "Neha Reddy",
            designation: "Marketing Director",
            company: "Digital Dynamics",
        },
        {
            title: "Cutting-Edge Technology",
            subTitle: "Consectetur adipiscing elit. Phasellus commodo ornare felis id auctor. Quisque condimentum, ipsum non aliquet laoreet, nisi vel consectetur interdum.",
            image: "./images/Ellipse 8.png",
            name: "Arun Kumar",
            designation: "Head of Innovation",
            company: "TechGrow Solutions",
        },
        {
            title: "Strategic Collaboration",
            subTitle: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
            image: "./images/Ellipse 9.png",
            name: "Divya Nair",
            designation: "Strategy Lead",
            company: "Innovative Strategies",
        },
        {
            title: "Remarkable Performance",
            subTitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
            image: "./images/Ellipse 10.png",
            name: "Rohan Malhotra",
            designation: "Business Development",
            company: "Growth Partners",
        },
        {
            title: "Revolutionary Approach",
            subTitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
            image: "./images/Ellipse 11.png",
            name: "Shreya Verma",
            designation: "Innovation Manager",
            company: "Future Tech",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const animationTimeoutRef = useRef | (null > null);
    const autoplayIntervalRef = useRef | (null > null);

    // Responsive items per slide calculation
    const calculateItemsPerSlide = useCallback(() => {
        const width = window.innerWidth;
        return width >= 1024 ? 3 : width >= 640 ? 2 : 1;
    }, []);

    // Responsive handling
    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(calculateItemsPerSlide());
        };

        // Set initial items per slide
        handleResize();

        // Add resize listener
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [calculateItemsPerSlide]);

    // Improved slide navigation with debounce
    const navigateSlide = useCallback(
        (newIndex) => {
            // Clear any existing animation timeout
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }

            // Prevent multiple rapid clicks
            if (isAnimating) return;

            // Calculate total possible slides
            const maxIndex = clientReviewsData.length - itemsPerSlide + 1;
            const safeIndex = (newIndex + maxIndex) % maxIndex;

            // Set animating state and index
            setIsAnimating(true);
            setCurrentIndex(safeIndex);

            // Reset animation state after transition
            animationTimeoutRef.current = setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        },
        [clientReviewsData.length, itemsPerSlide, isAnimating]
    );

    // Slide navigation methods
    const nextSlide = useCallback(() => {
        navigateSlide(currentIndex + 1);
    }, [navigateSlide, currentIndex]);

    const prevSlide = useCallback(() => {
        navigateSlide(currentIndex - 1);
    }, [navigateSlide, currentIndex]);

    // Autoplay management
    useEffect(() => {
        // Clear any existing interval
        if (autoplayIntervalRef?.current) {
            clearInterval(autoplayIntervalRef.current);
        }

        // Cleanup
        return () => {
            if (autoplayIntervalRef.current) {
                clearInterval(autoplayIntervalRef.current);
            }
        };
    }, [nextSlide]);

    // Prevent memory leaks
    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
            if (autoplayIntervalRef.current) {
                clearInterval(autoplayIntervalRef.current);
            }
        };
    }, []);

    return (
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 mb-8 ${styles.container}`}>
            <div className="relative overflow-hidden rounded-lg pb-6 pt-3">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
                    }}
                >
                    {clientReviewsData.map((client, index) => (
                        <div key={index} className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 ${styles.client_grid_item}`}>
                            <div>
                                <h2>{client.title}</h2>
                                <p>{client.subTitle}</p>
                            </div>
                            <div>
                                <Image alt="Image" src={require("./images/Ellipse 2.png")} width={100} height={100} />
                                <h3>{`${client.name} | ${client.designation} ${client.company}`}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    disabled={isAnimating}
                    className="absolute top-1/3 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous sponsor"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={isAnimating}
                    className="absolute top-1/3 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next sponsor"
                >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            <div className="flex justify-center mt-6">
                {clientReviewsData.slice(0, clientReviewsData.length - itemsPerSlide + 1).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => navigateSlide(index)}
                        className={`h-3 w-3 rounded-full mx-1 focus:outline-none transition-all duration-300 ${
                            index === currentIndex ? "bg-[var(--primary-color)] w-6" : "bg-gray-300 hover:bg-indigo-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ClientReviews;
