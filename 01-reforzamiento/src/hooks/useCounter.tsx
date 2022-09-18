import { useState } from "react";

export const useCounter = ( initialState: number ) => {
    const [ contador, setContador ] = useState<number>( initialState );

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
            default:
                setContador( 0 );
            break;
        }
    }

    return {
        contador, 
        operacionContador
    }
}
