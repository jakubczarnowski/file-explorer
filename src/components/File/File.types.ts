import { IconType } from "react-icons";

export type Props = {
    name: string;
    icon: IconType;
    onDoubleClick?: () => void;
    onRightClick?: () => void;
    iconColor?: string;
};
