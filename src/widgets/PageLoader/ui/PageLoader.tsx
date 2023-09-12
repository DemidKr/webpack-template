import {FC} from "react";
import {classNames} from "shared/lib/classNames";
import cls from './PageLoader.module.scss'
import {Loader} from "shared/ui/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const {className, ...otherProps} = props

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};

