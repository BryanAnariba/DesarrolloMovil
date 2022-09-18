import { useForm } from '../hooks/useForm';
export const Formularios = () => {
    const { state, onChange } = useForm({
        email: 'test@gmail.com',
        password: 'asd.456'
    });

    return (
        <>
            {
                <code>
                    <pre>
                        {
                            JSON.stringify( state, null, 2 )
                        }
                    </pre>
                </code>
            }
            <h3>states</h3>
            <input 
                type="email" 
                name="email" 
                id="email"
                className='form-control'
                onChange={ ( e ) => onChange( e.target.value, 'email' ) }
                value={ state.email }
            />
            <input 
                type="password" 
                name="password" 
                id="password"
                className='form-control mt-2 mb-2'
                onChange={ ( e ) => onChange( e.target.value, 'password' ) }
                value={ state.password }
            />
        </>
    )
}
