import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

function Customer({members}) {

  const params = useParams()
  const member = members.find((members) => members.id === params.id) 

  return (

    <div>
      <h1>Detalhes do cliente</h1>
    
      <p>
        Nome: {member && member.name}
      </p>
    
      <Link to="/">
        Voltar
      </Link>
    </div> 

  )
}

export default Customer