import MemberBox from "./memberBox"
import styles from "./memberList.module.css"

const MemberList = ({ leagueMembers }) => {
    return (
        <div className={styles["flex-container"]}>
        {leagueMembers.map((member) => (
          <MemberBox key={member.user_id} member={member} />
          ))}
      </div>
    )
}

export default MemberList