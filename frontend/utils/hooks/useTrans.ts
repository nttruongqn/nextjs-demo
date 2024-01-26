import { useRouter } from 'next/router';
import { en, jp, vi } from '@utils/lang';

const useTrans = () => {
    const { locale } = useRouter();
    let trans;
    switch (locale) {
        case 'jp':
            trans = jp;
            break;
        case 'en':
            trans = en;
            break;
        case 'vi':
            trans = vi;
            break;
        default:
            trans = vi;
    }
    return trans;
};

export default useTrans;
