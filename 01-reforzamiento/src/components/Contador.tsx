import { useState } from "react"

export const Contador = () => {
    const [ contador, setContador ] = useState<number>( 0 );

    const operacionContador = ( opcion: string ) => {
        switch ( opcion ) {
            case '@incrementar':
                setContador( contador + 1 );
            break;
            case '@decrementar':
                setContador( contador - 1 );
            break;
            case '@limpiar':
                setContador( 0 );
            break;
        }
    }

    return (
        <>
            <h3>Contador <small>{ contador }</small></h3>

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
