export const Funciones = () => {
    const sumar = ( a: number, b: number ): number => {
        return a + b;
    }

    return (
        <>
            <h3>Funciones</h3>
            <small>El Resultado de 5 + 5: <strong>{ sumar( 5, 5 ) }</strong></small>
        </>
    )
}
