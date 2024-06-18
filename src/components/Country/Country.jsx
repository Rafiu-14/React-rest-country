import './Country.css'

const Country = ({country}) => {
    const {name, flags} = country
    return (    
        <div className='country'>
            <h3>{name.common}</h3>
            <a href="" download={flags.png}>
            <img src={flags.png} alt="" />
            </a>
            <h4>Official Name: {name.official}</h4>
        </div>
    );
};

export default Country;