import { useState } from "react";

export const Filters = ({onFilters}) => {

    const [filters,setFilters] = useState({
        name: "",
        category: ""
    })

    function handleChange(event){
        const  {name,value} = event.target;
        setFilters(prev => ({...prev,[name]:value}));
    }

    function filtersForm(){
        onFilters(filters);
    }

    return (<>

        <form onSubmit={filtersForm}>
            <div className="mb-3">
                <label htmlFor="busqueda" className="form-label">Buscar por nombre</label>
                <input
                    type="text"
                    id="busqueda"
                    name="name"
                    className="form-control"
                    placeholder="Buscar por nombre..."
                    value={filters.name}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="categoria" className="form-label">Categoría</label>
                <select
                    id="categoria"
                    name="category"
                    className="form-select"
                    value={filters.category}
                    onChange={handleChange}
                >
                    <option value="">Todas</option>
                    <option value="tech">Tecnología</option>
                    <option value="wear">Ropa</option>
                    <option value="home">Hogar</option>
                    <option value="videogames">Videojuegos</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Buscar</button>
        </form>

    </>);
}