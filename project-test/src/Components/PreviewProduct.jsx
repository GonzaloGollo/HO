import React from 'react'

const PreviewProduct = ({ producto }) => {
  return (
    <div className="previsualizacion-producto">
    <h2>Previsualización del Producto:</h2>
    <p>Nombre del producto: {producto.nombreProducto}</p>
    <p>Descripción: {producto.descripcion}</p>
    <p>Tipo de Recurso: {producto.tipoRecurso}</p>
  </div>
  )
}

export default PreviewProduct