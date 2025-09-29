
interface IProps {
    title: string;
}
const TitleSec = ({ title }: IProps) => {
    return (
        <div className="flex flex-col items-center gap-[7px] pb-5 md-pb-8 text-center">
            <h2 className="text-3xl font-bold">{title}</h2>
            <div className="h-[2px] w-10 bg-primary rounded-md mx-auto"></div>
        </div>
    )
}

export default TitleSec