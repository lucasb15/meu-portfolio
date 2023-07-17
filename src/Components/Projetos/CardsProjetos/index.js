import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import projetos from './projetos.json';
import './index.css';

export default function Cards() {
    return (
        <>
            {projetos.map(item => (
                <Card className='cards_projetos' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.imagem} className='imagem_projeto'/>
                    <Card.Body>
                        <Card.Title>{item.nome}</Card.Title>
                        <Card.Text>
                            {item.descricao}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body className='botao_projetos'>
                        <a href={item.link} className='estilo_link'><Button className='link_projeto'>Abrir</Button></a>
                        <a href={item.github} className='estilo_link'><Button className='link_github'>GitHub</Button></a>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}



