import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';
import SuggestedAccount from '~/SuggestedAccount';

function SideBar() {
    const cx = classNames.bind(styles);
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccount label="Suggested accounts" />
            <SuggestedAccount label="Following accounts" />
        </aside>
    );
}

export default SideBar;
