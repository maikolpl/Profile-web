import type { Certificado } from "../types/Certificados"
import './Cerificados.css'


type CertificadosListProps = {
    certificado: Certificado[]
}

export function Certificados({ certificado }: CertificadosListProps) {
    return (
        <div className="certificadosContainer">
            <h2>Certificados De Programación</h2>
            <div className="certificadosGrid">
                {
                    certificado.map((item) => (
                        <div key={item.id} className="certificadoCard">
                            <div className="certificadoImgContainer">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3 className="certificadoTitle">{item.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}