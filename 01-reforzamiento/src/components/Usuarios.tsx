import { IUsuario } from '../interfaces/IReqRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {
    const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios();

    

    const renderItem = ( usuario: IUsuario ) => {
        return (
            <tr key={ usuario.id } >
                <td>
                    <img 
                        src={ usuario.avatar } 
                        alt="avatar" 
                        className='img-fluid rounded-circle'
                    />
                    </td>
                <td>
                    { usuario.first_name } { usuario.last_name }
                </td>
                <td>
                    { usuario.email }
                </td>
            </tr>
        )
    }



    return (
        <>
            <h3>Usuarios</h3>
            <table className="table table-dark table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( usuario => renderItem( usuario ) )
                    }
                </tbody>
            </table>

            <button className="btn btn-primary"
                onClick={ paginaAnterior }
            >
                Anterior
            </button>
                &nbsp;
            <button className="btn btn-primary"
                onClick={ paginaSiguiente }
            >
                Siguiente
            </button>
        </>
    )
}
