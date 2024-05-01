const CheckmarkIcon = ({color = "#000", size = "20"}: {color?: string, size?: string}) => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
            <path fill={color} d="M0 11l2-2 5 5 11-11 2 2-13 13z"></path>
        </svg>
    );
}

export default CheckmarkIcon;