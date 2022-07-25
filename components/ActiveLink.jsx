
//importa todo los datos que se ven desde consola para de esta manera poder extraer las propiedades de enrutamiento que tiene 
import { useRouter } from 'next/router'

import Link from 'next/link'
import { CSSProperties, FC } from 'react';

const style = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink = ({ text, href }) => {

  //Desde useRouter trae la propiedad asPath(que es la pagina en la que se encuentra)  
  const { asPath } = useRouter();

  return (

    <Link href={ href }>
        {/* Valida que SI la dirección en la que se encuentra es igual al asPath aplicara los estilos de no ser asi no aplicara nada */}
        <a style={ asPath === href ? style : undefined}> {text} </a>
    </Link>
  );
}
