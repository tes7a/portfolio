import s from "./BurgerMenu.module.scss";

export const burgerStyleScroll = ({toggle, scroll, className1, className2}:
                                      {toggle: boolean, scroll: boolean, className1: string, className2: string}) => {
    let burgerStyle = toggle ? `${className1}` : `${className2}`;
    if (toggle && scroll) {
        burgerStyle += ` ${s.stickyBar}`
    }
    if(toggle || scroll) {
        burgerStyle += ` ${s.stickyBarPosition}`
    }

    return burgerStyle
}