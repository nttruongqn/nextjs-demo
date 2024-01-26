import { common, routes } from "@utils/constants";
import Button from "./Button";
import { useRouter } from "next/router";

const MainHeader: IMainHeaderComponent<IMainHeaderComponentProps> = (props) => {
    const router = useRouter();
    const { title } = props;

    const handleRedirectCreatePage = () => {
        return router.push({ pathname: routes.CLIENT.CATEGORY_PAGES.LIST.href }, undefined, { scroll: false })
    }

    return (
        <>
            <div className="components__title d-flex align-items-center bases__padding--vertical10 gap-3 bases__margin--vertical20px">
                <h4 className="bases__font--16">{title}</h4>
                <Button buttonText={common.ACTION.CREATE} fontWeight="normal" fontSize="16" textColor="black" className="bases__background--gray" onClick={() => handleRedirectCreatePage()} />
            </div>
        </>
    )

}
export default MainHeader;
