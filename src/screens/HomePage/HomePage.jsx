    import React, { useState } from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { ProductCard } from '../../Components';
    import { useCustomContext } from '../../ContextProvider/ContextProvider';
    import './HomePage.css';

    const HomePage = () => {
    const { products } = useCustomContext();
    const allProductTypes = Array.from(new Set(products.flatMap((product) => product.type)));

    const [filteredTypes, setFilteredTypes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleFilterChange = (type) => {
        if (filteredTypes.includes(type)) {
        setFilteredTypes(filteredTypes.filter((t) => t !== type));
        } else {
        setFilteredTypes([...filteredTypes, type]);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = products.filter((product) => {
        const typeMatches = filteredTypes.length === 0 || product.type.some((type) => filteredTypes.includes(type));
        const nameMatches = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return typeMatches && nameMatches;
    });

    return (
        <div className="home-page-container">
            <div className="filter-box-container">
                <div className="filter-box">
                <div className="search-box">
                <input
                type="text"
                placeholder="Search by Pokémon name..."
                value={searchQuery}
                onChange={handleSearchChange}
                />
        </div>
            <h3>Filter by Type:</h3>
            {allProductTypes.map((type) => (
                <label key={type}>
                <input
                    type="checkbox"
                    checked={filteredTypes.includes(type)}
                    onChange={() => handleFilterChange(type)}
                />
                {type}
                </label>
            ))}
            </div>
        </div>
        <div className="home-page">
            {filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id}/>
            ))}
        </div>
        </div>
    );
    };

    export default HomePage;

