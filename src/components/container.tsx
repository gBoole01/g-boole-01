type Props = {
    children? : React.ReactNode;
}

const Container = ({
    children
}: Props) => <div className="container mx-auto px-9">{children}</div>

export default Container