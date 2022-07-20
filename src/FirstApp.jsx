import PropTypes from 'prop-types';


export const FirstApp = ({ title, subTitle }) => {


    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>

    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Alvaro Tapia',
    subTitle: 'No hay sub titulo',

}