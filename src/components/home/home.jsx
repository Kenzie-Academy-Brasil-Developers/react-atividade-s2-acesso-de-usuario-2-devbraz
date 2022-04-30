import {Link} from 'react-router-dom';


function Home({members}) {

  return (

    <div>
      {members.map((member)=>{
        return (
          <div key={member.id}>
            {member.type === 'pj' ? 
              <Link  to={`/company/${member.id}`}>{member.name}</Link>
            : 
              <Link  to={`/customer/${member.id}`}>{member.name}</Link>
            }
          </div>
        )
      })}
    </div>


  )

}

export default Home