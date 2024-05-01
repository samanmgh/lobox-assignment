import {ReactElement} from "react";

interface CustomIconComponentInterface {
    color?: string,
    size?: string,
    opacity?: string,
    icon: ({color, size, opacity}: {color?: string, size?: string, opacity?: string}) => ReactElement,
}

const CustomIcon = (props: CustomIconComponentInterface) => {
    const {icon} = props;
    const IconComponent = icon;
    return (
        <IconComponent {...props} />
    )
}

export default CustomIcon;
