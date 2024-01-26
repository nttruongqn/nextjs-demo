interface IMainHeaderComponent<P = {}> extends IBaseComp<P> { }

interface IMainHeaderComponentProps extends IBaseCompProps {
    title: string;
    onClick?: () => void;
}

interface IMainHeaderState extends IBaseCompState {
}
