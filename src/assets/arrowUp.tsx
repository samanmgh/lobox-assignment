const ArrowUp = ({color = "#000", size = "24"}: {color?: string, size?: string}) => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
            <path
                fill={color}
                d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
        </svg>

    );
}

export default ArrowUp;