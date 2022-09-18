import { useCounter } from '../hooks/useCounter';


export const ContadorConHook = () => {
    const { operacionContador, contador } = useCounter( 0 );

    return (
        <>
            <h3>Contador Con Hook <small>{ contador }</small></h3>

            <button className="btn btn-primary"
                onClick={ () => operacionContador( '@incrementar' ) }
            >
                +
            </button>
            &nbsp;
            <button className="btn btn-danger"
                onClick={ () => operacionContador( '@decrementar' ) }
            >
                -
            </button>
            &nbsp;
            <button className="btn btn-success"
                onClick={ () => operacionContador( '@limpiar' ) }
            >
                Limpiar
            </button>
        </>
    )
}
