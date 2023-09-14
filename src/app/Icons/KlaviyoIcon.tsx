const KlaviyoIcon = () => {
    return (
        <svg
            version="1.1"
            id="layer"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 200 250 250"
        >
            <linearGradient
                id="kv-grad-1"
                gradientUnits="userSpaceOnUse"
                x1="153.7492"
                y1="-303.4446"
                x2="153.7492"
                y2="-108.1781"
                gradientTransform="matrix(0.7071 0 0 -0.7071 14.4679 176.7988)"
            >
                <stop offset="0" stopColor="#EFC119" />
                <stop offset="0.3314" stopColor="#92C84E" />
                <stop offset="0.4859" stopColor="#71BF5B" />
                <stop offset="0.7506" stopColor="#15B158" />
                <stop offset="0.903" stopColor="#23AC69" />
                <stop offset="1" stopColor="#23AC69" />
            </linearGradient>
            <path
                fill="url(#kv-grad-1)"
                d="M25,315.8l91.8-60.8c4-2.3,8.9-2.3,12.9,0l91.8,60.8c3.6,1.8,5.2,6.1,3.4,9.8c-0.7,1.5-1.9,2.7-3.4,3.4
            l-12.3,8.1c-30.1-47.5-92.9-61.6-140.4-31.6c-12.7,8.1-23.5,18.8-31.6,31.6L24.8,329c-3.6-1.9-5-6.3-3.2-9.9
            C22.4,317.7,23.6,316.5,25,315.8z M123.1,315.1c-26.3,0.1-50.8,13.6-64.8,35.9l21.1,14c14.5-24.1,45.8-31.8,69.8-17.3
            c7.1,4.3,13,10.2,17.3,17.3l21.1-14C173.8,328.6,149.4,315,123.1,315.1z M123.1,365.9c-9.3,0.1-17.8,5.1-22.4,13.2l14.2,9.3
            c2.3,2,5.2,3,8.2,3c3,0,6-1.1,8.2-3l14.2-9.3C141,370.9,132.4,365.9,123.1,365.9z"
            />
        </svg>
    );
};

export { KlaviyoIcon };
