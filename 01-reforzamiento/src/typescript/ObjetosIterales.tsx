interface IPersona {
  nombreCompleto: string;
  edad: number;
  direccion: IDireccion;
}

interface IDireccion {
  pais: string;
  casaNo: number;
}

export const ObjetosIterales = () => {
  const persona: IPersona = {
    nombreCompleto: 'Bryan Ariel Sanchez Anariba',
    edad: 25,
    direccion: {
      pais: 'Honduras',
      casaNo: 1177
    }
  }

  return (
    <>
      <h3>Objetos Iterales</h3>
      <code>
        <pre>
          { JSON.stringify( persona, null, 2 ) }
        </pre>
      </code>
    </>
  )
}
