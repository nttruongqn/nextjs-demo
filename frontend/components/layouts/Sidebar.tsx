import { useTrans } from "@utils/hooks";
import { useRouter } from "next/router";
import { HiHome } from "react-icons/hi";
import { HiOutlineViewGrid } from "react-icons/hi";
import Img from '@components/commons/Img';

import Link from "next/link";
import { images, routes } from "@utils/constants";

const Sidebar = () => {
    const trans = useTrans();
    const router = useRouter();

    return (
        <div className="components__sidebar d-flex flex-column">
            <div className="components__sidebar-logo bases__padding20">
                <h1 className="text-white text-center"><Img width={100} height={100} src={images.ICON_LOGO} /></h1>
            </div>
            <div className="components__sidebar-menu">
                <ul className="components__sidebar-menu-list p-0">
                    <li className={`components__sidebar-menu-item d-flex align-items-center justify-content-start gap-2 bases__padding--vertical14 bases__padding--horizontal20 ${router.pathname === routes.CLIENT.ADMIN.href ? "active" : ''}`}>
                        <Link href={routes.CLIENT.ADMIN.href}>
                            <div className="components__sidebar-menu-item-text">
                                <HiHome className="text-white" />
                                <span className="text-white">{trans.sidebar?.home_page}</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`components__sidebar-menu-item d-flex align-items-center justify-content-start gap-2 bases__padding--vertical14 bases__padding--horizontal20 ${router.pathname === routes.CLIENT.CATEGORY_PAGES.LIST.href ? "active" : ''}`}>
                        <Link href={routes.CLIENT.CATEGORY_PAGES.LIST.href}>
                            <div className="components__sidebar-menu-item-text">
                                <HiOutlineViewGrid className="text-white" />
                                <span className="text-white">{trans.sidebar?.category}</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar
