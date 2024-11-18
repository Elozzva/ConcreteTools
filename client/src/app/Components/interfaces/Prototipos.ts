export interface Promocion {
    _id?:    string,
    Tipo:       string,
    Producto:   string,
    Inicio:     Date,
    Fin:        Date,
    Precio?:    number,
    Item?:      Producto,
    Imagen?:    string
}

export interface Producto {
    _id?:           string,
    Orden:          number,
    Nombre:         string,
    Clave:          string,
    Descripcion:    string[] | string,
    Precio:         number,
    Aplicaciones:   string[] | string,
    Imagen?:        string
}
export interface Distribuidor {
    _id?:           string,
    Nombre:         string,
    Clave:          string,
    Direccion:      string,
    Telefono:       string,
    email:          string,
    Imagen?:        string,
    Region:         string,
    Estado:         string
}
