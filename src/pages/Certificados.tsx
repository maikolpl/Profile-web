import { useState } from "react"
import type { Certificado } from "../types/Certificados"
import './Cerificados.css'


type CertificadosListProps = {
    certificado: Certificado[]
}

export function Certificados({ certificado }: CertificadosListProps) {

    const [select,setSelect] = useState<Certificado | null>(null)
    return (
        <div className="certificadosContainer">
            <h2>Certificados De Programación</h2>
            <div className="certificadosGrid">
                {
                    certificado.map((item) => (
                        <div key={item.id} className="certificadoCard"
                         onClick={()=>setSelect(item)}
                        >
                            <div className="certificadoImgContainer">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3 className="certificadoTitle">{item.title}</h3>
                        </div>
                    ))
                }
            </div>
            {
                select && (
                    <div className="modalOverlay" onClick={()=>setSelect(null)}>
                        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                            <button className="closeBtn" onClick={()=>setSelect(null)}>
                            &times;
                            </button>

                            <img src={select.img} alt={select.title} />
                        <h3>{select.title}</h3>

                        </div>

                    </div>
                )
            }
        </div>
    )
}