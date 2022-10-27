import axios from "axios";
import {useEffect, useState} from 'react';

const Card = () => {
    const [uf, setUf] = useState([]);
    
    useEffect(() => {
      getUF()
    }, [])

    async function getUF(){
        
        const apiUF = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados", {});
        console.log(apiUF.data);
        setUf(apiUF.data);
        // console.log(ufs)

    }
    

    return (
        <div>
            card
            <br></br>
            {uf.map((response)=>{
                return <>{response.nome}<br></br></>
            })}
        </div>
    )

}
export default Card;