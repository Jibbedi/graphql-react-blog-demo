import {HIDE_SIDEBAR_BREAKPOINT} from '../config/breakpoint';

export const shouldHideSidebar = () => window.innerWidth < HIDE_SIDEBAR_BREAKPOINT;