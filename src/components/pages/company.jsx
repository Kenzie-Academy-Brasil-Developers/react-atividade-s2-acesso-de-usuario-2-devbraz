import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";


function Company({members}) {

  const params = useParams()
  const member = members.find((members)=> members.id === params.id )

  return (

    <div>
      <h1>Detalhes da Empresa</h1>
    
      <p>
        Nome da empresa: {member && member.name}
      </p>
    
      <Link to="/">
        Voltar
      </Link>
    </div>

  )
}

export default Company