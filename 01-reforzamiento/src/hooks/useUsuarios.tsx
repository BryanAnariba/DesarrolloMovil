import { useState, useRef, useEffect } from 'react';
import { IReqRes, IUsuario } from '../interfaces/IReqRes';
import { reqResApi } from '../services/req.res.service';

export const useUsuarios = () => {
    const [ usuarios, setUsuarios ] = useState<IUsuario[]>([]);
    const pageRef = useRef( 1 );

    useEffect(() => {
        cargaUsuarios();
    }, [] )

    const cargaUsuarios = () => {
        reqResApi.get<IReqRes>( '/users', { 
            params:{
                page: pageRef.current
        }})
        .then(( res ) => {
            if ( res.data.data.length > 0 ) {
                console.log(pageRef.current);
                console.log(res.data.data);
                setUsuarios( res.data.data );
            } else {
                pageRef.current--;
                alert( "NO HAY MAS REGISTROS" )
            }
        })
        .catch(( err ) => console.log( err ));
    }
    const paginaAnterior = () => {
        if ( pageRef.current > 1 ) {
            pageRef.current--;
            cargaUsuarios();
        }
    }

    const paginaSiguiente = () => {
        pageRef.current++;
        cargaUsuarios();
    }

    return {    
        usuarios, 
        paginaSiguiente,
        paginaAnterior,
    }
}
