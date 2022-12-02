import { IconType } from "react-icons";

export type Props = {
    name: string;
    icon: IconType;
    onDoubleClick?: () => void;
    iconColor?: string;
};
