import { useState, useEffect } from 'react';

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
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;

function SideBar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((err) => console.log(err));
    }, [page]);

    const handleSeeAll = () => {
        setPage(page + 1);
    };

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
            <SuggestedAccount label="Suggested accounts" data={suggestedUsers} onSeeAll={handleSeeAll} />
            <SuggestedAccount label="Following accounts" />
        </aside>
    );
}

export default SideBar;
