import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './search.module.css';
import { FaSearch } from 'react-icons/fa'


export default function SearchComponent() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const { name, searchTerm } = useParams();

  useEffect(() => {
    setTerm(searchTerm ?? '');
  }, [searchTerm]);

  const search = async () => {
    term ? navigate('/'+name+'/Search/' + term) : navigate('/'+name+'/Search/');
  };

  return (
    <div className={classes.b}>
      <div className={classes.container}>
      <input
        className={classes.containerInput}
        type="text"
        placeholder="Search Food !"
        onChange={e => setTerm(e.target.value) }
        onKeyUp={e => e.key === 'Enter' && search()}
        value={term}
      />
      <button onClick={search} className={classes.containerButton}>  
        <FaSearch />                      
      </button>
      </div>
    </div>
  );
}
