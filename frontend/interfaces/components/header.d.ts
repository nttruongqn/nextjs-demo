interface IHeaderComponentProps extends IBaseCompProps { }

interface IHeaderComponent<P = {}> extends IBaseComp<P> { }

interface IHeaderComponentState extends IBaseCompState {
    language?: string;
}

