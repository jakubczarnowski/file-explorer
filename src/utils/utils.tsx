import { FileInfo } from "../providers/PathProvider/PathContext.types";
import { IconType } from "react-icons";
import { GoFileDirectory } from "react-icons/go";
import { BiFileBlank } from "react-icons/bi";
import { AiFillFilePdf, AiFillFileImage, AiFillFileText } from "react-icons/ai";

export const mapFileTypeToIcon = (file: FileInfo): IconType => {
    if (file.isDirectory) {
        return GoFileDirectory;
    }
    const extension = file.name.split(".")[1];
    if (!extension) {
        return BiFileBlank;
    }
    if (["png", "jpg", "jpeg", "webp"].includes(extension)) {
        return AiFillFileImage;
    }
    if (["txt", "doc", "docx", "rtf"].includes(extension)) {
        return AiFillFileText;
    }
    if (extension === "pdf") {
        return AiFillFilePdf;
    }
    return BiFileBlank;
};
