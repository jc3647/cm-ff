import Toolbar from '../components/toolbar'
import TitleBanner from '../components/titleBanner'
import MemberList from '../components/memberList'

const HomePage = ({ leagueMembers }) => {
  console.log(leagueMembers, "beef")
  return (
    <div>
      <TitleBanner title="Welcome to Chode Mongers FF! 😈"/>
      <Toolbar/>
      <div>These are the current members of the league:</div>
      <MemberList leagueMembers={leagueMembers}/>
    </div>
  )
}

export default HomePage

export async function getServerSideProps() {
  const response = await fetch("https://api.sleeper.app/v1/league/967117518299025408/users");
  const leagueMembers = await response.json();
  return {
    props: {
      leagueMembers,
    },
  };
}