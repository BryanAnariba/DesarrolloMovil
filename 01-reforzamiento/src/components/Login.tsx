import { useEffect, useReducer } from "react"

interface IAuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: IAuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
};

type LoginActionPayload = {
    username: string;
    nombre: string;
}

type AuthAction = 
    |   { type: '@LOGOUT' } 
    |   { type: '@LOGIN', payload: LoginActionPayload };

const authReducer = ( state: IAuthState, action: AuthAction ): IAuthState => {
    switch ( action.type ) {
        case '@LOGOUT':
            return {
                ...state,
                username: '',
                nombre: '',
                validando: false,
                token: null
            }
        case '@LOGIN':
            return {
                ...state,
                token: '123abc',
                validando: false,
                nombre: action.payload.nombre,
                username: action.payload.username 
            }
        default:
            return state;
    }
}

export const Login = () => {
    const [ state, dispatch ] = useReducer( authReducer ,initialState );

    const logIn = () => {
        dispatch({
            type: '@LOGIN',
            payload: {
                nombre: 'BRYAN ARIEL SANCHEZ ANARIBA',
                username: 'bsanchez'
            }
        })
    }

    const logOut = () => {
        dispatch({
            type: '@LOGOUT'
        })
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: '@LOGOUT'
            })
        }, 1500);
    }, []);

    if ( state.validando ) {
        return (
            <>
                <div className="alert alert-info">
                    Validando....
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>    
            
            {
                ( state.token ) 
                ?
                    <div className="alert alert-success">
                        Autenticado Como { state.nombre }
                    </div>
                :
                    <div className="alert alert-danger">
                        No Autenticado
                    </div>
            }            
                
            {
                ( !state.token )
                ?
                    <button className="btn btn-success"
                        onClick={ () => logIn() }
                    >
                        Iniciar Sesion
                    </button>
                :
                    <button className="btn btn-danger"
                        onClick={ () => logOut() }
                    >
                        Cerrar Sesion
                    </button>
            }
        
        </>
    )
}
