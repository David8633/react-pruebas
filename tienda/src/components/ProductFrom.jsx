import { useState } from "react";

export const ProductForm = ({ onAddProduct }) => {

    const [form, setForm] = useState({
        id: Date.now(),
        name: "",
        price: 0,
        category: "",
        stock: 0,
        isOferted: false,
        description: ""
    })
    
    function handleChange(event) {
        const { name, type, value, checked } = event.target;
        setForm(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }


    function addProduct(e) {
        e.preventDefault();
        if (form.name != "" && form.price > 0 && form.stock > 0) {
            onAddProduct(form);
        }
        setForm({
            id: Date.now(),
            name: "",
            price: 0,
            category: "",
            stock: 0,
            isOferted: false,
            description: ""
        })
    }

    return (<>

        <form onSubmit={addProduct}>
            <div className="mb-3">
                <label htmlFor="nombreProducto" className="form-label">Nombre producto</label>
                <input
                    required
                    type="text"
                    className="form-control"
                    id="nombreProducto"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio</label>
                <input
                    required
                    type="number"
                    className="form-control"
                    id="precio"
                    name="price"
                    step="0.01"
                    value={form.price}
                    onChange={handleChange}

                />
            </div>

            <div className="mb-3">
                <label htmlFor="categoria" className="form-label">Categoría</label>
                <select
                    required
                    className="form-select"
                    id="categoria"
                    name="category"
                    value={form.category}
                    onChange={handleChange}

                >
                    <option value="">Selecciona una categoría</option>
                    <option value="tech">Tecnología</option>
                    <option value="wear">Ropa</option>
                    <option value="home">Hogar</option>
                    <option value="videogames">Videojuegos</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="stock" className="form-label">Stock disponible</label>
                <input
                    required
                    type="number"
                    className="form-control"
                    id="stock"
                    name="stock"
                    min="0"
                    value={form.stock}
                    onChange={handleChange}

                />
            </div>

            <div className="form-check mb-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="enOferta"
                    name="isOferted"
                    checked={form.isOferted}
                    onChange={handleChange}

                />
                <label className="form-check-label" htmlFor="enOferta">
                    En oferta
                </label>
            </div>

            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <textarea
                    required
                    className="form-control"
                    id="descripcion"
                    name="description"
                    rows="3"
                    value={form.description}
                    onChange={handleChange}

                ></textarea>
            </div>



            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>


    </>);
}