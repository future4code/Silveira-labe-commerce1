import React from 'react';
import styled from 'styled-components'


const ContainerFiltro = styled.div`
    font-size: 20px;
    font-weight:bold;
    font-family: 'Courier New', Courier, monospace;
    padding: 20px;
    grid-area: filtro;
    input {
        width: 150px;
    }`



export class Filter extends React.Component {

    render() {
        return (


            <ContainerFiltro>
                <h3>Filtro:</h3>
                <p>Valor mínimo:</p>
                <input
                    type="number"
                    value={this.props.minFilter}
                    onChange={this.props.onChangeMinFilter}
                    placeholder="1"
                />
                <p>Valor máximo:</p>
                <input

                    type="number"
                    value={this.props.maxFilter}
                    onChange={this.props.onChangeMaxFilter} 
                    placeholder="1000"
                    />

                <p>Busca por nome:</p>
                <input
                    type="text"
                    value={this.props.nameFilter}
                    onChange={this.props.onChangeNameFilter}
                    placeholder="Pesquisar..."
                />

            </ContainerFiltro>

        )
    }
}