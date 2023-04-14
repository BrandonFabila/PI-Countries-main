import styles from './Paginado.module.css'

const Paginado = ({ countriesPerPage, allCountries, paginado, currentPage, setCurrentPage }) => {

    const pageNumbers = []
    
    //num de pags
    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleNext = () => {
        if (currentPage < pageNumbers.length) {
          setCurrentPage(currentPage + 1);
        }
      };
    
    const handlePrev = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };

    return (
        <nav className={styles.contPrincipal} >
            <ul className={styles.paginado}>
                {pageNumbers.length > 1 &&
                    pageNumbers.map(number => (
                        <li key={number}>
                            <button 
                                onClick={() => 
                                    paginado(number)}
                                >
                                <strong>{number}</strong>
                            </button>
                        </li>
                    ))
                }
            </ul>
            {pageNumbers.length > 1 && (
              <div className={styles.buttonGroup}>
                <button onClick={handlePrev}>Anterior</button>
                <button onClick={handleNext}>Siguiente</button>
              </div>
            )}
        </nav>
    )

}

export default Paginado;