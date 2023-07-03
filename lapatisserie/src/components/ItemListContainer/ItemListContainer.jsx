import Container from 'react-bootstrap/Container';

export const ItemListContainer = (props) => {
    return(
        <Container>
            
            <h5>Item List Container</h5>
            <hr />
            {props.mensaje}
            <hr />  
        </Container>
       
    )
}
 