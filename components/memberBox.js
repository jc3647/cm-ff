import React from 'react';
import styles from './MemberBox.module.css';

const MemberBox = ({ member }) => {

    const owner = member.is_owner ? "(commish)" : ""
    const avatarUrl = "https://sleepercdn.com/avatars/thumbs/"

    return (
        <div className={styles["flex-item"]}>
            <img className={styles.memberAvatar} src={avatarUrl + member.avatar} alt={`Avatar of ${member.display_name}`} />
            <p>{member.display_name}</p>
        </div>
    );
}

export default MemberBox;